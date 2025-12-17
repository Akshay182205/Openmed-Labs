
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Problem, Category, Urgency } from '../types';

interface SubmitProblemPageProps {
  user: User;
  onAdd: (problem: Problem) => void;
}

const SubmitProblemPage: React.FC<SubmitProblemPageProps> = ({ user, onAdd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    constraints: '',
    urgency: Urgency.MEDIUM,
    category: Category.DEVICES,
    tags: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProblem: Problem = {
      id: Math.random().toString(36).substr(2, 9),
      title: formData.title,
      description: formData.description,
      location: formData.location,
      resourceConstraints: formData.constraints,
      urgency: formData.urgency,
      category: formData.category,
      submittedBy: user.id,
      submittedByName: user.name,
      createdAt: new Date().toISOString(),
      upvotes: 0,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t !== '')
    };

    onAdd(newProblem);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Report a Health Challenge</h1>
        <p className="text-slate-500">Be as descriptive as possible. The community needs context to innovate effectively.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Problem Title</label>
          <input 
            type="text" 
            required
            placeholder="e.g., Solar Powered Oxygen Concentrator for Rural Clinics"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value as Category})}
            >
              {Object.values(Category).map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Urgency Level</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              value={formData.urgency}
              onChange={(e) => setFormData({...formData, urgency: e.target.value as Urgency})}
            >
              {Object.values(Urgency).map(urg => <option key={urg} value={urg}>{urg}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Detailed Description</label>
          <textarea 
            required
            rows={5}
            placeholder="Describe the clinical need, who it affects, and why current solutions are failing..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Location & Context</label>
          <input 
            type="text" 
            required
            placeholder="e.g., Rural Highlands, Papua New Guinea"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Resource Constraints</label>
          <textarea 
            rows={3}
            placeholder="e.g., No reliable electricity, high dust, must be repairable using local bicycle tools..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
            value={formData.constraints}
            onChange={(e) => setFormData({...formData, constraints: e.target.value})}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Tags (comma separated)</label>
          <input 
            type="text" 
            placeholder="Maternal, Oxygen, Solar, Portable"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={formData.tags}
            onChange={(e) => setFormData({...formData, tags: e.target.value})}
          />
        </div>

        <div className="pt-4 flex gap-4">
          <button 
            type="button" 
            onClick={() => navigate('/dashboard')}
            className="flex-1 py-4 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="flex-1 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg transition-all"
          >
            Post Challenge
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitProblemPage;
