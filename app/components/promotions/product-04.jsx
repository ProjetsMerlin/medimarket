"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Product4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold">Sélection</p>
            <h1 className="mt-3 text-h2 font-bold md:mt-4">Produits</h1>
            <p className="mt-5 text-medium md:mt-6">
              Les meilleures ventes en promotion, prêtes à être ajoutées au
              panier.
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
                <p className="font-semibold">La Roche-Posay</p>
                <p className="text-small">50 ml</p>
              </div>
              <p className="text-large font-semibold">18,99 €</p>
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
                <p className="font-semibold">Nuxe</p>
                <p className="text-small">200 ml</p>
              </div>
              <p className="text-large font-semibold">14,50 €</p>
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
                <p className="font-semibold">Bioderma</p>
                <p className="text-small">500 ml</p>
              </div>
              <p className="text-large font-semibold">9,99 €</p>
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
                <p className="font-semibold">Uriage</p>
                <p className="text-small">40 ml</p>
              </div>
              <p className="text-large font-semibold">12,75 €</p>
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
                <p className="font-semibold">Avène</p>
                <p className="text-small">100 ml</p>
              </div>
              <p className="text-large font-semibold">11,20 €</p>
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
                <p className="font-semibold">Caudalie</p>
                <p className="text-small">30 ml</p>
              </div>
              <p className="text-large font-semibold">22,90 €</p>
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
                <p className="font-semibold">Vichy</p>
                <p className="text-small">400 ml</p>
              </div>
              <p className="text-large font-semibold">13,45 €</p>
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
                <p className="font-semibold">Mustela</p>
                <p className="text-small">300 ml</p>
              </div>
              <p className="text-large font-semibold">8,99 €</p>
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
          <Button variant="secondary" title="Tout voir">
            Tout voir
          </Button>
        </div>
      </div>
    </section>
  );
}
