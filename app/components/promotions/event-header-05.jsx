"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { CalendarToday, PlayCircle, Schedule } from "relume-icons";

export function EventHeader5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Promotions</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">Offres</h1>
            <p className="text-medium">
              Des remises immédiates sur une sélection de produits essentiels
              pour toute la famille, sans compromis sur la qualité.
            </p>
          </div>
        </div>
        <div className="mb-12 grid auto-cols-fr auto-rows-auto grid-cols-1 items-center gap-x-8 gap-y-12 md:mb-18 lg:mb-20 lg:grid-cols-2 lg:gap-12">
          <Dialog>
            <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
              <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
              <Badge
                className="absolute top-4 right-4 z-20"
                variant="alternate"
              >
                Santé
              </Badge>
              <PlayCircle className="absolute z-20 size-20 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
            </DialogContent>
          </Dialog>
          <div className="flex flex-col items-start">
            <div className="mb-3 flex items-center gap-2 text-small md:mb-4">
              <div className="flex items-center gap-2">
                <CalendarToday className="size-6 flex-none text-scheme-text" />
                <span>Jusqu'au 31 mars 2025</span>
              </div>
            </div>
            <a href="#" className="mb-3 md:mb-4">
              <h2 className="text-h5 font-bold">Crazy days</h2>
            </a>
            <p>
              Les plus grandes marques à prix réduits. Les stocks sont limités,
              l'offre est simple.
            </p>
            <Button
              variant="secondary"
              title="J'en profite"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
            >
              J'en profite
            </Button>
          </div>
        </div>
        <Tabs defaultValue="view-all" className="flex flex-col justify-start">
          <div className="flex flex-col justify-start">
            <div>
              <TabsList className="mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
                <TabsTrigger
                  value="view-all"
                  className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
                >
                  Tout voir
                </TabsTrigger>
                <TabsTrigger
                  value="category-one"
                  className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
                >
                  Bébé
                </TabsTrigger>
                <TabsTrigger
                  value="category-two"
                  className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
                >
                  Vitalité
                </TabsTrigger>
                <TabsTrigger
                  value="category-three"
                  className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
                >
                  Beauté
                </TabsTrigger>
                <TabsTrigger
                  value="category-four"
                  className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
                >
                  Hygiène
                </TabsTrigger>
              </TabsList>
            </div>
            <div>
              <TabsContent
                value="view-all"
                className="data-[state=active]:animate-tabs"
              >
                <div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>7 jours</span>
                          </div>
                          <Badge>Bientôt</Badge>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Semaine beauté</h2>
                        </a>
                        <p className="line-clamp-3">
                          Des soins visage et corps des grandes marques à prix
                          doux. Une semaine pour refaire sa trousse.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>5 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Offre bébé</h2>
                        </a>
                        <p className="line-clamp-3">
                          Couches, laits et soins pour les tout-petits à tarifs
                          réduits. Tout ce qu'il faut, sans se ruiner.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-y border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>3 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Vitalité flash</h2>
                        </a>
                        <p className="line-clamp-3">
                          Compléments alimentaires et vitamines en promotion
                          courte. Pour garder le cap avant l'été.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="category-one"
                className="data-[state=active]:animate-tabs"
              >
                <div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>7 jours</span>
                          </div>
                          <Badge>Bientôt</Badge>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Semaine beauté</h2>
                        </a>
                        <p className="line-clamp-3">
                          Des soins visage et corps des grandes marques à prix
                          doux. Une semaine pour refaire sa trousse.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>5 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Offre bébé</h2>
                        </a>
                        <p className="line-clamp-3">
                          Couches, laits et soins pour les tout-petits à tarifs
                          réduits. Tout ce qu'il faut, sans se ruiner.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-y border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>3 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Vitalité flash</h2>
                        </a>
                        <p className="line-clamp-3">
                          Compléments alimentaires et vitamines en promotion
                          courte. Pour garder le cap avant l'été.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="category-two"
                className="data-[state=active]:animate-tabs"
              >
                <div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>7 jours</span>
                          </div>
                          <Badge>Bientôt</Badge>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Semaine beauté</h2>
                        </a>
                        <p className="line-clamp-3">
                          Des soins visage et corps des grandes marques à prix
                          doux. Une semaine pour refaire sa trousse.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>5 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Offre bébé</h2>
                        </a>
                        <p className="line-clamp-3">
                          Couches, laits et soins pour les tout-petits à tarifs
                          réduits. Tout ce qu'il faut, sans se ruiner.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-y border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>3 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Vitalité flash</h2>
                        </a>
                        <p className="line-clamp-3">
                          Compléments alimentaires et vitamines en promotion
                          courte. Pour garder le cap avant l'été.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="category-three"
                className="data-[state=active]:animate-tabs"
              >
                <div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>7 jours</span>
                          </div>
                          <Badge>Bientôt</Badge>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Semaine beauté</h2>
                        </a>
                        <p className="line-clamp-3">
                          Des soins visage et corps des grandes marques à prix
                          doux. Une semaine pour refaire sa trousse.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>5 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Offre bébé</h2>
                        </a>
                        <p className="line-clamp-3">
                          Couches, laits et soins pour les tout-petits à tarifs
                          réduits. Tout ce qu'il faut, sans se ruiner.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-y border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>3 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Vitalité flash</h2>
                        </a>
                        <p className="line-clamp-3">
                          Compléments alimentaires et vitamines en promotion
                          courte. Pour garder le cap avant l'été.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="category-four"
                className="data-[state=active]:animate-tabs"
              >
                <div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>7 jours</span>
                          </div>
                          <Badge>Bientôt</Badge>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Semaine beauté</h2>
                        </a>
                        <p className="line-clamp-3">
                          Des soins visage et corps des grandes marques à prix
                          doux. Une semaine pour refaire sa trousse.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>5 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Offre bébé</h2>
                        </a>
                        <p className="line-clamp-3">
                          Couches, laits et soins pour les tout-petits à tarifs
                          réduits. Tout ce qu'il faut, sans se ruiner.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-y border-scheme-border py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
                    <div className="flex w-full flex-col items-start justify-start">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-small">
                            <Schedule className="size-6 flex-none text-scheme-text" />
                            <span>3 jours</span>
                          </div>
                        </div>
                        <a href="#" className="mb-4 block">
                          <h2 className="text-h5 font-bold">Vitalité flash</h2>
                        </a>
                        <p className="line-clamp-3">
                          Compléments alimentaires et vitamines en promotion
                          courte. Pour garder le cap avant l'été.
                        </p>
                      </div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                      <PlayCircle className="size-14 flex-none" />
                    </a>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
