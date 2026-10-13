"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export function Cta32() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Restez informé de nos offres
            </h2>
            <p className="text-medium">
              Recevez en avant-première nos promotions, conseils santé et
              actualités de la parapharmacie.
            </p>
            <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
              <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input
                  id="email"
                  type="email"
                  placeholder="Votre adresse email"
                />
                <Button
                  title="S'inscrire"
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                >
                  S'inscrire
                </Button>
              </form>
              <p className="text-tiny">
                En cliquant sur S'inscrire, vous acceptez nos conditions
                générales.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="images/mondial.jpg"
            className="size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
