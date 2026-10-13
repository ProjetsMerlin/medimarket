import { NextResponse, type NextRequest } from "next/server";
import { getProducts, isCategory } from "@/app/lib/products";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category") ?? undefined;
  const query = searchParams.get("q") ?? undefined;

  if (category !== undefined && !isCategory(category)) {
    return NextResponse.json({ error: "Catégorie invalide." }, { status: 400 });
  }

  const products = await getProducts({ category, query });

  return NextResponse.json(products);
}