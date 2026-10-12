"use client"

import { Header15 } from "@/components/accueil/header-15";
import { Layout401 } from "@/components/accueil/layout-401";
import { Cta54 } from "@/components/accueil/cta-54";
import { EventHeader5 } from "@/components/accueil/event-header-05";
// import { Event14 } from "@/components/accueil/event-14";
// import { Blog40 } from "@/components/accueil/blog-40";
// import { EventHeader5_1 } from "@/components/accueil/event-header-05_1";
// import { Product1 } from "@/components/accueil/product-01";
import { Product4 } from "@/components/accueil/product-04";
import { Blog18 } from "@/components/accueil/blog-18";
import { Cta32 } from "@/components/accueil/cta-32";
import { Testimonial17 } from "@/components/accueil/testimonial-17";
import { Logo6 } from "@/components/accueil/logo-06";
import { Cta31 } from "@/components/accueil/cta-31";


export default function Page() {
  return (
    <div>
      <Header15 />
      {/* services */}
      <Layout401 />
      {/* newsletter */}
      <Cta54 />
      {/* promo */}
      <EventHeader5 />
      {/* <Event14 /> */}
      <Product4 />
      <Blog18 />
      {/* <Blog40 /> */}
      {/* <EventHeader5_1 /> */}
      {/* <Product1 /> */}
      <Cta32 />
      <Testimonial17 />
      <Logo6 />
      <Cta31 />
    </div>
  );
}
