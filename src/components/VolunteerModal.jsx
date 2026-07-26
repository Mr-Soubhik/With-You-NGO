import React, { useState } from 'react';
import { Users, X, CheckCircle, Sparkles, Send, Calendar, MapPin } from 'lucide-react';

export default function VolunteerModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('education');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    hoursPerWeek: '3-5'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-lg p-0 overflow-hidden rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Become a WithYou NGO Volunteer</h3>
              <p className="text-xs text-slate-400">Join over 1,400 active change-makers across the world.</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-heading text-slate-900">Application Received!</h3>
              <p className="text-xs text-slate-600">
                Thank you <strong>{formData.name}</strong>! Our Volunteer Coordinator will contact you via email (<strong>{formData.email}</strong>) within 24-48 hours with orientation details.
              </p>
            </div>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }} 
              className="btn btn-primary text-xs py-2.5 px-6"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Choose Primary Volunteer Role</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setRole('education')}
                  className={`p-2.5 rounded-xl border text-left ${role === 'education' ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-700'}`}
                >
                  🎓 Teacher & Tutor
                </button>
                <button
                  type="button"
                  onClick={() => setRole('eco')}
                  className={`p-2.5 rounded-xl border text-left ${role === 'eco' ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-700'}`}
                >
                  🌱 Tree Planter / Eco
                </button>
                <button
                  type="button"
                  onClick={() => setRole('health')}
                  className={`p-2.5 rounded-xl border text-left ${role === 'health' ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-700'}`}
                >
                  🩺 Healthcare Assistant
                </button>
                <button
                  type="button"
                  onClick={() => setRole('events')}
                  className={`p-2.5 rounded-xl border text-left ${role === 'events' ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-700'}`}
                >
                  🎪 Event Ops & Media
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">City / Region</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. San Francisco, CA"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Availability</label>
                <select
                  value={formData.hoursPerWeek}
                  onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:border-emerald-500 focus:outline-none"
                >
                  <option value="1-2">1-2 Hours / Week</option>
                  <option value="3-5">3-5 Hours / Week</option>
                  <option value="5-10">5-10 Hours / Week</option>
                  <option value="fulltime">Full-Time Field Deployment</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-xs font-bold shadow-md shadow-emerald-500/20"
            >
              <Send className="w-3.5 h-3.5" /> Submit Volunteer Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
