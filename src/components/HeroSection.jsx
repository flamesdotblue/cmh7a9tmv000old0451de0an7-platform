import React from 'react';
import { Rocket, Play, Upload, Link as LinkIcon, Mic } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-16 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-indigo-600" />
              <span>AI-Powered Teaching & Learning</span>
            </div>
            <h1 className="mt-4 font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl text-slate-900">
              i-Life Ace It — Ace Every Lesson with AI
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-xl">
              Plan smarter, teach interactively, analyze performance, and gamify learning — all in one intuitive dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-white shadow-sm hover:bg-indigo-700 transition">
                <Play className="h-4 w-4" />
                Playground
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-white shadow-sm hover:bg-slate-800 transition">
                <Rocket className="h-4 w-4" />
                Pro Toolkit
              </button>
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-700 shadow-sm">
                <Upload className="h-4 w-4" />
                <span className="hidden sm:inline">Upload</span>
                <span className="sr-only">Upload Document</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-700 shadow-sm">
                <LinkIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Paste</span>
                <span className="sr-only">Paste Content</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-700 shadow-sm">
                <Mic className="h-4 w-4" />
                <span className="hidden sm:inline">Record</span>
                <span className="sr-only">Record</span>
              </div>
            </div>
          </div>
          <div className="relative h-[380px] sm:h-[420px] md:h-[520px] rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Spline scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/10 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </header>
  );
}
