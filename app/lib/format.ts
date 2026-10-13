const priceFormatter = new Intl.NumberFormat("fr-BE", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(cents: number): string {
  return priceFormatter.format(cents / 100);
}