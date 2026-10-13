"use client";

import { Button } from "@/app/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout198() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Nourrisson</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Des soins doux pour le nourrisson
            </h2>
            <p className="mb-6 text-medium md:mb-8">
              Des produits hypoallergéniques et sûrs pour la peau fragile de
              bébé. Une sélection rigoureuse pour le confort quotidien des
              tout-petits.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
              <div>
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-8 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/syringe.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Hygiène</h6>
                <p>
                  Lingettes, gels lavants et sérums physiologiques pour une
                  toilette douce et respectueuse de la peau de bébé.
                </p>
              </div>
              <div>
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-8 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/contacts_product.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Confort</h6>
                <p>
                  Couches, crèmes de change et accessoires pour un bien-être
                  optimal à chaque moment de la journée.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Découvrir" variant="secondary">
                Découvrir
              </Button>
              <Button
                title="En savoir plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
