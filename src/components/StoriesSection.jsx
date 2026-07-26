import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: "Amina K.",
      role: "Student & Scholarship Recipient",
      location: "Valley Village",
      quote: "Before WithYou NGO arrived with solar power and books, our school closed at sunset. Now I study computer science and want to become a software engineer to build apps for my community.",
      impact: "Finished top of her high school class, 2025.",
      avatarBg: "bg-emerald-600"
    },
    {
      name: "Dr. Marcus Vance",
      role: "Volunteer Physician",
      location: "Field Medical Unit",
      quote: "Working with the mobile health team has been the most fulfilling chapter of my medical career. We treat over 400 patients weekly who previously walked 15 miles for basic healthcare.",
      impact: "Completed 14 medical aid missions with WithYou NGO.",
      avatarBg: "bg-sky-600"
    },
    {
      name: "Elena Rostova",
      role: "Monthly Sustaining Donor",
      location: "Chicago, IL",
      quote: "The quarterly transparency reports show me exactly where every dollar of my $50 monthly pledge goes. Knowing I helped build a clean water well brings so much joy.",
      impact: "Monthly donor since 2021.",
      avatarBg: "bg-amber-600"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[currentIndex];

  return (
    <section id="stories" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Human Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            Lives Transformed, <span className="text-emerald-400">Voices Heard</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real stories from the children, families, volunteers, and supporters who make our mission possible every single day.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-12 relative shadow-2xl backdrop-blur-xl">
          
          <Quote className="w-16 h-16 text-emerald-500/20 absolute top-8 right-8 pointer-events-none" />

          <div className="space-y-6 animate-fade-in" key={currentIndex}>
            
            {/* Rating */}
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-slate-100 italic">
              "{story.quote}"
            </p>

            {/* Author Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-700/70">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${story.avatarBg} text-white font-extrabold text-lg flex items-center justify-center shadow-md`}>
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base text-white flex items-center gap-1.5">
                    {story.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{story.role} • {story.location}</p>
                </div>
              </div>

              <div className="bg-slate-700/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 border border-emerald-500/20 self-start sm:self-auto">
                ✨ {story.impact}
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-3 mt-8 pt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
