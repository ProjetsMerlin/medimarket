"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import ProductFilters from "@/app/components/shop/ProductFilters";
import ProductGrid from "@/app/components/shop/ProductGrid";
import SearchBar from "@/app/components/shop/SearchBar";
import { applyFilters, defaultFilters } from "@/app/lib/filters";
import { useDebounce } from "@/app/hooks/useDebounce";
import type { Filters, Product } from "@/app/types/shop";

type ShopProps = {
  products: Product[];
};

type SearchResult = {
  query: string;
  products: Product[];
  failed: boolean;
};

export default function Shop({ products: allProducts }: ShopProps) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(defaultFilters);
  const [isFiltering, startTransition] = useTransition();

  const search = useDebounce(query, 300).trim();
  const hasSearch = search !== "";

  useEffect(() => {
    if (!hasSearch) {
      return;
    }

    const controller = new AbortController();

    fetch(`/api/products?q=${encodeURIComponent(search)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}`);
        }

        return response.json() as Promise<Product[]>;
      })
      .then((products) => setResult({ query: search, products, failed: false }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setResult({ query: search, products: [], failed: true });
      });

    return () => controller.abort();
  }, [hasSearch, search]);

  function handleFiltersChange(next: Filters) {
    setFilters(next);
    startTransition(() => {
      setAppliedFilters(next);
    });
  }

  const isLoading = hasSearch && result?.query !== search;
  const hasFailed = hasSearch && !isLoading && result?.failed === true;
  const sourceProducts = hasSearch && result ? result.products : allProducts;

  const visibleProducts = useMemo(
    () => applyFilters(sourceProducts, appliedFilters),
    [sourceProducts, appliedFilters],
  );

  const count = visibleProducts.length;
  const isBusy = isLoading || isFiltering;

  return (
    <div className="mt-8 space-y-6">
      <SearchBar value={query} onChange={setQuery} />
      <ProductFilters filters={filters} onChange={handleFiltersChange} />

      <p role="status" className="text-sm text-neutral-600">
        {isLoading
          ? "Recherche en cours..."
          : hasFailed
            ? "La recherche a échoué. Réessayez."
            : `${count} produit${count > 1 ? "s" : ""}`}
      </p>

      <div aria-busy={isBusy} className={isBusy ? "opacity-50" : ""}>
        <ProductGrid products={visibleProducts} />
      </div>
    </div>
  );
}
