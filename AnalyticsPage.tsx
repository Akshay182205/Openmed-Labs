
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';

const AnalyticsPage: React.FC = () => {
  const dataImpact = [
    { month: 'Jan', solutions: 12, impact: 450 },
    { month: 'Feb', solutions: 19, impact: 680 },
    { month: 'Mar', solutions: 25, impact: 890 },
    { month: 'Apr', solutions: 32, impact: 1200 },
    { month: 'May', solutions: 48, impact: 2100 },
    { month: 'Jun', solutions: 55, impact: 2800 },
  ];

  const categoryData = [
    { name: 'Devices', value: 45 },
    { name: 'AI Health', value: 25 },
    { name: 'Diagnostics', value: 20 },
    { name: 'Other', value: 10 },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#64748b'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Impact Dashboard</h1>
        <p className="text-slate-500 text-lg">Measuring the reach and efficacy of open-source healthcare innovation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Problems', value: '1,420', sub: '+12% this month', color: 'text-emerald-600' },
          { label: 'Active Collaborators', value: '5,280', sub: 'In 45 countries', color: 'text-blue-600' },
          { label: 'Solutions Validated', value: '284', sub: 'Field-ready', color: 'text-purple-600' },
          { label: 'Est. Cost Savings', value: '$2.4M', sub: 'Global impact', color: 'text-orange-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</p>
            <p className="text-xs text-slate-500 font-medium">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-8">Solutions Deployed vs Lives Impacted</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataImpact}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Line type="monotone" dataKey="impact" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="solutions" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-8">Solution Distribution by Category</h3>
          <div className="h-80 flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-4">
              {categoryData.map((c, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></span>
                  <span className="text-xs font-bold text-slate-600">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
