import React from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Users, Clock, Sparkles } from 'lucide-react';

export default function CauseDetailsModal({ cause, onClose, onOpenDonateWithCause, selectedCurrency }) {
  if (!cause) return null;

  const formatMoney = (usdVal) => {
    const val = usdVal * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${Math.round(val).toLocaleString()}`;
  };

  const percent = Math.min(100, Math.round((cause.raisedUSD / cause.goalUSD) * 100));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-2xl p-0 overflow-hidden rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Image */}
        <div className="relative h-64 overflow-hidden">
          <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              {cause.categoryName}
            </span>
            <h3 className="text-2xl font-bold font-heading">{cause.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Funding Status Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex justify-between items-baseline text-sm">
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Total Raised</span>
                <span className="text-2xl font-extrabold text-emerald-600 font-heading">
                  {formatMoney(cause.raisedUSD)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-semibold block">Campaign Goal</span>
                <span className="text-lg font-bold text-slate-800 font-heading">
                  {formatMoney(cause.goalUSD)} ({percent}%)
                </span>
              </div>
            </div>

            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-emerald-600" /> {cause.donors} Active Backers</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-600" /> {cause.daysLeft} Days Remaining</span>
            </div>
          </div>

          {/* Detailed Story */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-slate-900 font-heading">Campaign Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {cause.desc} This initiative is directly managed by WithYou NGO field teams on the ground in {cause.location}, working in direct partnership with local community leaders.
            </p>
          </div>

          {/* Budget Allocation Breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-slate-900 font-heading">Financial Allocation Plan</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 bg-slate-100 rounded-xl">
                <span className="font-medium text-slate-700">Equipments, Hardware & Solar Infrastructure</span>
                <span className="font-bold text-slate-900">65%</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-100 rounded-xl">
                <span className="font-medium text-slate-700">Local Field Technicians & Educator Stipends</span>
                <span className="font-bold text-slate-900">25%</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-100 rounded-xl">
                <span className="font-medium text-slate-700">Logistics, Transport & Independent Quality Audit</span>
                <span className="font-bold text-slate-900">10%</span>
              </div>
            </div>
          </div>

          {/* Impact Guarantee */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">WithYou NGO Transparency Guarantee</p>
              <p className="mt-0.5">Every donor receives photo and video field updates showing progress milestones and final project completion.</p>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button 
            onClick={onClose}
            className="btn btn-secondary text-xs py-3 px-5 font-semibold"
          >
            Close Details
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenDonateWithCause(cause);
            }}
            className="btn btn-primary text-xs py-3 px-6 font-bold flex-1"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Donate to This Cause</span>
          </button>
        </div>

      </div>
    </div>
  );
}
