import React from 'react';
import { Droplet, BookOpen, Utensils, Trees, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function StatsBar({ selectedCurrency }) {
  const stats = [
    {
      icon: BookOpen,
      value: "45+",
      label: "Schools Built & Equipped",
      desc: "Providing quality education & books for over 18,000 children.",
      color: "from-sky-500 to-blue-600",
      lightBg: "bg-sky-50 text-sky-700"
    },
    {
      icon: Droplet,
      value: "320+",
      label: "Clean Water Wells",
      desc: "Delivering fresh, drinkable water to remote rural villages.",
      color: "from-teal-500 to-emerald-600",
      lightBg: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: Utensils,
      value: "850K+",
      label: "Nutritious Meals Served",
      desc: "Emergency food security programs for families in crisis.",
      color: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50 text-amber-700"
    },
    {
      icon: Trees,
      value: "35,000+",
      label: "Trees Planted",
      desc: "Restoring local ecosystems and creating community gardens.",
      color: "from-emerald-600 to-green-700",
      lightBg: "bg-emerald-50 text-emerald-800"
    }
  ];

  return (
    <section id="impact" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Measurable Real-World Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
              Every Contribution Drives <span className="text-emerald-400">Direct Change</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-slate-700/60 text-xs text-slate-300">
            <HeartHandshake className="w-5 h-5 text-emerald-400" />
            <span>Audited quarterly by international independent partners</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/60 border border-slate-700/70 hover:border-emerald-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/10 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700/80 text-slate-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
                    Verified
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold font-heading text-white mb-1 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-slate-200 mb-2">{stat.label}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Financial Transparency Mini Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/80 border border-slate-700/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="font-bold font-heading text-sm text-slate-200">Where Does Your Donation Go?</h4>
            <p className="text-xs text-slate-400">92 cents out of every dollar goes directly into field initiatives.</p>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-2">
            <div className="h-4 w-full bg-slate-700 rounded-full overflow-hidden flex">
              <div className="h-full bg-emerald-500 w-[92%]" title="92% Programs & Direct Relief"></div>
              <div className="h-full bg-sky-500 w-[5%]" title="5% Administrative & Staff Operations"></div>
              <div className="h-full bg-amber-500 w-[3%]" title="3% Fundraising & Awareness"></div>
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> 92% Field Programs</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> 5% Administration</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> 3% Awareness</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
