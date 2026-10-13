"use client";

import { createContext, useCallback, useContext, useMemo, useOptimistic, useReducer, useTransition, type Context, type ReactNode } from "react";
import { addToCart, removeFromCart } from "@/app/actions";
import { cartReducer } from "@/app/lib/cart-optimistic";
import {
  cartUiReducer,
  initialCartUiState,
  type CartUiState,
} from "@/app/lib/cart-ui";
import type { Cart, NotificationKind, Product } from "@/app/types/shop";

type CartActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  notify: (message: string, kind?: NotificationKind) => void;
  dismiss: (id: string) => void;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
};

type CartContextValue = {
  cart: Cart;
  isPending: boolean;
};

const StateContext = createContext<CartUiState | null>(null);
const CartContext = createContext<CartContextValue | null>(null);
const ActionsContext = createContext<CartActions | null>(null);

type CartProviderProps = {
  cart: Cart;
  children: ReactNode;
};

export default function CartProvider({ cart, children }: CartProviderProps) {
  const [uiState, dispatch] = useReducer(cartUiReducer, initialCartUiState);
  const [optimisticCart, applyOptimistic] = useOptimistic(cart, cartReducer);
  const [isPending, startTransition] = useTransition();

  const uiActions = useMemo(
    () => ({
      open: () => dispatch({ type: "OPEN" }),
      close: () => dispatch({ type: "CLOSE" }),
      toggle: () => dispatch({ type: "TOGGLE" }),
      notify: (message: string, kind: NotificationKind = "info") =>
        dispatch({
          type: "NOTIFY",
          notification: { id: crypto.randomUUID(), kind, message },
        }),
      dismiss: (id: string) => dispatch({ type: "DISMISS", id }),
    }),
    [],
  );

  const { notify } = uiActions;

  const addItem = useCallback(
    (product: Product, quantity: number) => {
      startTransition(async () => {
        applyOptimistic({ type: "ADD", product, quantity });

        try {
          const result = await addToCart(product.id, quantity);

          if (result.ok) {
            notify(`${quantity} × ${product.name} ajouté au panier.`, "success");
          } else {
            notify( "error");
          }
        } catch {
          notify("Le serveur est injoignable. Réessayez.", "error");
        }
      });
    },
    [applyOptimistic, notify],
  );

  const removeItem = useCallback(
    (productId: string) => {
      startTransition(async () => {
        applyOptimistic({ type: "REMOVE", productId });

        try {
          const result = await removeFromCart(productId);

          if (!result.ok) {
            notify( "error");
          }
        } catch {
          notify("Le serveur est injoignable. Réessayez.", "error");
        }
      });
    },
    [applyOptimistic, notify],
  );

  const actions = useMemo<CartActions>(
    () => ({ ...uiActions, addItem, removeItem }),
    [uiActions, addItem, removeItem],
  );

  const cartValue = useMemo<CartContextValue>(
    () => ({ cart: optimisticCart, isPending }),
    [optimisticCart, isPending],
  );

  return (
    <ActionsContext value={actions}>
      <CartContext value={cartValue}>
        <StateContext value={uiState}>{children}</StateContext>
      </CartContext>
    </ActionsContext>
  );
}

function useRequiredContext<T>(context: Context<T | null>, hookName: string): T {
  const value = useContext(context);

  if (value === null) {
    throw new Error(`${hookName} doit être utilisé dans <CartProvider>.`);
  }

  return value;
}

export function useCartUiState(): CartUiState {
  return useRequiredContext(StateContext, "useCartUiState");
}

export function useCart(): CartContextValue {
  return useRequiredContext(CartContext, "useCart");
}

export function useCartActions(): CartActions {
  return useRequiredContext(ActionsContext, "useCartActions");
}