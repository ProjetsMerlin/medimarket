"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Product4_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold">Univers</p>
            <h1 className="mt-3 text-h2 font-bold md:mt-4">Produits</h1>
            <p className="mt-5 text-medium md:mt-6">
              Alimentation soins hygiène et puériculture pour chaque étape de
              bébé
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Céréales bio</p>
                <p className="text-small">250g</p>
              </div>
              <p className="text-large font-semibold">3,99€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Petit pot</p>
                <p className="text-small">2x200g</p>
              </div>
              <p className="text-large font-semibold">4,49€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Eau nettoyante</p>
                <p className="text-small">500ml</p>
              </div>
              <p className="text-large font-semibold">6,99€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Shampoing doux</p>
                <p className="text-small">250ml</p>
              </div>
              <p className="text-large font-semibold">5,49€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Mouche bébé</p>
                <p className="text-small">Unité</p>
              </div>
              <p className="text-large font-semibold">9,99€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Thermomètre</p>
                <p className="text-small">Digital</p>
              </div>
              <p className="text-large font-semibold">14,99€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Brosse cheveux</p>
                <p className="text-small">Douce</p>
              </div>
              <p className="text-large font-semibold">4,99€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full rounded-image object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center text-medium">
              <div className="mb-2">
                <p className="font-semibold">Couverture nid</p>
                <p className="text-small">Coton</p>
              </div>
              <p className="text-large font-semibold">29,99€</p>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Ajouter au panier"
              className="mt-3 w-full md:mt-4"
            >
              Ajouter au panier
            </Button>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button variant="secondary" title="Voir tout">
            Voir tout
          </Button>
        </div>
      </div>
    </section>
  );
}
