"use client"

import React from "react";
import { Header15 } from "@/components/univers/header-15";
import { Layout1 } from "@/components/univers/layout-01";
import { Product4 } from "@/components/univers/product-04";
import { Layout492 } from "@/components/univers/layout-492";
import { Layout503 } from "@/components/univers/layout-503";
import { Layout491 } from "@/components/univers/layout-491";
import { Gallery24 } from "@/components/univers/gallery-24";
import { Cta31 } from "@/components/univers/cta-31";
import { Cta32 } from "@/components/univers/cta-32";


export default function Page() {
  return (
    <div>
      <Header15 />
      <Layout1 />
      <Product4 />
      <Layout492 />
      <Layout503 />
      <Layout491 />
      <Gallery24 />
      <Cta31 />
      <Cta32 />
    </div>
  );
}
