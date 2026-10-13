"use client";

import { useEffect, useRef } from "react";
import {
  useCart,
  useCartActions,
  useCartUiState,
} from "@/app/components/cart/CartProvider";
import Button from "@/app/components/ui/ButtonShop";
import { cartTotal } from "@/app/lib/cart-optimistic";
import { formatPrice } from "@/app/lib/format";

export default function CartDrawer() {
  const { isOpen } = useCartUiState();
  const { cart, isPending } = useCart();
  const { close, removeItem } = useCartActions();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const total = cartTotal(cart);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cart-title"
      onClose={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
      className="m-0 ml-auto h-dvh max-h-none w-full max-w-md bg-white p-0 shadow-xl backdrop:bg-black/40"
    >
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <h2 id="cart-title" className="text-xl font-bold">
            Panier
          </h2>
          <Button variant="secondary" onClick={close}>
            Fermer
          </Button>
        </div>

        {cart.length === 0 ? (
          <p className="mt-6 text-neutral-600">Votre panier est vide.</p>
        ) : (
          <ul className="mt-6 flex-1 space-y-4 overflow-y-auto">
            {cart.map((line) => (
              <li
                key={line.product.id}
                className="flex items-start justify-between gap-3 border-b border-neutral-200 pb-4"
              >
                <div>
                  <p className="font-medium">{line.product.name}</p>
                  <p className="text-sm text-neutral-600">
                    {line.quantity} × {formatPrice(line.product.price)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold">
                    {formatPrice(line.product.price * line.quantity)}
                  </p>
                  <Button
                    variant="secondary"
                    aria-label={`Retirer ${line.product.name} du panier`}
                    onClick={() => removeItem(line.product.id)}
                  >
                    Retirer
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <p
          aria-busy={isPending}
          className={`mt-6 flex justify-between text-lg font-bold ${isPending ? "opacity-50" : ""}`}
        >
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </p>
      </div>
    </dialog>
  );
}