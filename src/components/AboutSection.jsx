import React, { useState } from 'react';
import { Target, Eye, Heart, Shield, Lightbulb, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('education');

  const programs = {
    education: {
      title: "Quality Education & Literacy",
      desc: "We build modern community learning centers, equip schools with digital lab materials, train local teachers, and provide full annual scholarships to children from underprivileged households.",
      bullets: ["Over 18,000 students enrolled", "Free STEM & digital literacy kits", "After-school nutrition & mentoring"],
      stat: "98.4%",
      statLabel: "School Retention Rate"
    },
    eco: {
      title: "Eco-Sustainability & Reforestation",
      desc: "Combating land degradation by empowering rural communities to plant native fruit trees, install rainwater harvesting systems, and transition to sustainable organic farming.",
      bullets: ["35,000+ Trees actively grown", "12 Organic community gardens", "Zero-plastic eco-workshops"],
      stat: "140 Tons",
      statLabel: "CO2 Offset Annually"
    },
    healthcare: {
      title: "Rural Health & Clean Water",
      desc: "Operating mobile medical clinics in remote villages, distributing clean water filtration tanks, providing maternal health kits, and organizing preventive hygiene campaigns.",
      bullets: ["320+ Clean water wells dug", "Mobile clinics serving 4,000/mo", "Maternal & pediatric aid"],
      stat: "320+",
      statLabel: "Villages Safe Water Access"
    },
    empowerment: {
      title: "Women Empowerment & Micro-Grants",
      desc: "Providing vocational skill training in tailoring, artisanal craft-making, and small business management, paired with micro-grants to foster financial independence.",
      bullets: ["2,400 Women entrepreneurs funded", "Micro-loans with zero interest", "Financial literacy workshops"],
      stat: "94%",
      statLabel: "Successful Business Growth"
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="badge badge-primary">Who We Are</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900">
            Dedicated to Creating Sustainable <span className="text-emerald-600">Human Opportunity</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Founded in 2018, WithYou NGO works hand-in-hand with grassroots leaders to break cycles of poverty, hunger, and environmental neglect.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver immediate humanitarian relief and build lasting community-led infrastructure that empowers individuals to thrive with dignity and self-sufficiency.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-500/40 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A world where every child has access to quality education, clean drinking water, health protection, and an environment that supports future generations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Core Values</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Radical transparency, deep local collaboration, uncompromising empathy, and a relentless focus on long-term measurable outcomes.
            </p>
          </div>

        </div>

        {/* Interactive Programs Tab Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Our Strategic Pillars</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">Explore Our Core Initiatives</h3>
          </div>

          {/* Tab Switchers */}
          <div className="flex flex-wrap gap-3 mb-10 border-b border-slate-800 pb-6">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'education' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              Education & Youth
            </button>
            <button
              onClick={() => setActiveTab('eco')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'eco' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              Eco & Reforestation
            </button>
            <button
              onClick={() => setActiveTab('healthcare')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'healthcare' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              Health & Water
            </button>
            <button
              onClick={() => setActiveTab('empowerment')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'empowerment' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              Women Empowerment
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in" key={activeTab}>
            <div className="lg:col-span-8 space-y-6">
              <h4 className="text-2xl font-bold font-heading text-white">{programs[activeTab].title}</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">{programs[activeTab].desc}</p>
              
              <div className="space-y-2.5 pt-2">
                {programs[activeTab].bullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl text-center space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pillar Metric</span>
              <p className="text-4xl font-extrabold font-heading text-emerald-400">{programs[activeTab].stat}</p>
              <p className="text-xs font-bold text-slate-300">{programs[activeTab].statLabel}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
