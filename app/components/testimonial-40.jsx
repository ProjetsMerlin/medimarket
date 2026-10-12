"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { StarFull } from "relume-icons";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial40() {
  const useCarousel = useCarousel();
  return (
    <section className="overflow-hidden py-16 md:py-24 lg:py-28 scheme-3">
      <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-0">
        <div className="flex lg:justify-self-end">
          <div className="mx-[5%] w-full max-w-md lg:mr-20 lg:mb-24 lg:ml-[5vw]">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Avis clients</h2>
            <p className="text-medium">
              Ce que nos clients pensent de ce produit
            </p>
          </div>
        </div>
        <Carousel
          setApi={useCarousel.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden px-[5%] lg:px-0"
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "Une crème légère qui pénètre vite. Ma peau est douce toute la
                  journée."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Marie Lambert</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "Parfaite pour ma peau sensible. Aucune rougeur après deux
                  semaines d'utilisation."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Sophie Martin</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "Le fini non gras est réel. Je l'utilise sous mon maquillage
                  sans problème."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Julie Dubois</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "Bonne hydratation pour le prix. Le format 100 ml dure
                  longtemps."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Emma Bernard</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "L'odeur est discrète et agréable. Je recommande pour un usage
                  quotidien."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Claire Petit</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "Texture agréable et absorption rapide. Ma peau ne tiraille
                  plus le matin."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Nathalie Roux</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-[60%] md:pr-8">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 flex gap-1 md:mb-6">
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                  <StarFull className="size-6 text-scheme-text" />
                </div>
                <h5 className="text-medium">
                  "Un produit simple et efficace. Je l'ai racheté trois fois
                  déjà."
                </h5>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Testimonial avatar 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Isabelle Moreau</p>
                    <p>Cliente vérifiée</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-2 md:gap-4">
              <CarouselPrevious className="static top-0 left-0 size-12 -translate-y-0" />
              <CarouselNext className="static top-0 left-0 size-12 -translate-y-0" />
            </div>
            <div className="absolute right-[5%] mt-5 flex items-center justify-end md:right-8 lg:right-16">
              <button
                onClick={useCarousel.handleDotClick(0)}
                className={useCarousel.dotClassName(0)}
              />
              <button
                onClick={useCarousel.handleDotClick(1)}
                className={useCarousel.dotClassName(1)}
              />
              <button
                onClick={useCarousel.handleDotClick(2)}
                className={useCarousel.dotClassName(2)}
              />
              <button
                onClick={useCarousel.handleDotClick(3)}
                className={useCarousel.dotClassName(3)}
              />
              <button
                onClick={useCarousel.handleDotClick(4)}
                className={useCarousel.dotClassName(4)}
              />
              <button
                onClick={useCarousel.handleDotClick(5)}
                className={useCarousel.dotClassName(5)}
              />
              <button
                onClick={useCarousel.handleDotClick(6)}
                className={useCarousel.dotClassName(6)}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
