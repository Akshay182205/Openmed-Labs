
import React from 'react';
import { User } from '../types';

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 h-32"></div>
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12 mb-8">
            <div className="w-24 h-24 bg-white p-1 rounded-3xl shadow-lg shrink-0">
              <div className="w-full h-full bg-slate-100 rounded-[22px] flex items-center justify-center text-3xl font-black text-slate-400">
                {user.name.charAt(0)}
              </div>
            </div>
            <div className="grow">
              <h1 className="text-3xl font-black text-slate-900">{user.name}</h1>
              <p className="text-emerald-600 font-bold">{user.role}</p>
            </div>
            <div className="shrink-0 flex gap-2">
              <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl text-sm">Edit Profile</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Impact Score</p>
              <p className="text-3xl font-black text-slate-800">{user.impactScore}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Contributions</p>
              <p className="text-3xl font-black text-slate-800">{user.contributions}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Expertise level</p>
              <p className="text-3xl font-black text-slate-800">Pro</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-emerald-50 text-emerald-700 font-bold rounded-lg text-sm border border-emerald-100">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Institution</h3>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-bold text-slate-700">{user.institution}</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
