"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
