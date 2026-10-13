import { categories, type Category, type Product } from "@/app/types/shop";

const adjectives = [
  "Classique",
  "Moderne",
  "Compact",
  "Premium",
  "Léger",
  "Robuste",
  "Élégant",
  "Pratique",
];

const itemNames: Record<Category, string[]> = {
  maison: ["Lampe", "Coussin", "Tapis", "Vase", "Miroir"],
  sport: ["Haltère", "Gourde", "Tapis de yoga", "Corde à sauter", "Sac"],
  tech: ["Casque", "Chargeur", "Clavier", "Enceinte", "Souris"],
  mode: ["Écharpe", "Bonnet", "Ceinture", "Sac à dos", "Casquette"],
  jardin: ["Arrosoir", "Sécateur", "Pot", "Gants", "Râteau"],
};

function generateProducts(count: number): Product[] {
  return Array.from({ length: count }, (_, index) => {
    const category = categories[index % categories.length];
    const names = itemNames[category];
    const baseName = names[Math.floor(index / categories.length) % names.length];
    const adjective = adjectives[index % adjectives.length];

    return {
      id: String(index + 1),
      name: `${baseName} ${adjective} n°${index + 1}`,
      description: `${baseName} de catégorie ${category}, référence ${index + 1}.`,
      price: 500 + ((index * 37) % 9500),
      category,
      stock: (index * 13) % 25,
    };
  });
}

const products: Product[] = generateProducts(2000);

export function isCategory(value: string): value is Category {
  return (categories as readonly string[]).includes(value);
}

type ProductFilters = {
  category?: Category;
  query?: string;
};

export async function getProducts(
  filters: ProductFilters = {},
): Promise<Product[]> {
  const query = filters.query?.trim().toLowerCase();

  return products.filter(
    (product) =>
      (!filters.category || product.category === filters.category) &&
      (!query || product.name.toLowerCase().includes(query)),
  );
}
export async function getProductById(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) ?? null;
}