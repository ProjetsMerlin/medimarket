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
            Les réponses aux questions les plus fréquentes sur ce sujet
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
                  Cet article est-il fiable ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Oui. Chaque article est rédigé avec des sources vérifiées et
                  relu par des professionnels de santé. Nous mettons à jour les
                  informations régulièrement. La sécurité de nos lecteurs reste
                  notre priorité.
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
                  Puis-je partager cet article ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Bien sûr. Vous pouvez partager le lien sur vos réseaux sociaux
                  ou par email. Les boutons de partage se trouvent en bas de
                  l'article. Nous vous remercions de citer Medi-Market comme
                  source.
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
                  Où trouver les produits mentionnés ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Les produits cités sont disponibles sur notre site dans les
                  catégories correspondantes. Utilisez la barre de recherche
                  pour les retrouver rapidement. Vous pouvez aussi consulter nos
                  promotions en cours.
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
                  Comment contacter un expert ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Notre équipe de pharmaciens répond à vos questions via le
                  formulaire de contact. Vous pouvez aussi vous rendre en
                  magasin Medi-Market. Nous sommes là pour vous conseiller.
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
                  Les conseils remplacent-ils une consultation ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Non. Les articles sont informatifs et ne remplacent jamais
                  l'avis d'un médecin ou d'un pharmacien. En cas de doute,
                  consultez un professionnel de santé. Votre bien-être mérite
                  une attention personnalisée.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
