"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Approche</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Une vision complète de votre santé et bien-être
            </h1>
            <p className="text-medium">
              Chez Medi-Market, chaque univers est pensé pour répondre à un
              besoin précis, du soin quotidien aux solutions plus spécialisées.
              Ensemble, ils forment une approche cohérente pour prendre soin de
              vous et de votre famille.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Découvrir" variant="secondary">
                <a href="/blog/article-de-blog/">
                  Découvrir
                </a>
              </Button>
              <Button
                title="En savoir plus"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                <a href="/blog/article-de-blog/">
                  En savoir plus
                </a>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/produit-01.webp"
              className="mx-auto h-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
