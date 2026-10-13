import type { Cart, Product } from "@/app/types/shop";

export type CartAction =
  | { type: "ADD"; product: Product; quantity: number }
  | { type: "REMOVE"; productId: string };

export function cartReducer(cart: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "ADD": {
      const { product, quantity } = action;
      const existing = cart.find((line) => line.product.id === product.id);

      if (!existing) {
        return [...cart, { product, quantity: Math.min(quantity, product.stock) }];
      }

      return cart.map((line) =>
        line.product.id === product.id
          ? { ...line, quantity: Math.min(line.quantity + quantity, product.stock) }
          : line,
      );
    }
    case "REMOVE":
      return cart.filter((line) => line.product.id !== action.productId);
  }
}

export function cartCount(cart: Cart): number {
  return cart.reduce((sum, line) => sum + line.quantity, 0);
}

export function cartTotal(cart: Cart): number {
  return cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
}