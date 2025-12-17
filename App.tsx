
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User, UserRole, Problem } from './types';
import { MOCK_USERS, MOCK_PROBLEMS } from './constants';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ProblemDetailPage from './pages/ProblemDetailPage';
import SubmitProblemPage from './pages/SubmitProblemPage';
import AnalyticsPage from './pages/AnalyticsPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('oml_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [problems, setProblems] = useState<Problem[]>(() => {
    const saved = localStorage.getItem('oml_problems');
    return saved ? JSON.parse(saved) : MOCK_PROBLEMS;
  });

  useEffect(() => {
    localStorage.setItem('oml_problems', JSON.stringify(problems));
  }, [problems]);

  const handleLogin = (role: UserRole) => {
    // Simulating login by picking a mock user or creating a generic one
    const newUser = MOCK_USERS.find(u => u.role === role) || {
      id: Math.random().toString(36).substr(2, 9),
      name: `Demo ${role}`,
      role: role,
      institution: 'Global Health Network',
      skills: ['General Healthcare', 'Innovation'],
      impactScore: 0,
      contributions: 0
    };
    setUser(newUser);
    localStorage.setItem('oml_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('oml_user');
  };

  const addProblem = (problem: Problem) => {
    setProblems(prev => [problem, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {user && <Navbar user={user} onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={!user ? <LandingPage /> : <Navigate to="/dashboard" />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            
            <Route 
              path="/dashboard" 
              element={user ? <DashboardPage problems={problems} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/problem/:id" 
              element={user ? <ProblemDetailPage problems={problems} user={user} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/submit" 
              element={user ? <SubmitProblemPage user={user} onAdd={addProblem} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/analytics" 
              element={user ? <AnalyticsPage /> : <Navigate to="/" />} 
            />
            <Route 
              path="/profile" 
              element={user ? <ProfilePage user={user} /> : <Navigate to="/" />} 
            />
          </Routes>
        </main>
        
        {!user && (
          <footer className="bg-slate-900 text-slate-400 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">O</div>
                <span className="text-xl font-bold text-white">OpenMed Labs</span>
              </div>
              <p className="text-sm">© 2024 OpenMed Labs. Accelerating Global Health Innovation.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-emerald-400">Privacy</a>
                <a href="#" className="hover:text-emerald-400">Open Source</a>
                <a href="#" className="hover:text-emerald-400">Contact</a>
              </div>
            </div>
          </footer>
        )}
      </div>
    </Router>
  );
};

export default App;
