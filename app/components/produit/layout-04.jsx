"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Détails</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Tout savoir sur ce produit
            </h1>
            <p className="mb-6 text-medium md:mb-8">
              Une formule douce qui respecte l'équilibre de la peau. Elle laisse
              un fini non gras et un confort immédiat.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Caractéristiques
                </h6>
                <p>
                  Texture légère, absorption rapide, sans paraben, convient aux
                  peaux sensibles.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Conseils d'utilisation
                </h6>
                <p>
                  Appliquer matin et soir sur le visage propre et sec, en
                  massant délicatement.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Lire" variant="secondary">
                Lire
              </Button>
              <Button
                title="Plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Plus
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
