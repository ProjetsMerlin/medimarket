"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { addLine, removeLine } from "@/app/lib/cart";
import type { CartResult } from "@/app/types/shop";

const AddSchema = z.object({
  productId: z.string().min(1).max(20),
  quantity: z.number().int().min(1).max(99),
});

const RemoveSchema = z.object({
  productId: z.string().min(1).max(20),
});

function simulateLatency(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 1200));
}

export async function addToCart(
  productId: string,
  quantity: number,
): Promise<CartResult> {
  await simulateLatency();

  const parsed = AddSchema.safeParse({ productId, quantity });

  if (!parsed.success) {
    return { ok: false, error: "Requête invalide." };
  }

  const result = await addLine(parsed.data.productId, parsed.data.quantity);

  if (result.ok) {
    revalidatePath("/", "layout");
  }

  return result;
}

export async function removeFromCart(productId: string): Promise<CartResult> {
  await simulateLatency();

  const parsed = RemoveSchema.safeParse({ productId });

  if (!parsed.success) {
    return { ok: false, error: "Requête invalide." };
  }

  const result = await removeLine(parsed.data.productId);

  if (result.ok) {
    revalidatePath("/", "layout");
  }

  return result;
}