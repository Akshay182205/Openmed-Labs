
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Solving Healthcare at the Last Mile
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Open Innovation for <span className="text-emerald-600">Universal Health</span>.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            OpenMed Labs connects doctors on the field with engineers and researchers to build affordable, open-source medical solutions for everyone, everywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/login" 
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all hover:-translate-y-1"
            >
              Start Collaborating
            </Link>
            <Link 
              to="/login" 
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl shadow-sm hover:border-slate-300 transition-all hover:bg-slate-50"
            >
              I'm a Healthcare Provider
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Crowdsourcing Solutions for Real Challenges</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Post Challenges</h3>
              <p className="text-slate-600">Doctors in underserved regions share critical equipment gaps or diagnostic hurdles they face daily.</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 text-blue-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Build Prototypes</h3>
              <p className="text-slate-600">Engineers and researchers build open-source models, designs, and AI tools to address the shared problems.</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 text-purple-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04Customizable7 0 00-.667 9.019c.121.2.24.401.359.599a11.954 11.954 0 005.248 4.054L12 21.35l2.011-.683a11.954 11.954 0 005.248-4.054c.119-.198.238-.399.359-.599a10.205 10.205 0 00-.667-9.019z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Validate & Scale</h3>
              <p className="text-slate-600">The community validates the effectiveness, ensuring safety and low-cost manufacturing viability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Ready to bridge the healthcare gap?</h2>
        <p className="text-lg text-slate-600 mb-12">Join a global movement of 5,000+ contributors working on 250+ active medical projects.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-4xl font-black text-emerald-600 mb-1">254</p>
            <p className="text-slate-500 font-medium">Projects</p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 mb-1">12k+</p>
            <p className="text-slate-500 font-medium">Contributions</p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 mb-1">$2.4M</p>
            <p className="text-slate-500 font-medium">Cost Savings</p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 mb-1">45</p>
            <p className="text-slate-500 font-medium">Countries</p>
          </div>
        </div>
        <Link to="/login" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
          Create Your Profile
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
