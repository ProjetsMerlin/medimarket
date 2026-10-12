"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { Fragment, useEffect, useState } from "react";
import { Add } from "relume-icons";

const Star = () => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <StarFull className="text-scheme-text" />
            ) : isHalfStar ? (
              <StarHalf className="text-scheme-text" />
            ) : (
              <Star className="text-scheme-text" />
            )}
          </div>
        );
      })}
    </div>
  );
};

const useCarousel = () => {
  const [mainApi, setMainApi] = useState();
  const [thumbApi, setThumbApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!mainApi || !thumbApi) {
      return;
    }
    mainApi.on("select", () => {
      const index = mainApi.selectedScrollSnap();
      setCurrent(index);
      thumbApi.scrollTo(index);
    });
  }, [mainApi, thumbApi]);
  const handleClick = (index) => () => {
    return mainApi?.scrollTo(index);
  };
  const getThumbStyles = (index) => {
    return clsx("block", current === index && "opacity-60");
  };
  return {
    setMainApi,
    setThumbApi,
    handleClick,
    getThumbStyles,
  };
};

export function ProductHeader3() {
  const useActive = useCarousel();
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1fr_1.25fr] lg:gap-x-20">
          <div>
            <Breadcrumb className="mb-6 flex flex-wrap items-center text-small">
              <BreadcrumbList>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Tous les produits</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Soins</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Crème hydratante</BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h1 className="mb-5 text-h3 font-bold md:mb-6">
                Crème hydratante
              </h1>
              <div className="mb-5 flex flex-col flex-wrap sm:flex-row sm:items-center md:mb-6">
                <h5 className="text-h5 font-bold">24,99</h5>
                <div className="mx-4 hidden w-px self-stretch bg-scheme-border sm:block" />
                <div className="flex flex-wrap items-center gap-3">
                  <Star rating={3.5} />
                  <p className="text-small">(4.5 étoiles) • 12 avis</p>
                </div>
              </div>
              <p className="mb-5 md:mb-6">
                Une crème légère qui nourrit la peau en profondeur. Idéale pour
                un usage quotidien.
              </p>
              <form className="mb-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Parfum</Label>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="px-4 py-2"
                        asChild={true}
                        title="50 ml"
                        url="#"
                      >
                        <a href="#" className="">
                          50 ml
                        </a>
                      </Button>
                      <Button
                        className="px-4 py-2"
                        asChild={true}
                        title="100 ml"
                        url="#"
                        variant="secondary"
                      >
                        <a href="#" className="">
                          100 ml
                        </a>
                      </Button>
                      <Button
                        className="px-4 py-2"
                        asChild={true}
                        title="200 ml"
                        url="#"
                        variant="secondary"
                        disabled={true}
                      >
                        <a href="#" className="pointer-events-none opacity-25">
                          200 ml
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_4rem] gap-x-4">
                    <div className="flex flex-col">
                      <Label className="mb-2">Parfum</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first-choice">
                            Option One
                          </SelectItem>
                          <SelectItem value="second-choice">
                            Option Two
                          </SelectItem>
                          <SelectItem value="third-choice">
                            Option Three
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="quantity" className="mb-2">
                        Qté
                      </Label>
                      <Input
                        type="number"
                        id="quantity"
                        placeholder="1"
                        className="w-16"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 mb-4 flex flex-col gap-y-4">
                  <Button title="Ajouter au panier">Ajouter au panier</Button>
                  <Button title="Acheter maintenant" variant="secondary">
                    Acheter maintenant
                  </Button>
                </div>
                <p className="text-center text-tiny">
                  Livraison gratuite dès 39€
                </p>
              </form>
              <Accordion type="multiple">
                <AccordionItem value="item-0">
                  <AccordionTrigger
                    className="py-4 text-medium font-semibold"
                    icon={
                      <Add className="size-6 shrink-0 text-scheme-text transition-transform duration-300" />
                    }
                  >
                    Détails
                  </AccordionTrigger>
                  <AccordionContent className="md:pb-6">
                    Retour gratuit sous 30 jours. Produit non ouvert et dans son
                    emballage d'origine. Remboursement sous 14 jours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className="py-4 text-medium font-semibold"
                    icon={
                      <Add className="size-6 shrink-0 text-scheme-text transition-transform duration-300" />
                    }
                  >
                    Livraison
                  </AccordionTrigger>
                  <AccordionContent className="md:pb-6">
                    Retour gratuit sous 30 jours. Produit non ouvert et dans son
                    emballage d'origine. Remboursement sous 14 jours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger
                    className="py-4 text-medium font-semibold"
                    icon={
                      <Add className="size-6 shrink-0 text-scheme-text transition-transform duration-300" />
                    }
                  >
                    Retours
                  </AccordionTrigger>
                  <AccordionContent className="md:pb-6">
                    Retour gratuit sous 30 jours. Produit non ouvert et dans son
                    emballage d'origine. Remboursement sous 14 jours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="order-first lg:order-none">
            <div className="order-first flex flex-col gap-y-4 md:order-none">
              <div className="overflow-hidden">
                <Carousel
                  setApi={useActive.setMainApi}
                  opts={{ loop: true, align: "start" }}
                  className="m-0"
                >
                  <CarouselContent className="m-0">
                    <CarouselItem className="basis-full pl-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 1"
                        className="aspect-[5/4] size-full rounded-image object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="basis-full pl-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 2"
                        className="aspect-[5/4] size-full rounded-image object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="basis-full pl-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 3"
                        className="aspect-[5/4] size-full rounded-image object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="basis-full pl-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 4"
                        className="aspect-[5/4] size-full rounded-image object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem className="basis-full pl-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 5"
                        className="aspect-[5/4] size-full rounded-image object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="hidden overflow-y-auto md:block">
                <Carousel
                  setApi={useActive.setThumbApi}
                  opts={{
                    align: "start",
                    containScroll: "keepSnaps",
                    dragFree: true,
                  }}
                  className="m-0"
                >
                  <CarouselContent className="gap-y-4">
                    <CarouselItem className="basis-1/5">
                      <button
                        onClick={useActive.handleClick(0)}
                        className={useActive.getThumbStyles(0)}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 1"
                          className="aspect-[5/4] size-full rounded-image object-cover"
                        />
                      </button>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <button
                        onClick={useActive.handleClick(1)}
                        className={useActive.getThumbStyles(1)}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 2"
                          className="aspect-[5/4] size-full rounded-image object-cover"
                        />
                      </button>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <button
                        onClick={useActive.handleClick(2)}
                        className={useActive.getThumbStyles(2)}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 3"
                          className="aspect-[5/4] size-full rounded-image object-cover"
                        />
                      </button>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <button
                        onClick={useActive.handleClick(3)}
                        className={useActive.getThumbStyles(3)}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 4"
                          className="aspect-[5/4] size-full rounded-image object-cover"
                        />
                      </button>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <button
                        onClick={useActive.handleClick(4)}
                        className={useActive.getThumbStyles(4)}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 5"
                          className="aspect-[5/4] size-full rounded-image object-cover"
                        />
                      </button>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
