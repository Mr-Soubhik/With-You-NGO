import React, { useState } from 'react';
import { Heart, ArrowRight, Play, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenDonate, onOpenVolunteer }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-900/5 via-slate-50 to-white">
      {/* Background ambient light effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200/60 text-emerald-800 text-xs md:text-sm font-semibold animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Transforming Lives Across 18+ Countries</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="font-normal text-emerald-700">100% Direct Impact</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.15] tracking-tight">
              Empowering <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">Communities</span>, Restoring Hope for Tomorrow.
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              We stand together with underserved families, providing clean water, quality education, emergency medical aid, and sustainable eco-solutions. Every dollar you contribute directly changes lives.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenDonate}
                className="btn btn-primary text-base py-3.5 px-7 text-white font-bold group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
              >
                <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={onOpenVolunteer}
                className="btn btn-secondary text-base py-3.5 px-6 font-semibold hover:border-emerald-500 hover:text-emerald-700"
              >
                <Users className="w-5 h-5 text-emerald-600" />
                <span>Join as Volunteer</span>
              </button>

              <button 
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 px-4 py-3 text-slate-700 font-semibold hover:text-emerald-700 text-sm transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-emerald-700 ml-0.5" />
                </div>
                <span>Watch Short Film (2 min)</span>
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>92% Directly Funded</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Tax Deductible Receipt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Transparent Audit Reports</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/hero.jpg" 
                alt="WithYou NGO Community Volunteers and Smiling Children" 
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card text-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm font-heading">Global Non-Profit Award</h4>
                    <p className="text-xs text-slate-600">Voted Best NGO Transparency 2025</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-emerald-600">125K+</span>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">Lives Changed</p>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float hidden sm:flex">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center border-2 border-white">A</div>
                <div className="w-8 h-8 rounded-full bg-sky-500 text-white font-bold text-xs flex items-center justify-center border-2 border-white">M</div>
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center border-2 border-white">S</div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">4,200+ Donors</p>
                <p className="text-[10px] text-slate-500">Joined this month</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Short Video Teaser Modal */}
      {videoOpen && (
        <div className="modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="modal-content max-w-3xl p-2 bg-black rounded-2xl overflow-hidden relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40"
            >
              ✕
            </button>
            <div className="aspect-video w-full flex items-center justify-center bg-slate-950 text-white p-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="w-8 h-8 fill-emerald-400" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">WithYou NGO Documentary: Seeds of Tomorrow</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                  Experience how clean water, education, and eco-initiatives are creating resilient communities across the globe.
                </p>
                <button onClick={() => setVideoOpen(false)} className="btn btn-primary text-xs py-2 px-5">Close Player</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
