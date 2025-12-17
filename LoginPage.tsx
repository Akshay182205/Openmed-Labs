
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: UserRole) => {
    onLogin(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-3xl mx-auto mb-6 shadow-lg">O</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Join OpenMed Labs</h1>
          <p className="text-slate-500">Select your professional identity to begin.</p>
        </div>

        <div className="space-y-3">
          {Object.values(UserRole).map((role) => (
            <button
              key={role}
              onClick={() => handleRoleSelection(role)}
              className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-left hover:border-emerald-400 hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-bold text-slate-800 group-hover:text-emerald-600">{role}</p>
                <p className="text-sm text-slate-400">
                  {role === UserRole.DOCTOR ? 'Post problems from the field' : 'Collaborate on open-source solutions'}
                </p>
              </div>
              <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-slate-400 leading-relaxed">
          OpenMed Labs is an open-source non-profit platform. By joining, you agree to our 
          <span className="text-emerald-600 font-bold ml-1">Ethics & Collaboration Charter</span>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
