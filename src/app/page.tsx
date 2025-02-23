'use client';

import BrandsSection from "@/components/BrandsSection";
import CreatorImages from "@/components/CreatorImages";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import VideoExamples from "@/components/VideoExamples";
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';

import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <CreatorImages />
        <VideoExamples />
        <StatsSection />
        <BrandsSection />
        <AboutSection />
        <ReviewsSection />
        <ServicesSection />
        <ContactSection />
      </main>


    </div>
  );
}