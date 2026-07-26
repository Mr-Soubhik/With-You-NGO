import React, { useState } from 'react';
import { Heart, Users, Clock, ArrowRight, ShieldAlert, Sparkles, Eye } from 'lucide-react';

export default function CausesSection({ onOpenDonateWithCause, onSelectCauseDetails, selectedCurrency }) {
  const [filter, setFilter] = useState('all');

  const causes = [
    {
      id: "edu-01",
      category: "education",
      categoryName: "Education",
      title: "Build Solar Classrooms for 400 Children",
      location: "Rural Valley Region",
      image: "/education.jpg",
      raisedUSD: 34500,
      goalUSD: 45000,
      donors: 384,
      daysLeft: 12,
      urgent: true,
      desc: "Constructing 4 solar-powered tech classrooms equipped with laptops, textbooks, and clean drinking water facilities.",
      impactNote: "$30 provides textbooks & supplies for 1 child for an entire academic year."
    },
    {
      id: "env-02",
      category: "environment",
      categoryName: "Environment",
      title: "Plant 10,000 Fruit Trees for Eco Recovery",
      location: "Highland Agro Belt",
      image: "/environment.jpg",
      raisedUSD: 18200,
      goalUSD: 25000,
      donors: 215,
      daysLeft: 18,
      urgent: false,
      desc: "Reforesting degraded soil with native fruit trees that prevent soil erosion while providing sustainable harvest income for families.",
      impactNote: "$15 plants 5 fruit trees with long-term irrigation support."
    },
    {
      id: "health-03",
      category: "healthcare",
      categoryName: "Health & Water",
      title: "Clean Water Wells for 5 Remote Villages",
      location: "Dryland Basin",
      image: "/healthcare.jpg",
      raisedUSD: 41000,
      goalUSD: 50000,
      donors: 512,
      daysLeft: 8,
      urgent: true,
      desc: "Drilling deep boreholes and installing solar pumps to deliver safe, clean drinking water to over 3,200 village residents.",
      impactNote: "$50 supplies a family with lifetime access to safe clean water filters."
    }
  ];

  const filteredCauses = filter === 'all' ? causes : causes.filter(c => c.category === filter);

  // Format currency
  const formatMoney = (usdAmount) => {
    const val = usdAmount * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${Math.round(val).toLocaleString()}`;
  };

  return (
    <section id="causes" className="py-24 bg-slate-50 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="flex-1">
            <div className="badge badge-accent w-max mb-4">Featured Fundraisers</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900">
              Active <span className="text-emerald-600">Urgent Campaigns</span>
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              Choose a specific cause to support today. 100% of your gift directly funds project construction and field supplies.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${filter === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              All Causes ({causes.length})
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${filter === 'education' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Education
            </button>
            <button
              onClick={() => setFilter('environment')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${filter === 'environment' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Environment
            </button>
            <button
              onClick={() => setFilter('healthcare')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${filter === 'healthcare' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Healthcare & Water
            </button>
          </div>
        </div>

        {/* Cause Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCauses.map((cause) => {
            const percent = Math.min(100, Math.round((cause.raisedUSD / cause.goalUSD) * 100));

            return (
              <div 
                key={cause.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-500/50 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={cause.image} 
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-extrabold text-slate-800 uppercase tracking-wider shadow-sm">
                      {cause.categoryName}
                    </span>
                    {cause.urgent && (
                      <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-extrabold flex items-center gap-1 shadow-md animate-pulse">
                        <ShieldAlert className="w-3.5 h-3.5" /> Urgent Need
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-emerald-400" /> {cause.donors} Backers
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {cause.daysLeft} Days Left
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {cause.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cause.desc}
                    </p>
                  </div>

                  {/* Impact Highlight box */}
                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-900 font-medium flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{cause.impactNote}</span>
                  </div>

                  {/* Progress Bar & Amounts */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="flex justify-between items-baseline text-sm">
                      <span className="font-extrabold font-heading text-emerald-700 text-lg">
                        {formatMoney(cause.raisedUSD)}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Goal: {formatMoney(cause.goalUSD)} ({percent}%)
                      </span>
                    </div>

                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => onSelectCauseDetails(cause)}
                      className="btn btn-secondary text-xs py-2.5 px-3 border border-slate-300 font-semibold"
                    >
                      <Eye className="w-3.5 h-3.5" /> Details
                    </button>

                    <button
                      onClick={() => onOpenDonateWithCause(cause)}
                      className="btn btn-primary text-xs py-2.5 px-3 font-bold"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" /> Support Cause
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
