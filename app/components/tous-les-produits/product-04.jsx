"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Product4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold">Catalogue</p>
            <h1 className="mt-3 text-h2 font-bold md:mt-4">Produits</h1>
            <p className="mt-5 text-medium md:mt-6">
              Tous les soins essentiels pour votre bien-être quotidien
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
                <p className="font-semibold">Crème hydratante</p>
                <p className="text-small">50ml</p>
              </div>
              <p className="text-large font-semibold">24,99€</p>
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
                <p className="font-semibold">Sérum vitamine C</p>
                <p className="text-small">30ml</p>
              </div>
              <p className="text-large font-semibold">32,50€</p>
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
                <p className="font-semibold">Complément magnésium</p>
                <p className="text-small">60 gélules</p>
              </div>
              <p className="text-large font-semibold">18,90€</p>
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
                <p className="font-semibold">Shampooing doux</p>
                <p className="text-small">250ml</p>
              </div>
              <p className="text-large font-semibold">12,75€</p>
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
                <p className="font-semibold">Gel douche bio</p>
                <p className="text-small">500ml</p>
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
                <p className="font-semibold">Dentifrice blancheur</p>
                <p className="text-small">75ml</p>
              </div>
              <p className="text-large font-semibold">6,50€</p>
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
                <p className="font-semibold">Crème solaire SPF50</p>
                <p className="text-small">200ml</p>
              </div>
              <p className="text-large font-semibold">21,40€</p>
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
                <p className="font-semibold">Baume à lèvres</p>
                <p className="text-small">4g</p>
              </div>
              <p className="text-large font-semibold">4,95€</p>
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
