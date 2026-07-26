import React, { useState, useEffect } from 'react';
import { Heart, Globe, Menu, X, DollarSign, Euro, IndianRupee, PoundSterling, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenDonate, selectedCurrency, setSelectedCurrency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies = [
    { code: 'USD', symbol: '$', label: 'USD ($)', rate: 1 },
    { code: 'EUR', symbol: '€', label: 'EUR (€)', rate: 0.92 },
    { code: 'GBP', symbol: '£', label: 'GBP (£)', rate: 0.79 },
    { code: 'INR', symbol: '₹', label: 'INR (₹)', rate: 83.2 }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'}`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
            <Heart className="w-6 h-6 fill-white" />
          </div>
          <div>
            <span className="text-2xl font-extrabold font-heading text-slate-900 tracking-tight flex items-center gap-2">
              WithYou <span className="text-emerald-600">NGO</span>
            </span>
            <p className="text-xs text-slate-500 font-medium">Empowering Futures Together</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a>
          <a href="#causes" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
            Causes <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping inline-block"></span>
          </a>
          <a href="#impact" className="hover:text-emerald-600 transition-colors">Our Impact</a>
          <a href="#events" className="hover:text-emerald-600 transition-colors">Events</a>
          <a href="#stories" className="hover:text-emerald-600 transition-colors">Stories</a>
        </nav>

        {/* Right Action Bar */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Currency Selector */}
          <div className="relative group">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 cursor-pointer transition-colors">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>{selectedCurrency.code} ({selectedCurrency.symbol})</span>
            </div>
            <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 p-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all transform origin-top-right">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${selectedCurrency.code === curr.code ? 'bg-emerald-50 text-emerald-700 font-bold' : 'hover:bg-slate-50 text-slate-600'}`}
                >
                  <span>{curr.code}</span>
                  <span>{curr.symbol}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>501(c)(3) Verified</span>
          </div>

          {/* Donate CTA Button */}
          <button 
            onClick={onOpenDonate}
            className="btn btn-primary text-sm py-2.5 px-5 shadow-emerald-500/20"
          >
            <Heart className="w-4 h-4 fill-white animate-pulse" />
            <span>Donate Now</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-fade-in">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 font-semibold py-2">About Us</a>
          <a href="#causes" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 font-semibold py-2">Featured Causes</a>
          <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 font-semibold py-2">Our Impact</a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 font-semibold py-2">Upcoming Events</a>
          <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 font-semibold py-2">Success Stories</a>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
              <span className="text-xs font-semibold text-slate-600">Select Currency:</span>
              <div className="flex gap-2">
                {currencies.map(c => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCurrency(c)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold ${selectedCurrency.code === c.code ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                  >
                    {c.symbol}
                  </button>
                ))}
              </div>
            </div>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
              className="btn btn-primary w-full py-3"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
