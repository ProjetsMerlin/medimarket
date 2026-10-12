"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQ</h2>
          <p className="text-medium">
            Les réponses aux questions les plus fréquentes sur les sujets santé
            abordés dans notre blog.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Comment choisir les bonnes vitamines ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Consultez votre médecin ou votre pharmacien pour identifier
                  vos besoins. Nos articles vous donnent des repères généraux
                  mais ne remplacent pas un avis médical personnalisé.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Les conseils sont-ils personnalisés ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nos articles proposent des recommandations générales basées
                  sur des sources fiables. Pour un conseil adapté à votre
                  situation, parlez-en à un professionnel de santé.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  À quelle fréquence publiez-vous ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nous publions de nouveaux articles chaque semaine.
                  Inscrivez-vous à la newsletter pour ne rien manquer de nos
                  conseils santé et bien-être.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Puis-je partager vos articles ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Oui, vous pouvez partager nos articles librement. Nous vous
                  demandons simplement de mentionner Medi-Market comme source et
                  de conserver les liens d'origine.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Où trouver les produits cités ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Les produits mentionnés dans nos articles sont disponibles sur
                  notre site. Utilisez la recherche ou parcourez nos catégories
                  pour les retrouver facilement.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
