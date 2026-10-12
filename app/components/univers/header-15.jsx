"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header15() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-h1 font-bold">
              Tout un univers pour votre bien-être
            </h1>
          </div>
          <div>
            <p className="text-medium">
              Des soins essentiels aux produits spécialisés, trouvez tout ce
              qu'il faut pour prendre soin de vous et de votre famille. Une
              sélection large et rigoureuse, pensée pour chaque besoin du
              quotidien.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Découvrir">Découvrir</Button>
              <Button title="Promotions" variant="secondary">
                Promotions
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
