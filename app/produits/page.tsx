import CartButton from "@/app/components/cart/CartButton";
import Shop from "@/app/components/shop/Shop";
import { getProducts } from "@/app/lib/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Boutique</h1>
        <CartButton />
      </header>

      <Shop products={products} />
    </main>
  );
}