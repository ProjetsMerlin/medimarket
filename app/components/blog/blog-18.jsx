"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Conseils santé et bien-être
            </h1>
            <p className="text-medium">
              Des articles clairs pour prendre soin de vous chaque jour
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="view-all"
          className="grid grid-cols-1 gap-x-12 gap-y-8 text-left md:grid-cols-[0.25fr_1fr] md:gap-x-12 md:gap-y-12 lg:grid-cols-[15rem_1fr] lg:gap-x-16"
        >
          <TabsList className="flex w-full flex-col">
            <div className="mb-6 text-h6 font-bold">Catégories du blog</div>
            <TabsTrigger
              value="view-all"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Tout voir
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Santé
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Beauté
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Nutrition
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Famille
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Santé</Badge>
              <p className="inline text-small font-semibold">5 min</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              Les vitamines essentielles pour affronter l'hiver sereinement
            </a>
            <p>
              Un guide simple pour renforcer vos défenses naturelles quand le
              froid arrive
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Lire plus
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Beauté</Badge>
                  <p className="inline text-small font-semibold">4 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Peau sèche en hiver les gestes qui changent tout
                </a>
                <p>
                  Des routines douces et efficaces pour garder une peau
                  confortable et hydratée
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Nutrition</Badge>
                  <p className="inline text-small font-semibold">6 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Bien manger sans se compliquer la vie au quotidien
                </a>
                <p>
                  Des repères concrets pour une alimentation équilibrée sans
                  frustration ni contrainte
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Famille</Badge>
                  <p className="inline text-small font-semibold">5 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Les indispensables pour préparer l'arrivée de bébé
                </a>
                <p>
                  Une liste pratique et rassurante pour accueillir votre enfant
                  avec sérénité
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Santé</Badge>
                  <p className="inline text-small font-semibold">7 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Sommeil réparateur les clés pour des nuits paisibles
                </a>
                <p>
                  Des conseils simples pour retrouver un rythme de sommeil
                  naturel et profond
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Santé</Badge>
              <p className="inline text-small font-semibold">5 min</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              Les vitamines essentielles pour affronter l'hiver sereinement
            </a>
            <p>
              Un guide simple pour renforcer vos défenses naturelles quand le
              froid arrive
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Lire plus
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Beauté</Badge>
                  <p className="inline text-small font-semibold">4 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Peau sèche en hiver les gestes qui changent tout
                </a>
                <p>
                  Des routines douces et efficaces pour garder une peau
                  confortable et hydratée
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Nutrition</Badge>
                  <p className="inline text-small font-semibold">6 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Bien manger sans se compliquer la vie au quotidien
                </a>
                <p>
                  Des repères concrets pour une alimentation équilibrée sans
                  frustration ni contrainte
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Famille</Badge>
                  <p className="inline text-small font-semibold">5 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Les indispensables pour préparer l'arrivée de bébé
                </a>
                <p>
                  Une liste pratique et rassurante pour accueillir votre enfant
                  avec sérénité
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Santé</Badge>
                  <p className="inline text-small font-semibold">7 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Sommeil réparateur les clés pour des nuits paisibles
                </a>
                <p>
                  Des conseils simples pour retrouver un rythme de sommeil
                  naturel et profond
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Santé</Badge>
              <p className="inline text-small font-semibold">5 min</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              Les vitamines essentielles pour affronter l'hiver sereinement
            </a>
            <p>
              Un guide simple pour renforcer vos défenses naturelles quand le
              froid arrive
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Lire plus
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Beauté</Badge>
                  <p className="inline text-small font-semibold">4 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Peau sèche en hiver les gestes qui changent tout
                </a>
                <p>
                  Des routines douces et efficaces pour garder une peau
                  confortable et hydratée
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Nutrition</Badge>
                  <p className="inline text-small font-semibold">6 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Bien manger sans se compliquer la vie au quotidien
                </a>
                <p>
                  Des repères concrets pour une alimentation équilibrée sans
                  frustration ni contrainte
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Famille</Badge>
                  <p className="inline text-small font-semibold">5 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Les indispensables pour préparer l'arrivée de bébé
                </a>
                <p>
                  Une liste pratique et rassurante pour accueillir votre enfant
                  avec sérénité
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Santé</Badge>
                  <p className="inline text-small font-semibold">7 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Sommeil réparateur les clés pour des nuits paisibles
                </a>
                <p>
                  Des conseils simples pour retrouver un rythme de sommeil
                  naturel et profond
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Santé</Badge>
              <p className="inline text-small font-semibold">5 min</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              Les vitamines essentielles pour affronter l'hiver sereinement
            </a>
            <p>
              Un guide simple pour renforcer vos défenses naturelles quand le
              froid arrive
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Lire plus
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Beauté</Badge>
                  <p className="inline text-small font-semibold">4 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Peau sèche en hiver les gestes qui changent tout
                </a>
                <p>
                  Des routines douces et efficaces pour garder une peau
                  confortable et hydratée
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Nutrition</Badge>
                  <p className="inline text-small font-semibold">6 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Bien manger sans se compliquer la vie au quotidien
                </a>
                <p>
                  Des repères concrets pour une alimentation équilibrée sans
                  frustration ni contrainte
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Famille</Badge>
                  <p className="inline text-small font-semibold">5 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Les indispensables pour préparer l'arrivée de bébé
                </a>
                <p>
                  Une liste pratique et rassurante pour accueillir votre enfant
                  avec sérénité
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Santé</Badge>
                  <p className="inline text-small font-semibold">7 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Sommeil réparateur les clés pour des nuits paisibles
                </a>
                <p>
                  Des conseils simples pour retrouver un rythme de sommeil
                  naturel et profond
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Santé</Badge>
              <p className="inline text-small font-semibold">5 min</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              Les vitamines essentielles pour affronter l'hiver sereinement
            </a>
            <p>
              Un guide simple pour renforcer vos défenses naturelles quand le
              froid arrive
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Lire plus
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Beauté</Badge>
                  <p className="inline text-small font-semibold">4 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Peau sèche en hiver les gestes qui changent tout
                </a>
                <p>
                  Des routines douces et efficaces pour garder une peau
                  confortable et hydratée
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Nutrition</Badge>
                  <p className="inline text-small font-semibold">6 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Bien manger sans se compliquer la vie au quotidien
                </a>
                <p>
                  Des repères concrets pour une alimentation équilibrée sans
                  frustration ni contrainte
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Famille</Badge>
                  <p className="inline text-small font-semibold">5 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Les indispensables pour préparer l'arrivée de bébé
                </a>
                <p>
                  Une liste pratique et rassurante pour accueillir votre enfant
                  avec sérénité
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Santé</Badge>
                  <p className="inline text-small font-semibold">7 min</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Sommeil réparateur les clés pour des nuits paisibles
                </a>
                <p>
                  Des conseils simples pour retrouver un rythme de sommeil
                  naturel et profond
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Lire plus <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
