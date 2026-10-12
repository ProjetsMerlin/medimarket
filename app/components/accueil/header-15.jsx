"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header15() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-h1 font-bold">
              Crazy Days, des prix fous toute la semaine !
            </h1>
          </div>
          <div>
            <p className="text-medium">
              Profitez de réductions exceptionnelles sur une sélection de
              produits santé et beauté. Stock limité.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button >
                <a title="J'en profite" href="#deal">
                J'en profite
                </a>
                </Button>
              <Button  variant="secondary">
                <a title="Découvrir" href="#promos">Découvrir</a>
              </Button>
            </div>
          </div>
        </div>
        <div id="deal">
          <a target="_blank" href="https://medi-market.be/fr/crazy-days/c/46043">
          <Image
            loading="eager"
            src="/homepage/promo.webp"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
            width={1200}
            height={600}
          />
          </a>
        </div>
      </div>
    </section>
  );
}
