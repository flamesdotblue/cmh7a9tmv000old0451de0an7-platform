import React from 'react';
import { Home, BarChart3, BookOpen, Gamepad2, MonitorPlay, ClipboardList, Coins, Layers, MessageSquare, Sparkles } from 'lucide-react';

const modules = [
  { icon: Home, title: 'Home', desc: 'Overview & quick actions', color: 'bg-indigo-50 text-indigo-700', href: '#' },
  { icon: BarChart3, title: 'Analytics', desc: 'Insights & performance', color: 'bg-emerald-50 text-emerald-700', href: '#' },
  { icon: BookOpen, title: 'Courses', desc: 'Manage learning content', color: 'bg-sky-50 text-sky-700', href: '#' },
  { icon: Gamepad2, title: 'Game Library', desc: 'Create & access quizzes', color: 'bg-amber-50 text-amber-700', href: '#' },
  { icon: MonitorPlay, title: 'Hosted Games', desc: 'Manage live sessions', color: 'bg-fuchsia-50 text-fuchsia-700', href: '#' },
  { icon: ClipboardList, title: 'Assignments', desc: 'Create & track tasks', color: 'bg-rose-50 text-rose-700', href: '#' },
  { icon: Coins, title: 'EdCoins', desc: 'Reward participation', color: 'bg-lime-50 text-lime-700', href: '#' },
  { icon: Layers, title: 'Flashcards', desc: 'AI-generated cards', color: 'bg-violet-50 text-violet-700', href: '#' },
  { icon: MessageSquare, title: 'Groups & Chat', desc: 'Collaborate in real-time', color: 'bg-cyan-50 text-cyan-700', href: '#' },
  { icon: Sparkles, title: 'Playground / Pro', desc: 'Advanced AI tools', color: 'bg-slate-100 text-slate-800', href: '#' },
];

export default function ModuleGrid() {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Explore Modules</h2>
        <a className="text-sm text-indigo-600 hover:text-indigo-700" href="#">See all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {modules.map((m) => (
          <a key={m.title} href={m.href} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${m.color} group-hover:scale-105 transition` }>
              <m.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">{m.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
