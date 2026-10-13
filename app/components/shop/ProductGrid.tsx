"use client";

import { memo } from "react";
import ProductCard from "@/app/components/shop/ProductCard";
import type { Product } from "@/app/types/shop";

type ProductGridProps = {
  products: Product[];
};

function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="text-neutral-600">Aucun produit.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default memo(ProductGrid);
