import "server-only";

import { cookies } from "next/headers";
import { z } from "zod";
import { getProductById } from "@/app/lib/products";
import type { Cart, CartLine, CartResult } from "@/app/types/shop";

const COOKIE_NAME = "cart";
const MAX_LINES = 50;

const StoredCartSchema = z
  .array(
    z.object({
      productId: z.string(),
      quantity: z.number().int().positive(),
    }),
  )
  .max(MAX_LINES);

type StoredCart = z.infer<typeof StoredCartSchema>;

async function readStoredCart(): Promise<StoredCart> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;

  if (!raw) {
    return [];
  }

  try {
    const parsed = StoredCartSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : [];
  } catch {
    return [];
  }
}

async function writeStoredCart(stored: StoredCart): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, JSON.stringify(stored), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getCart(): Promise<Cart> {
  const stored = await readStoredCart();

  const lines = await Promise.all(
    stored.map(async ({ productId, quantity }): Promise<CartLine | null> => {
      const product = await getProductById(productId);

      if (!product) {
        return null;
      }

      const safeQuantity = Math.min(quantity, product.stock);

      return safeQuantity > 0 ? { product, quantity: safeQuantity } : null;
    }),
  );

  return lines.filter((line): line is CartLine => line !== null);
}

export async function addLine(
  productId: string,
  quantity: number,
): Promise<CartResult> {
  const product = await getProductById(productId);

  if (!product) {
    return { ok: false, error: "Produit introuvable." };
  }

  const stored = await readStoredCart();
  const existing = stored.find((line) => line.productId === productId);
  const newQuantity = (existing?.quantity ?? 0) + quantity;

  if (newQuantity > product.stock) {
    return {
      ok: false,
      error: `Stock insuffisant : ${product.stock} disponible(s) pour ${product.name}.`,
    };
  }

  if (!existing && stored.length >= MAX_LINES) {
    return { ok: false, error: "Le panier est plein." };
  }

  const next = existing
    ? stored.map((line) =>
        line.productId === productId ? { ...line, quantity: newQuantity } : line,
      )
    : [...stored, { productId, quantity }];

  await writeStoredCart(next);

  return { ok: true };
}

export async function removeLine(productId: string): Promise<CartResult> {
  const stored = await readStoredCart();

  await writeStoredCart(stored.filter((line) => line.productId !== productId));

  return { ok: true };
}