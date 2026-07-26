import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function EventsSection() {
  const [rsvpModalEvent, setRsvpModalEvent] = useState(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');

  const events = [
    {
      id: "evt-1",
      dateDay: "12",
      dateMonth: "AUG",
      title: "Global 10,000 Tree Plantation Drive",
      time: "09:00 AM - 02:00 PM EST",
      location: "Riverfront Park & Online Hybrid",
      seatsLeft: 34,
      tag: "Environmental",
      desc: "Join 500+ volunteers physically and remotely to plant fruit trees and construct community garden fencing."
    },
    {
      id: "evt-2",
      dateDay: "28",
      dateMonth: "AUG",
      title: "Annual WithYou Impact Charity Gala 2026",
      time: "06:30 PM - 10:00 PM EST",
      location: "Metropolitan Convention Center",
      seatsLeft: 18,
      tag: "Fundraising",
      desc: "An inspiring evening featuring beneficiary speeches, live musical performances, and our annual silent auction."
    },
    {
      id: "evt-3",
      dateDay: "15",
      dateMonth: "SEP",
      title: "Rural Health & Clean Water Field Workshop",
      time: "10:00 AM - 04:00 PM EST",
      location: "Community Center - Hall B",
      seatsLeft: 42,
      tag: "Healthcare",
      desc: "Hands-on workshop demonstrating low-cost water filtration systems and maternal health emergency care kits."
    }
  ];

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="badge badge-secondary w-max mb-4">Join Us in Person</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Upcoming <span className="text-emerald-600">Events & Field Drives</span>
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              Connect with fellow volunteers, donors, and field coordinators at our live workshops and community drives.
            </p>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div 
              key={evt.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge & Date Pill */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col items-center justify-center font-heading shadow-md group-hover:scale-105 transition-transform shrink-0">
                    <span className="text-xl font-extrabold leading-none">{evt.dateDay}</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">{evt.dateMonth}</span>
                  </div>
                  
                  <span className="text-[11px] font-extrabold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full shrink-0 self-start">
                    {evt.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 flex items-center justify-between mt-4">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
                  ⚡ {evt.seatsLeft} Spots Left
                </span>

                <button
                  onClick={() => {
                    setRsvpModalEvent(evt);
                    setRsvpSubmitted(false);
                  }}
                  className="btn btn-primary text-xs py-2 px-4 font-bold"
                >
                  RSVP Free
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* RSVP Modal */}
      {rsvpModalEvent && (
        <div className="modal-overlay" onClick={() => setRsvpModalEvent(null)}>
          <div className="modal-content max-w-md p-6 rounded-3xl" onClick={e => e.stopPropagation()}>
            {rsvpSubmitted ? (
              <div className="text-center space-y-4 py-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">Seat Reserved!</h3>
                <p className="text-xs text-slate-600">
                  We look forward to seeing you, <strong>{attendeeName}</strong>! Confirmation details for <strong>{rsvpModalEvent.title}</strong> have been saved.
                </p>
                <button 
                  onClick={() => setRsvpModalEvent(null)}
                  className="btn btn-primary text-xs py-2 px-6"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-slate-900">Reserve Seat: {rsvpModalEvent.title}</h3>
                <p className="text-xs text-slate-500">{rsvpModalEvent.dateMonth} {rsvpModalEvent.dateDay} • {rsvpModalEvent.location}</p>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button 
                    type="button"
                    onClick={() => setRsvpModalEvent(null)}
                    className="btn btn-secondary w-1/2 text-xs py-2.5"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="btn btn-primary w-1/2 text-xs py-2.5 font-bold"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
