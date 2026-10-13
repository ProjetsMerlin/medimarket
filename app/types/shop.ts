export const categories = ["maison", "sport", "tech", "mode", "jardin"] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  stock: number;
};

export const sortKeys = ["default", "price-asc", "price-desc", "name"] as const;

export type SortKey = (typeof sortKeys)[number];

export type CategoryFilter = Category | "all";

export type Filters = {
  category: CategoryFilter;
  sort: SortKey;
};

export type NotificationKind = "success" | "error" | "info";

export type Notification = {
  id: string;
  kind: NotificationKind;
  message: string;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

export type Cart = CartLine[];

export type CartResult = { ok: true } | { ok: false; error: string };