"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ChevronRight } from "relume-icons";

export function Blog40() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Nos derniers articles
            </h2>
            <p className="text-medium">
              Des conseils d'experts pour votre santé et votre bien-être.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="/blog/article-de-blog" className="w-full">
              <img
                src="/images/peau-2.webp"
                alt="Relume placeholder image"
                className="aspect-3/2 size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Beauté</Badge>
                <p className="inline text-small font-semibold">4 min</p>
              </div>
              <a className="mb-2 block" href="/blog/article-de-blog">
                <h2 className="text-h5 font-bold">
                  Crème solaire en hiver, une nécessité trop souvent oubliée
                </h2>
              </a>
              <p>
                Les UV restent actifs même par temps froid, protégez votre peau
                toute l'année.
              </p>
              <Button
                title="Lire plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lire plus
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="/blog/article-de-blog" className="w-full">
              <img
                src="images/gallery-01.jpg"
                alt="Relume placeholder image"
                className="aspect-3/2 size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Nutrition</Badge>
                <p className="inline text-small font-semibold">5 min</p>
              </div>
              <a className="mb-2 block" href="/blog/article-de-blog">
                <h2 className="text-h5 font-bold">
                  Probiotiques, comment choisir la bonne formule
                </h2>
              </a>
              <p>
                Un point complet pour comprendre leur rôle et trouver le
                complément adapté.
              </p>
              <Button
                title="Lire plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lire plus
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="/blog/article-de-blog" className="w-full">
              <img
                src="/images/dents.webp"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Hygiène</Badge>
                <p className="inline text-small font-semibold">3 min</p>
              </div>
              <a className="mb-2 block" href="/blog/article-de-blog">
                <h2 className="text-h5 font-bold">
                  Dentifrice blancheur, ce que disent vraiment les experts
                </h2>
              </a>
              <p>
                Les ingrédients à privilégier pour un sourire éclatant sans
                abîmer l'émail.
              </p>
              <Button
                title="Lire plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lire plus
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-12 md:mt-18 lg:mt-20">
            Tout voir
          </Button>
        </div>
      </div>
    </section>
  );
}
