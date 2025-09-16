"use client";
import React from "react";
import virtualLabImg from "../../virtual lab.webp";
import GradientMenu from "@/components/ui/gradient-menu";
import { SparklesCore } from "@/components/ui/sparkles";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/neon-button";
import { Code2, FlaskConical, Briefcase } from "lucide-react";

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Particle Background */}
      <div className="fixed inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={140}
          className="w-full h-full"
          particleColor="#6EE7F9"
          speed={0.7}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header with Gradient Navigation */}
      <header className="sticky top-0 z-20 border-b border-white/10 backdrop-blur bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-semibold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            EduVerse
          </div>
          <nav className="hidden md:block">
            <GradientMenu />
          </nav>
        </div>
        <div className="md:hidden px-4 pb-3">
          <GradientMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6">
            Supercharge your journey with AI‑first developer tools
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Translate code instantly, experiment in a virtual lab, and get tailored career guidance—all in one elegant, fast, and modern interface.
          </p>
        </div>
      </section>

      {/* Spotlight Cards Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Code Translator Card */}
          <GlowCard glowColor="purple" className="flex flex-col">
            <div className="flex-1 flex flex-col gap-3">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <Code2 size={48} className="text-purple-400 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code2 size={18} className="text-purple-400" /> 
                Code Translator
              </h3>
              <p className="text-sm text-neutral-300 flex-1">
                Translate code between languages with AI-powered precision. Support for 50+ programming languages with context-aware translations.
              </p>
            </div>
            <div className="pt-2">
              <a href="https://code-translator-bay.vercel.app/">
                <Button className="w-full" variant="default">Try Translator</Button>
              </a>
            </div>
          </GlowCard>

          {/* Virtual Lab Card */}
          <GlowCard glowColor="blue" className="flex flex-col">
            <div className="flex-1 flex flex-col gap-3">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center overflow-hidden relative">
                <img
                  src={virtualLabImg}
                  alt="Virtual Lab experiment"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 rounded-xl"
                  loading="lazy"
                />
                <FlaskConical size={48} className="text-blue-400 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FlaskConical size={18} className="text-blue-400" /> 
                Virtual Lab
              </h3>
              <p className="text-sm text-neutral-300 flex-1">
                Run experiments in a sandboxed environment with instant feedback. Test algorithms, debug code, and prototype solutions safely.
              </p>
            </div>
            <div className="pt-2">
              <a href="https://virtual-lab-navy.vercel.app/">
                <Button className="w-full" variant="solid">Launch Lab</Button>
              </a>
            </div>
          </GlowCard>

          {/* Career Guidance Card */}
          <GlowCard glowColor="green" className="flex flex-col">
            <div className="flex-1 flex flex-col gap-3">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-green-900/50 to-teal-900/50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <Briefcase size={48} className="text-green-400 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase size={18} className="text-green-400" /> 
                Career Guidance
              </h3>
              <p className="text-sm text-neutral-300 flex-1">
                Personalized career paths, portfolio optimization tips, and comprehensive interview preparation resources for tech professionals.
              </p>
            </div>
            <div className="pt-2">
              <a href="https://carrier-guidaince.vercel.app/">
                <Button className="w-full" variant="ghost">Explore Paths</Button>
              </a>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-400">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} EduVerse .</p>
          <p className="mt-2 text-xs">Devloped by Team 001</p>
        </div>
      </footer>
    </main>
  );
}
