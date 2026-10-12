"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout401() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Avantages</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Acheter en toute confiance
            </h1>
            <p className="text-medium">
              Des services pensés pour votre tranquillité et votre santé
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/store.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              Livraison rapide à domicile ou en point relais
            </h3>
            <p>Recevez vos produits en 48h partout en Belgique</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Détails"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Détails
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/prescriptions.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              Conseils personnalisés de nos pharmaciens diplômés
            </h3>
            <p>Une équipe disponible pour répondre à toutes vos questions</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Contact
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/point_of_sale.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              Programme de fidélité avec points et réductions
            </h3>
            <p>Cumulez des points à chaque achat et économisez</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Adhérer"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Adhérer
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/verified.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              Garantie de qualité sur tous les produits
            </h3>
            <p>Des marques certifiées et des contrôles rigoureux</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Qualité"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Qualité
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
