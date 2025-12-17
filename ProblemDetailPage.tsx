
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Problem, User, Solution, UserRole } from '../types';
import { getProblemAnalysis } from '../geminiService';

interface ProblemDetailPageProps {
  problems: Problem[];
  user: User;
}

const ProblemDetailPage: React.FC<ProblemDetailPageProps> = ({ problems, user }) => {
  const { id } = useParams<{ id: string }>();
  const problem = problems.find(p => p.id === id);
  
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'solutions' | 'discussion'>('details');

  useEffect(() => {
    if (problem) {
      handleGetAIAnalysis();
    }
  }, [id]);

  const handleGetAIAnalysis = async () => {
    if (!problem) return;
    setIsAnalyzing(true);
    const result = await getProblemAnalysis(problem);
    setAiAnalysis(result);
    setIsAnalyzing(false);
  };

  if (!problem) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">Problem not found</h2>
        <Link to="/dashboard" className="text-emerald-600 underline">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link to="/dashboard" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider border border-slate-200">
                  {problem.category}
                </span>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${
                  problem.urgency === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                }`}>
                  {problem.urgency} Urgency
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{problem.title}</h1>
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {problem.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Posted {new Date(problem.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-6 py-2 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                Upvote {problem.upvotes}
              </button>
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-md transition-all">
                Submit Solution
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="flex border-b border-slate-200">
                {(['details', 'solutions', 'discussion'] as const).map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm font-bold capitalize transition-all ${
                      activeTab === tab ? 'text-emerald-600 bg-white border-b-2 border-emerald-600' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                {activeTab === 'details' && (
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Problem Context</h2>
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{problem.description}</p>
                    </section>
                    
                    <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Resource Constraints</h2>
                      <p className="text-slate-600 italic">"The solution must consider the following environmental factors:"</p>
                      <p className="mt-2 text-slate-700">{problem.resourceConstraints}</p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Posted By</h2>
                      <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold rounded-full flex items-center justify-center text-lg">
                          {problem.submittedByName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{problem.submittedByName}</p>
                          <p className="text-sm text-slate-500">Doctor • Northern Health Authority</p>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'solutions' && (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-700">Be the first to propose a solution</h3>
                    <p className="text-slate-500 mt-2 mb-8">Share your designs, code, or research to help solve this problem.</p>
                    <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
                      Open Builder Workspace
                    </button>
                  </div>
                )}

                {activeTab === 'discussion' && (
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                      <div className="grow">
                        <textarea 
                          placeholder="Add to the discussion..." 
                          className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 h-24"
                        ></textarea>
                        <button className="mt-2 px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg text-sm">Post Comment</button>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 pt-6">
                      <p className="text-center text-slate-400 text-sm">No comments yet. Start the conversation!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
                <span className="p-1 bg-emerald-500 rounded text-xs">AI</span>
                Smart Analysis
              </h3>
              
              {isAnalyzing ? (
                <div className="space-y-4 animate-pulse relative z-10">
                  <div className="h-4 bg-emerald-800 rounded w-full"></div>
                  <div className="h-4 bg-emerald-800 rounded w-3/4"></div>
                  <div className="h-20 bg-emerald-800 rounded w-full"></div>
                </div>
              ) : aiAnalysis ? (
                <div className="space-y-6 relative z-10">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Executive Summary</h4>
                    <p className="text-sm leading-relaxed text-emerald-50">{aiAnalysis.summary}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Recommended Approaches</h4>
                    <ul className="space-y-2">
                      {aiAnalysis.approaches.map((a: string, i: number) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Expertise Needed</h4>
                    <div className="flex flex-wrap gap-2">
                      {aiAnalysis.requiredSkills.map((s: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-emerald-800 text-[10px] font-bold rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center relative z-10">
                   <p className="text-sm text-emerald-300 mb-4">Error generating analysis.</p>
                   <button onClick={handleGetAIAnalysis} className="text-xs bg-emerald-500 px-4 py-2 rounded-lg font-bold">Retry</button>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 mb-4">Open-Source Bounty</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center font-bold">
                  $
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Validation Grant</p>
                  <p className="text-xl font-black text-slate-800">$5,000</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Projects that reach "Validation Ready" status are eligible for equipment and field-testing grants from our partner NGOs.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage;
