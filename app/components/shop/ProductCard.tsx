"use client";

import { useState } from "react";
import { useCartActions } from "@/app/components/cart/CartProvider";
import Button from "@/app/components/ui/ButtonShop";
import QuantitySelector from "@/app/components/ui/QuantitySelector";
import { formatPrice } from "@/app/lib/format";
import type { Product } from "@/app/types/shop";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartActions();
  const outOfStock = product.stock === 0;

  return (
    <article className="flex h-full flex-col rounded-lg border border-neutral-200 p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-500">
        {product.category}
      </p>
      <h2 className="mt-1 font-semibold">{product.name}</h2>
      <p className="mt-1 text-sm text-neutral-600">{product.description}</p>
      <p className="mt-3 text-lg font-bold">{formatPrice(product.price)}</p>
      <p className="text-sm text-neutral-500">
        {outOfStock ? "Rupture de stock" : `${product.stock} en stock`}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2 pt-4">
        {!outOfStock && (
          <QuantitySelector
            value={quantity}
            onChange={setQuantity}
            max={product.stock}
            label={`Quantité pour ${product.name}`}
          />
        )}
        <Button
          disabled={outOfStock}
          onClick={() => addItem(product, quantity)}
        >
          Ajouter
        </Button>
      </div>
    </article>
  );
}