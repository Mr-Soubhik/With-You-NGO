import React from 'react';
import { FileText, Download, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

export default function NewsSection() {
  const articles = [
    {
      date: "July 20, 2026",
      title: "Q2 Financial & Audit Transparency Report Released",
      category: "Audit & Governance",
      summary: "Detailed itemized breakdown of Q2 2026 expenditures, field progress metrics, and independent financial audit certificate.",
      pdfLink: true
    },
    {
      date: "July 05, 2026",
      title: "Clean Water Milestone: 320th Borehole Well Completed",
      category: "Field Update",
      summary: "Celebrating clean drinking water access for over 3,200 villagers in the Dryland Basin. View photo highlights and water test results.",
      pdfLink: false
    },
    {
      date: "June 18, 2026",
      title: "Summer Youth STEM Camp Launches Across 12 Schools",
      category: "Education",
      summary: "Providing hands-on robotics, coding, and environmental science kits to 1,200 middle school students in underserved rural districts.",
      pdfLink: false
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="badge badge-primary w-max mb-4">Transparency & News</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Latest <span className="text-emerald-600">Field Updates & Reports</span>
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              We publish unedited monthly progress updates and open financial audits for absolute community trust.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between">
                {item.pdfLink ? (
                  <a 
                    href="#download" 
                    onClick={(e) => { e.preventDefault(); alert("Downloading official Q2 2026 Financial Audit (PDF)..."); }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <Download className="w-4 h-4" /> Download PDF Audit
                  </a>
                ) : (
                  <a 
                    href="#read" 
                    onClick={(e) => { e.preventDefault(); alert("Opening full field story..."); }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-emerald-600"
                  >
                    Read Full Story <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
