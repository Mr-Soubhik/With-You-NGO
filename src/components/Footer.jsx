import React, { useState } from 'react';
import { Heart, Send, ShieldCheck, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenDonate, onOpenVolunteer }) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="container space-y-16">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-emerald-900/60 via-slate-900 to-teal-900/60 p-8 sm:p-12 rounded-3xl border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Stay Connected</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Join Our Field Update Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Receive monthly impact stories, photo journals from local projects, and transparent audit reports directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/20 px-6 py-3.5 rounded-2xl border border-emerald-500/40 animate-fade-in">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! You are subscribed to monthly impact updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none flex-1 min-w-[240px]"
                />
                <button
                  type="submit"
                  className="btn btn-primary text-xs py-3.5 px-6 font-bold shadow-lg shadow-emerald-500/25 whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" /> Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="text-2xl font-extrabold font-heading text-white tracking-tight">
                WithYou <span className="text-emerald-500">NGO</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              WithYou NGO is an international 501(c)(3) registered non-profit dedicated to sustainable education, clean water infrastructure, and eco-restoration worldwide.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>100 WithYou Way, Suite 400, Global City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Helpline: +1 (800) 555-WITHYOU</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>contact@withyou-ngo.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white font-heading">Our Programs</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#causes" className="hover:text-emerald-400 transition-colors">Education & Literacy</a></li>
              <li><a href="#causes" className="hover:text-emerald-400 transition-colors">Clean Water & Hygiene</a></li>
              <li><a href="#causes" className="hover:text-emerald-400 transition-colors">Eco-Reforestation</a></li>
              <li><a href="#causes" className="hover:text-emerald-400 transition-colors">Women Empowerment</a></li>
              <li><a href="#causes" className="hover:text-emerald-400 transition-colors">Emergency Food Relief</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white font-heading">About NGO</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Mission & Values</a></li>
              <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Financial Audits</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition-colors">Upcoming Field Events</a></li>
              <li><a href="#stories" className="hover:text-emerald-400 transition-colors">Beneficiary Stories</a></li>
              <li><button onClick={onOpenVolunteer} className="hover:text-emerald-400 transition-colors text-left">Join as Volunteer</button></li>
            </ul>
          </div>

          {/* Tax Exemption Note */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white font-heading">Tax Exemption</h4>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> 501(c)(3) Certified
              </div>
              <p className="text-[11px] leading-relaxed">
                All donations are tax-deductible to the fullest extent allowable by law. EIN: 98-7654321.
              </p>
            </div>
            
            <button 
              onClick={onOpenDonate}
              className="btn btn-primary w-full text-xs py-2.5 font-bold"
            >
              Donate Now
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 WithYou NGO. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 font-semibold text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Annual Audit PDF</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
