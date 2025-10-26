import React from 'react';
import { Users, FlaskConical, ClipboardList, Gauge } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent} text-white`}>
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-sm text-slate-600">{label}</p>
      <p className="text-xl font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Class Snapshot</h2>
        <p className="text-sm text-slate-500">Good Afternoon, Amar!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Active Students" value="100" accent="bg-indigo-600" />
        <StatCard icon={FlaskConical} label="Tests Created" value="43" accent="bg-emerald-600" />
        <StatCard icon={ClipboardList} label="Assignments Posted" value="18" accent="bg-amber-600" />
        <StatCard icon={Gauge} label="Average Performance" value="78.5%" accent="bg-sky-600" />
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Top Students</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <span className="text-slate-700">Aarav – Mathematics</span>
              <span className="font-medium text-emerald-600">92%</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-slate-700">Diya – Science</span>
              <span className="font-medium text-emerald-600">89%</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-slate-700">Kabir – English</span>
              <span className="font-medium text-emerald-600">86%</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Subject Performance</h3>
          <div className="mt-3 space-y-3">
            <ProgressRow label="Mathematics" value={82} tone="indigo" />
            <ProgressRow label="Science" value={75} tone="emerald" />
            <ProgressRow label="English" value={71} tone="sky" />
            <ProgressRow label="Social Studies" value={58} tone="rose" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressRow({ label, value, tone }) {
  const tones = {
    indigo: 'bg-indigo-600',
    emerald: 'bg-emerald-600',
    sky: 'bg-sky-600',
    rose: 'bg-rose-600',
  };
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-600">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${tones[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
