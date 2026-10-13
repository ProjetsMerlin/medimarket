"use client"

// import { Event14 } from "@/app/components/event-14";
// import { Blog40 } from "@/app/components/blog-40";
// import { EventHeader5_1 } from "@/app/components/event-header-05_1";
// import { Product1 } from "@/app/components/product-01";
import { Header15 } from "@/app/components/header-15";
import { Layout401 } from "@/app/components/layout-401";
import { Cta54 } from "@/app/components/cta-54";
import { EventHeader5 } from "@/app/components/event-header-05";
import { Product4 } from "@/app/components/product-04";
import { Blog18 } from "@/app/components/blog-18";
import { Cta32 } from "@/app/components/cta-32";
import { Testimonial17 } from "@/app/components/testimonial-17";
import { Logo6 } from "@/app/components/logo-06";
import { Cta31 } from "@/app/components/cta-31";

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
