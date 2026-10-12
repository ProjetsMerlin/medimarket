"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout503() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Focus</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Vitalité & équilibre, l'énergie au quotidien
            </h1>
            <p className="text-medium">
              Compléments alimentaires, vitamines et solutions naturelles pour
              soutenir votre organisme. Une sélection rigoureuse pour retrouver
              tonus et sérénité tout au long de l'année.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Explorer" variant="secondary">
                Explorer
              </Button>
              <Button
                title="Conseils"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Conseils
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="relative mb-12 scrollbar-none flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Produits phares
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Marques disponibles
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Conseils associés
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Focus</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  Des compléments essentiels pour chaque besoin
                </h2>
                <p>
                  Magnésium, vitamines D et C, probiotiques, les références les
                  plus demandées sont là. Chaque produit est vérifié pour sa
                  qualité et son efficacité.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Explorer" variant="secondary">
                    Explorer
                  </Button>
                  <Button
                    title="Conseils"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Conseils
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Focus</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  Des compléments essentiels pour chaque besoin
                </h2>
                <p>
                  Magnésium, vitamines D et C, probiotiques, les références les
                  plus demandées sont là. Chaque produit est vérifié pour sa
                  qualité et son efficacité.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Explorer" variant="secondary">
                    Explorer
                  </Button>
                  <Button
                    title="Conseils"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Conseils
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Focus</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">
                  Des compléments essentiels pour chaque besoin
                </h2>
                <p>
                  Magnésium, vitamines D et C, probiotiques, les références les
                  plus demandées sont là. Chaque produit est vérifié pour sa
                  qualité et son efficacité.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Explorer" variant="secondary">
                    Explorer
                  </Button>
                  <Button
                    title="Conseils"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Conseils
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
