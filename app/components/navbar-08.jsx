"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/app/components/ui/button";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import { AnimatePresence, motion } from "motion/react";
import { KeyboardArrowDown, RelumeIcon } from "relume-icons";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar8() {
  const useActive = useRelume();
  return (
    <section className="relative z-[999] flex min-h-16 w-full items-center bg-scheme-background px-[5%] md:min-h-18 scheme-1">
      <div className="mx-auto flex size-full container items-center justify-between">
        <a href="/">
          <Image
            src="/logo/logo.svg"
            alt="Logo image"
            width={150}
            height={32}
          />
        </a>
        <div className="absolute hidden h-screen overflow-auto border-b border-scheme-border bg-scheme-background px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              href="/#promos"
              className="relative block w-auto py-3 text-base lg:inline-block lg:px-4 lg:py-6"
            >
              Promotions
            </a>
            {/* univers */}
            <a
              href="/produits"
              className="relative block w-auto py-3 text-base lg:inline-block lg:px-4 lg:py-6"
            >
              Produits
            </a>
            <a
              href="/blog"
              className="relative block w-auto py-3 text-base lg:inline-block lg:px-4 lg:py-6"
            >
              Blog
            </a>
            <a
              href="/#services"
              className="relative block w-auto py-3 text-base lg:inline-block lg:px-4 lg:py-6"
            >
              Services
            </a>
             <a
              href="/#contact"
              className="relative block w-auto py-3 text-base lg:inline-block lg:px-4 lg:py-6"
            >
              Contact
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <p
                role="button"
                // flex
                className="hidden relative w-full items-center justify-between py-3 text-base whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                Produits
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDown className="text-scheme-text" />
                </motion.span>
              </p>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-scheme-background lg:absolute lg:w-screen lg:border-b lg:border-scheme-border lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="auto-cols-1 grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-4 sm:py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8">
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                            Bébé & Maman
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/shop.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Soins bébé</p>
                              <p className="hidden text-small md:block">
                                Couches, laits et accessoires pour le confort de
                                bébé
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/nutrition.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Alimentation bébé</p>
                              <p className="hidden text-small md:block">
                                Petits pots, céréales et boissons pour bien
                                grandir
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/gite.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Toilette maman</p>
                              <p className="hidden text-small md:block">
                                Soins grossesse et allaitement pour futures
                                mamans
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/agriculture.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Puériculture</p>
                              <p className="hidden text-small md:block">
                                Biberons, tétines et matériel de puériculture
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                            Vitalité & équilibre
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/compost.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Compléments</p>
                              <p className="hidden text-small md:block">
                                Vitamines, minéraux et compléments alimentaires
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/mms.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Minceur</p>
                              <p className="hidden text-small md:block">
                                Programmes minceur et substituts de repas
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/nature.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Sommeil</p>
                              <p className="hidden text-small md:block">
                                Solutions naturelles pour retrouver un sommeil
                                réparateur
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/spa.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Stress</p>
                              <p className="hidden text-small md:block">
                                Aide à la détente et à la gestion du stress
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                            Beauté
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/massage.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Visage</p>
                              <p className="hidden text-small md:block">
                                Crèmes, sérums et nettoyants pour le visage
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/spa.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Corps</p>
                              <p className="hidden text-small md:block">
                                Laits, huiles et gommages pour le corps
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/colors.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Cheveux</p>
                              <p className="hidden text-small md:block">
                                Shampoings, soins et colorations capillaires
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                className="size-6 shrink-0 text-scheme-text"
                                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/soap.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <p className="font-semibold">Hygiène</p>
                              <p className="hidden text-small md:block">
                                Déodorants, savons et gels douche
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="relative mb-6 flex flex-1 p-6 md:py-8 md:pl-8 lg:mb-0 lg:max-w-[14rem]">
                        <div className="auto-cols-1 relative z-10 grid w-full auto-rows-max grid-cols-1 grid-rows-[max-content] gap-4">
                          <div className="flex max-w-[32rem] flex-col items-start">
                            <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                              Aide
                            </h4>
                          </div>
                          <a href="#" className="text-small">
                            FAQ
                          </a>
                          <a href="#" className="text-small">
                            Livraison
                          </a>
                          <a href="#" className="text-small">
                            Retours
                          </a>
                          <a href="#" className="text-small">
                            Contact
                          </a>
                          <a href="#" className="text-small">
                            Suivi
                          </a>
                        </div>
                        <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-scheme-foreground lg:min-w-[100vw]" />
                      </div>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button className="hidden" title="Menu" variant="secondary" size="sm">
              Menu
            </Button>
            <Button title="Panier" size="sm">
              Panier
            </Button>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-scheme-text"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-scheme-text"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-scheme-text"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute top-full right-0 left-0 w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 left-0 block h-dvh overflow-auto border-b border-scheme-border bg-scheme-background px-[5%] pt-4 pb-8"
          >
            <div className="flex flex-col">
              <a href="#" className="block py-3 text-medium">
                Link One
              </a>
              <a href="#" className="block py-3 text-medium">
                Link Two
              </a>
              <a href="#" className="block py-3 text-medium">
                Link Three
              </a>
              <div>
                <p
                  role="button"
                  className="relative flex w-full items-center justify-between py-3 text-base whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  Link Four
                  <motion.span
                    animate={useActive.animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <KeyboardArrowDown className="text-scheme-text" />
                  </motion.span>
                </p>
                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        height: "var(--height-open, auto)",
                        display: "block",
                      },
                      close: {
                        opacity: 0,
                        height: "var(--height-close, 0)",
                        display: "none",
                      },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-scheme-background lg:absolute lg:w-screen lg:border-b lg:border-scheme-border lg:px-[5%] lg:[--height-close:auto]"
                  >
                    <div className="mx-auto flex size-full max-w-full items-center justify-between">
                      <div className="flex w-full flex-col lg:flex-row">
                        <div className="auto-cols-1 grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-4 sm:py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8">
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                              Page group one
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page One</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Two</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Three</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Four</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                              Page group two
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Five</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Six</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Seven</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Eight</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                              Page group three
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Nine</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Ten</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Eleven</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <RelumeIcon className="size-6 shrink-0 text-scheme-text" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="font-semibold">Page Twelve</p>
                                <p className="hidden text-small md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="relative mb-6 flex flex-1 p-6 md:py-8 md:pl-8 lg:mb-0 lg:max-w-[14rem]">
                          <div className="auto-cols-1 relative z-10 grid w-full auto-rows-max grid-cols-1 grid-rows-[max-content] gap-4">
                            <div className="flex max-w-[32rem] flex-col items-start">
                              <h4 className="text-small leading-[1.4] font-semibold md:leading-[1.3]">
                                Page group four
                              </h4>
                            </div>
                            <a href="#" className="text-small">
                              Link one
                            </a>
                            <a href="#" className="text-small">
                              Link two
                            </a>
                            <a href="#" className="text-small">
                              Link three
                            </a>
                            <a href="#" className="text-small">
                              Link four
                            </a>
                            <a href="#" className="text-small">
                              Link five
                            </a>
                          </div>
                          <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-scheme-foreground lg:min-w-[100vw]" />
                        </div>
                      </div>
                    </div>
                  </motion.nav>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Button title="Button" variant="secondary" size="sm">
                  Button
                </Button>
                <Button title="Button" size="sm">
                  Button
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
