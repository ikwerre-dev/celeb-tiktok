'use client';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Profile from '@/components/Profile';
import PortfolioGrid from '@/components/PortfolioGrid';
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 max-w-4xl">
        <Profile />
        <PortfolioGrid />
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 right-8 bg-white shadow-lg rounded-full px-4 py-2 text-sm"
      >
        Made in Framer
      </motion.div>
    </div>
  );
}