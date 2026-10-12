"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Event14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Calendrier</p>
            <h1 className="mb-3 text-h2 font-bold md:mb-4">Événements</h1>
            <p className="text-medium">
              Toutes les promotions actives avec leurs dates et leurs remises.
            </p>
          </div>
          <Button
            variant="secondary"
            title="Tout voir"
            className="hidden md:flex"
          >
            Tout voir
          </Button>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center rounded-card bg-scheme-foreground px-1 py-3 text-small text-scheme-text">
                <span>Lun</span>
                <h4 className="text-h4 font-bold">24</h4>
                <span>Mars 2025</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <Badge className="mb-3 md:mb-4">Santé</Badge>
              <a href="#">
                <h2 className="text-h5 font-bold">Crazy days</h2>
              </a>
              <p className="mb-2">En ligne</p>
              <p>
                Des réductions massives sur une large sélection de produits de
                parapharmacie pendant une durée limitée.
              </p>
              <Button
                title="Voir l'offre"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                Voir l'offre
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
                className="absolute size-full object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center rounded-card bg-scheme-foreground px-1 py-3 text-small text-scheme-text">
                <span>Mar</span>
                <h4 className="text-h4 font-bold">25</h4>
                <span>Mars 2025</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <Badge className="mb-3 md:mb-4">Beauté</Badge>
              <a href="#">
                <h2 className="text-h5 font-bold">Semaine beauté</h2>
              </a>
              <p className="mb-2">En ligne</p>
              <p>
                Les soins essentiels des marques préférées à prix réduits pour
                une durée de sept jours.
              </p>
              <Button
                title="Voir l'offre"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 md:mt-6"
              >
                Voir l'offre
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-12 flex justify-end md:hidden">
          <Button variant="secondary" title="Tout voir">
            Tout voir
          </Button>
        </div>
      </div>
    </section>
  );
}
