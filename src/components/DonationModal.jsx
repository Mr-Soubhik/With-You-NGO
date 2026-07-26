import React, { useState, useEffect } from 'react';
import { Heart, X, Check, ShieldCheck, Sparkles, CreditCard, Lock, DollarSign, Gift, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DonationModal({ isOpen, onClose, selectedCause, selectedCurrency }) {
  const [frequency, setFrequency] = useState('monthly'); // 'monthly' | 'once'
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const presetAmounts = [15, 30, 50, 100, 250];

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentAmount = isCustom ? (parseFloat(customAmount) || 0) : amount;

  // Convert for display
  const convertedDisplay = (usdVal) => {
    const val = usdVal * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${Math.round(val)}`;
  };

  // Dynamic impact calculation based on current amount
  const getImpactDescription = (usdVal) => {
    if (usdVal <= 20) return "Provides emergency warm meals and bottled water for 15 children.";
    if (usdVal <= 45) return "Equips a child with full annual textbooks, uniform, and school bag.";
    if (usdVal <= 80) return "Plants 25 fruit trees and funds clean drinking water filters for a family.";
    if (usdVal <= 180) return "Sponsors 1 mobile medical clinic visit for a remote village community.";
    return "Funds major school renovation, solar panels, and clean borehole water pump infrastructure.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAmount <= 0) return;

    // Trigger confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-xl p-0 overflow-hidden rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Make a Tax-Deductible Donation</h3>
              <p className="text-xs text-emerald-400 font-medium">501(c)(3) Verified Non-Profit Organization</p>
            </div>
          </div>

          {selectedCause && (
            <div className="mt-3 p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Supporting: <strong>{selectedCause.title}</strong></span>
            </div>
          )}
        </div>

        {submitted ? (
          /* Thank You Celebration View */
          <div className="p-8 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-heading text-slate-900">Thank You, {name || 'Kind Donor'}!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your generous gift of <span className="font-bold text-emerald-600">{convertedDisplay(currentAmount)}</span> ({frequency === 'monthly' ? 'Monthly' : 'One-Time'}) has been received. A official tax receipt has been emailed to <strong>{email || 'your inbox'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left text-xs text-emerald-900 space-y-1.5 max-w-md mx-auto">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Immediate Impact Triggered:
              </p>
              <p>{getImpactDescription(currentAmount)}</p>
            </div>

            <button 
              onClick={onClose}
              className="btn btn-primary w-full py-3 text-sm font-bold max-w-sm mx-auto"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Donation Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Frequency Toggle */}
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${frequency === 'monthly' ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <Heart className={`w-3.5 h-3.5 ${frequency === 'monthly' ? 'fill-emerald-600' : ''}`} />
                Give Monthly (Recommended)
              </button>
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${frequency === 'once' ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <Gift className="w-3.5 h-3.5" />
                Give One-Time
              </button>
            </div>

            {/* Amount Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Select Donation Amount ({selectedCurrency.code})</label>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setIsCustom(false); }}
                    className={`py-3 rounded-2xl border-2 text-sm font-extrabold transition-all ${!isCustom && amount === amt ? 'border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm' : 'border-slate-200 text-slate-700 hover:border-slate-300'}`}
                  >
                    {convertedDisplay(amt)}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="Or enter custom amount in USD"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  className={`w-full py-2.5 pl-10 pr-4 rounded-xl border text-sm font-semibold transition-all ${isCustom ? 'border-emerald-600 ring-2 ring-emerald-100' : 'border-slate-200'}`}
                />
                <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            {/* Dynamic Impact Calculator Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 space-y-1">
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Your Real Impact ({convertedDisplay(currentAmount)}):</span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed pl-6">
                {getImpactDescription(currentAmount)}
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-600">Payment Option</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 ${paymentMethod === 'card' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600'}`}
                >
                  <CreditCard className="w-3.5 h-3.5" /> Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 ${paymentMethod === 'paypal' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600'}`}
                >
                  PayPal
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 ${paymentMethod === 'upi' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600'}`}
                >
                  UPI / Wallet
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full py-3.5 text-base font-bold shadow-lg shadow-emerald-500/25"
            >
              <Lock className="w-4 h-4" />
              <span>Complete Donation of {convertedDisplay(currentAmount)}</span>
            </button>

            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-Bit SSL Encryption • Instant Official Tax Receipt Provided</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
