"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog40() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Nos derniers articles
            </h2>
            <p className="text-medium">
              Des conseils simples pour votre santé au quotidien
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Santé</Badge>
                <p className="inline text-small font-semibold">5 min</p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="text-h5 font-bold">
                  Les vitamines essentielles pour affronter l'hiver sereinement
                </h2>
              </a>
              <p>
                Un guide simple pour renforcer vos défenses naturelles quand le
                froid arrive
              </p>
              <Button
                title="Lire plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lire plus
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Beauté</Badge>
                <p className="inline text-small font-semibold">4 min</p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="text-h5 font-bold">
                  Peau sèche en hiver les gestes qui changent tout
                </h2>
              </a>
              <p>
                Des routines douces et efficaces pour garder une peau
                confortable et hydratée
              </p>
              <Button
                title="Lire plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lire plus
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Nutrition</Badge>
                <p className="inline text-small font-semibold">6 min</p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="text-h5 font-bold">
                  Bien manger sans se compliquer la vie au quotidien
                </h2>
              </a>
              <p>
                Des repères concrets pour une alimentation équilibrée sans
                frustration ni contrainte
              </p>
              <Button
                title="Lire plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lire plus
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-12 md:mt-18 lg:mt-20">
            Voir tout
          </Button>
        </div>
      </div>
    </section>
  );
}
