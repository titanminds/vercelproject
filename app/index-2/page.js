"use client";

import { useEffect } from "react";

import Layout from "@/components/layout/Layout";
import "@/public/assets/css/color2.css";

import Banner from "@/components/sections/home2/Banner";
import Profit from "@/components/sections/home2/Profit";
import Pricing from "@/components/sections/home2/Pricing";
import Funding from "@/components/sections/home2/Funding";
import Working from "@/components/sections/home2/Working";
import Offer from "@/components/sections/home2/Offer";
import Platform from "@/components/sections/home2/Platform";
import Chooseus from "@/components/sections/home2/Chooseus";
import Faq from "@/components/sections/home2/Faq";
import Awards from "@/components/sections/home2/Awards";
import Cta from "@/components/sections/home2/Cta";

export default function Home_2() {
  useEffect(() => {
    const fetchFAQs = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL; // for Next.js, use this instead of import.meta.env
      try {
        const res = await fetch(`${apiUrl}/api/faqs`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const faqs = await res.json();
        console.log("📚 FAQs:", faqs);
      } catch (err) {
        console.error("❌ FAQs fetch error:", err.message);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={2} footerStyle={2}>
        <Banner />
        <Profit />
        <Pricing />
        <Funding />
        <Working />
        <Offer />
        <Platform />
        <Chooseus />
        <Faq />
        <Awards />
        <Cta />
      </Layout>
    </div>
  );
}
