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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQ</h2>
          <p className="text-medium">
            Trouvez les réponses aux questions les plus fréquentes sur ce
            produit et nos services
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
                  Ce produit convient-il aux peaux sensibles ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Oui, cette crème hydratante a été testée sous contrôle
                  dermatologique et convient aux peaux sensibles. Sa formule
                  sans paraben respecte l'équilibre naturel de la peau. En cas
                  de doute, consultez votre pharmacien.
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
                  Comment appliquer cette crème ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Appliquez la crème matin et soir sur le visage propre et sec.
                  Massez délicatement jusqu'à absorption complète. Une petite
                  quantité suffit pour couvrir l'ensemble du visage.
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
                  Quels sont les délais de livraison ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  L'expédition se fait sous 24 heures ouvrées. La livraison à
                  domicile ou en point relais prend généralement 2 à 3 jours
                  ouvrés. Un suivi de commande est disponible dès l'expédition.
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
                  Puis-je retourner ce produit ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Oui, le retour est gratuit sous 30 jours. Le produit doit être
                  non ouvert et dans son emballage d'origine. Le remboursement
                  est effectué sous 14 jours après réception du retour.
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
                  La livraison est-elle gratuite ?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  La livraison est gratuite dès 39 euros d'achat. En dessous de
                  ce montant, des frais de livraison s'appliquent. Les frais
                  exacts sont indiqués avant la validation de votre commande.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
