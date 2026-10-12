"use client"

import React from "react";
import { ProductHeader3 } from "@/components/produit/product-header-03";
import { Layout4 } from "@/components/produit/layout-04";
import { Testimonial40 } from "@/components/produit/testimonial-40";
import { Product4 } from "@/components/produit/product-04";
import { Faq6 } from "@/components/produit/faq-06";
import { Cta31 } from "@/components/produit/cta-31";


export default function Page() {
  return (
    <div>
      <ProductHeader3 />
      <Layout4 />
      <Testimonial40 />
      <Product4 />
      <Faq6 />
      <Cta31 />
    </div>
  );
}
