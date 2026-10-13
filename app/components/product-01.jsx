"use client";

import { Button } from "@/app/components/ui/button";

export function Product1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Univers</p>
            <h2 className="mb-3 text-h2 font-bold md:mb-4">Produits</h2>
            <p className="text-medium">
              Une sélection par univers pour trouver l'essentiel rapidement.
            </p>
          </div>
          <div className="hidden md:block">
            <Button title="Tout voir" variant="secondary">
              Tout voir
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-43.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Couches bébé</p>
              <p className="text-small">Taille 4</p>
            </div>
            <p className="text-large font-semibold">12,99 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-13.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Lait hydratant</p>
              <p className="text-small">200 ml</p>
            </div>
            <p className="text-large font-semibold">9,50 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-38.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Vitamine D</p>
              <p className="text-small">30 gélules</p>
            </div>
            <p className="text-large font-semibold">11,25 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-35.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Eau micellaire</p>
              <p className="text-small">400 ml</p>
            </div>
            <p className="text-large font-semibold">7,99 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-28.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Savon surgras</p>
              <p className="text-small">100 g</p>
            </div>
            <p className="text-large font-semibold">3,75 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-9.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Oméga 3</p>
              <p className="text-small">60 capsules</p>
            </div>
            <p className="text-large font-semibold">16,50 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-17.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Brosse à dents souple</p>
              <p className="text-small">1 pièce</p>
            </div>
            <p className="text-large font-semibold">2,99 €</p>
          </a>
          <a href="#">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-7.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[10/12] size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-medium font-semibold">Crème change</p>
              <p className="text-small">100 ml</p>
            </div>
            <p className="text-large font-semibold">6,25 €</p>
          </a>
        </div>
      </div>
    </section>
  );
}
