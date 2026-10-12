"use client"

import { Header15 } from "@/components/header-15";
import { Layout401 } from "@/components/layout-401";
import { Cta54 } from "@/components/cta-54";
import { EventHeader5 } from "@/components/event-header-05";
// import { Event14 } from "@/components/event-14";
// import { Blog40 } from "@/components/blog-40";
// import { EventHeader5_1 } from "@/components/event-header-05_1";
// import { Product1 } from "@/components/product-01";
import { Product4 } from "@/components/product-04";
import { Blog18 } from "@/components/blog-18";
import { Cta32 } from "@/components/cta-32";
import { Testimonial17 } from "@/components/testimonial-17";
import { Logo6 } from "@/components/logo-06";
import { Cta31 } from "@/components/cta-31";

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
