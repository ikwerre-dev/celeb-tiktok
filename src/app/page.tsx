'use client';

import CreatorImages from "@/components/CreatorImages";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import VideoExamples from "@/components/VideoExamples";

 
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <CreatorImages />
        <VideoExamples />
        <StatsSection />

      </main>

   
    </div>
  );
}