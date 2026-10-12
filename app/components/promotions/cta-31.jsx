"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Ne manquez aucune offre
            </h2>
            <p className="text-medium">
              Inscrivez-vous à la newsletter et recevez les promotions avant
              tout le monde, directement dans votre boîte mail.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="S'inscrire">S'inscrire</Button>
              <Button title="Voir tout" variant="secondary">
                Voir tout
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
