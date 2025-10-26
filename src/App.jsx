import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import StatsOverview from './components/StatsOverview.jsx';
import ModuleGrid from './components/ModuleGrid.jsx';
import RecentActivity from './components/RecentActivity.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <HeroSection />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="py-8 sm:py-10">
          <StatsOverview />
        </section>
        <section className="py-6 sm:py-8">
          <RecentActivity />
        </section>
        <section className="py-10">
          <ModuleGrid />
        </section>
      </main>
      <footer className="border-t border-slate-200 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} i-Life Ace It</span>
          <span>AI-Powered Teaching & Learning Platform</span>
        </div>
      </footer>
    </div>
  );
}
