"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "relume-icons";

export function Layout401() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Avantages</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Pourquoi nous choisir
            </h1>
            <p className="text-medium">
              Des services pensés pour votre santé et votre bien-être.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/orders.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">Livraison rapide et soignée partout en Belgique</h3>
            <p>Recevez vos produits essentiels en un temps record.</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="En savoir plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                En savoir plus
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
              Prix
            </h3>
            <p>Un avantage (*) calculé par rapport au prix national recommandé par les fournisseurs</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="En savoir plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                En savoir plus
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/local_pharmacy.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              Assistance webshop
            </h3>
            <p>
              Disponible du lundi au vendredide 9h00 à 12h30 et de 13h30 à 17h00
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="En savoir plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                En savoir plus
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6">
            <div className="mb-3 md:mb-4">
              <img
                className="size-12 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/gite.svg"
              />
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              Un programme de fidélité généreux et simple
            </h3>
            <p>Cumulez des points et profitez d'avantages exclusifs.</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="En savoir plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                En savoir plus
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
