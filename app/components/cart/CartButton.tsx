"use client";

import {
  useCart,
  useCartActions,
  useCartUiState,
} from "@/app/components/cart/CartProvider";
import Button from "@/app/components/ui/ButtonShop";
import { cartCount } from "@/app/lib/cart-optimistic";

export default function CartButton() {
  const { isOpen } = useCartUiState();
  const { cart } = useCart();
  const { open } = useCartActions();
  const count = cartCount(cart);

  return (
    <Button
      variant="secondary"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
      onClick={open}
    >
      Panier
      {count > 0 && (
        <span className="ml-2 rounded-full bg-neutral-900 px-2 py-0.5 text-xs text-white">
          {count}
        </span>
      )}
    </Button>
  );
}