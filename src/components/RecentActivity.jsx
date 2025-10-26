import React from 'react';
import { FlaskConical, BookOpenText, Microscope } from 'lucide-react';

const activities = [
  {
    icon: FlaskConical,
    title: 'Mathematics Unit Test – Chapter 1',
    status: 'Completed',
    tone: 'emerald',
  },
  {
    icon: Microscope,
    title: 'Science Quiz – Light & Reflection',
    status: 'Pending',
    tone: 'amber',
  },
  {
    icon: BookOpenText,
    title: 'English Comprehension Test',
    status: 'Scheduled',
    tone: 'sky',
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Recent Assessment Activity</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">View details</a>
      </div>
      <ul className="mt-4 divide-y divide-slate-100">
        {activities.map((a, idx) => (
          <li key={idx} className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-lg flex items-center justify-center bg-${a.tone}-50 text-${a.tone}-700`}>
                <a.icon className="h-5 w-5" />
              </div>
              <span className="text-sm text-slate-800">{a.title}</span>
            </div>
            <StatusPill status={a.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusPill({ status }) {
  const map = {
    Completed: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
    Pending: { bg: 'bg-amber-50', text: 'text-amber-700' },
    Scheduled: { bg: 'bg-sky-50', text: 'text-sky-700' },
  };
  const styles = map[status] || { bg: 'bg-slate-100', text: 'text-slate-700' };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles.bg} ${styles.text}`}>
      {status}
    </span>
  );
}
