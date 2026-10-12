"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Cta54() {
  return (
    <section className="scheme-2">
      <BackgroundCard className="relative">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">
              Rejoignez le club Medi-Market
            </h2>
            <p className="text-medium text-white">
              Inscrivez-vous gratuitement et débloquez des remises membres, des
              offres spéciales et des surprises toute l'année.
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input
                id="email"
                type="email"
                placeholder="Votre adresse email"
                variant="secondary"
              />
              <Button
                title="S'inscrire"
                variant="alternate"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                S'inscrire
              </Button>
            </form>
            <p className="text-tiny text-white">
              En cliquant sur S'inscrire, vous confirmez accepter nos conditions
              générales.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="images/fond.png"
            className="size-full object-cover"
            alt="Relume placeholder background image"
          />
          <div className="absolute inset-0 bg-neutral-darkest/50" />
        </div>
      </BackgroundCard>
    </section>
  );
}
