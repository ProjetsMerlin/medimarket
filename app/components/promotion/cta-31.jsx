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
              D'autres offres vous attendent
            </h2>
            <p className="text-medium">
              Parcourez nos univers pour découvrir des réductions sur la santé,
              la beauté et le bien-être de toute la famille.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Explorer">Explorer</Button>
              <Button title="Promotions" variant="secondary">
                Promotions
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
