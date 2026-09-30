import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechLogos } from "@/components/TechLogos";
import { PortfolioSection } from "@/components/PortfolioSection";
import { BlueprintsSection } from "@/components/BlueprintsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { ProjectCalculator } from "@/components/ProjectCalculator";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans selection:bg-zinc-950 selection:text-white relative">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Interactive 3D Three.js Card */}
        <Hero />

        {/* Core Technologies & Integration Partners */}
        <TechLogos />

        {/* Case Studies & Proven Portfolio */}
        <PortfolioSection />

        {/* Ready-to-Deploy Open Source Software Blueprints */}
        <BlueprintsSection />

        {/* 3 Customer Segments (SMEs, Diaspora, Outsourcing) */}
        <PillarsSection />

        {/* Tech Stack & Architecture Deep Dive */}
        <ArchitectureSection />

        {/* Interactive Scope & Cost Calculator (Dual Currency NGN/USD) */}
        <ProjectCalculator />

        {/* Productized Pricing Sprints & Pod Retainers */}
        <PricingSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Architecture Session & Contact */}
        <ContactSection />
      </main>

      {/* Floating High-Converting WhatsApp CTA */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
