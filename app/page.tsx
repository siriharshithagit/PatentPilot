"use client";

import { useRef } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoleculeForm from "@/components/MoleculeForm";
import Footer from "@/components/Footer";

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Hero onSearchClick={scrollToForm} />

      <div ref={formRef}>
        <MoleculeForm />
      </div>

      <Footer />
    </>
  );
}