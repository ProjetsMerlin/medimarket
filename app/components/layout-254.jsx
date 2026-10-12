"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout254() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Avantages</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Pourquoi choisir notre univers
            </h2>
            <p className="text-medium">
              Des produits rigoureusement testés et des conseils personnalisés
              pour la santé de votre famille. Un accompagnement complet pensé
              pour les parents.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/vaccines.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Produits testés
              </h3>
              <p>
                Chaque référence est sélectionnée et validée par nos pharmaciens
                pour garantir sécurité et efficacité.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/spa.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Conseils personnalisés
              </h3>
              <p>
                Une équipe dédiée répond à vos questions et vous oriente vers
                les soins les plus adaptés.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/warehouse.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Livraison rapide
              </h3>
              <p>
                Recevez vos essentiels en quelques jours partout en Belgique
                avec un suivi simple et fiable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/join.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Programme de fidélité
              </h3>
              <p>
                Cumulez des points à chaque achat et profitez d'avantages
                exclusifs toute l'année.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Découvrir</Button>
          <Button
            iconRight={<ChevronRight className="text-scheme-text" />}
            variant="link"
            size="link"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
