import { categories, sortKeys, type CategoryFilter, type Filters, type Product, type SortKey } from "@/app/types/shop";

export const defaultFilters: Filters = { category: "all", sort: "default" };

export const sortLabels: Record<SortKey, string> = {
  default: "Pertinence", "price-asc": "Prix croissant", "price-desc": "Prix décroissant",
  name: "Nom (A-Z)",
};

export function isSortKey(value: string): value is SortKey {
  return (sortKeys as readonly string[]).includes(value);
}

export function isCategoryFilter(value: string): value is CategoryFilter {
  return value === "all" || (categories as readonly string[]).includes(value);
}

const collator = new Intl.Collator("fr");

export function applyFilters(products: Product[], filters: Filters): Product[] {
  const filtered =
    filters.category === "all"
      ? products
      : products.filter((product) => product.category === filters.category);

  switch (filters.sort) {
    case "price-asc":
      return [...filtered].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...filtered].sort((a, b) => b.price - a.price);
    case "name":
      return [...filtered].sort((a, b) => collator.compare(a.name, b.name));
    case "default":
      return filtered;
  }
}