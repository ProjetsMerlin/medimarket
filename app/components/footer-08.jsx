"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer8() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <a href="#" className="mb-8">
            <Image
                        src="/logo/logo.svg"
                        alt="Logo image"
                        width={150}
                        height={32}
                      />
            </a>
            <p>
              <strong>Medicare-Market Online Services SPRL</strong>
              <br></br>
              Avenue Cicéron 7, 1140 Evere, Belgique
              <br></br>TVA : BE 0836.224.231 - ©Medi-Market
            </p>
            {/* grid */}
            <ul className="hidden grid-flow-row grid-cols-1 items-start justify-center justify-items-start gap-y-4 md:grid-flow-col md:grid-cols-[max-content] md:justify-start md:justify-items-start md:gap-x-6">
              <li className="font-semibold">
                <a href="#">Nos services</a>
              </li>
              <li className="font-semibold">
                <a href="#">Nos magasins</a>
              </li>
              <li className="font-semibold">
                <a href="#">Programme fidélité</a>
              </li>
              <li className="font-semibold">
                <a href="#">Blog santé</a>
              </li>
              <li className="font-semibold">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <p className="mb-3 font-semibold md:mb-4">S'abonner</p>
            <div>
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Votre adresse email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="S'abonner" variant="secondary" size="sm">
                  S'abonner
                </Button>
              </form>
              <p className="text-tiny">
                En vous abonnant, vous acceptez notre politique de
                confidentialité.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col items-start justify-start pt-6 pb-4 md:flex-row md:items-center md:justify-between md:pt-8 md:pb-0 md:text-center">
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center">
            <li className="underline">
              <a href="#">Confidentialité</a>
            </li>
            <li className="underline">
              <a href="#">Conditions générales</a>
            </li>
            <li className="underline">
              <a href="#">Paramètres cookies</a>
            </li>
          </ul>
          <p>© 2026 Medi-Market. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
