
import React from 'react';
import { Link } from 'react-router-dom';
import { Problem, Urgency } from '../types';

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  const getUrgencyColor = (urgency: Urgency) => {
    switch (urgency) {
      case Urgency.CRITICAL: return 'bg-red-100 text-red-700 border-red-200';
      case Urgency.HIGH: return 'bg-orange-100 text-orange-700 border-orange-200';
      case Urgency.MEDIUM: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <Link 
      to={`/problem/${problem.id}`}
      className="block group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${getUrgencyColor(problem.urgency)}`}>
          {problem.urgency}
        </span>
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
          {problem.upvotes}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
        {problem.title}
      </h3>
      
      <p className="text-slate-600 text-sm line-clamp-3 mb-4">
        {problem.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {problem.tags.map(tag => (
          <span key={tag} className="text-[11px] font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[12px]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
            {problem.submittedByName.charAt(0)}
          </div>
          <span className="text-slate-500 font-medium">{problem.submittedByName}</span>
        </div>
        <span className="text-slate-400">{problem.location}</span>
      </div>
    </Link>
  );
};

export default ProblemCard;
