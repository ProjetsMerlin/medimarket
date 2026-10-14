import { NextResponse, type NextRequest } from "next/server";
import { getProducts } from "@/app/lib/products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const categoryParam = searchParams.get("category");
  const query = searchParams.get("query") ?? undefined;

  const categories = [
    "maison",
    "sport",
    "tech",
    "mode",
    "jardin",
  ] as const;

  const category = categories.find((item) => item === categoryParam);

  const products = await getProducts({ category, query });

  return NextResponse.json(products);
}