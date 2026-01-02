
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Uptime', value: 99.9, color: '#06b6d4' },
  { name: 'Response', value: 94.5, color: '#818cf8' },
  { name: 'Efficiency', value: 88.2, color: '#a855f7' },
  { name: 'Security', value: 99.1, color: '#ec4899' },
];

const StatsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold font-orbitron mb-6">Quantifiable Superiority</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            We don't just build; we optimize. Our systems are engineered to perform under extreme load while maintaining near-perfect reliability scores.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass rounded-2xl">
              <span className="block text-4xl font-bold text-cyan-400 mb-1">500+</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Systems Deployed</span>
            </div>
            <div className="p-6 glass rounded-2xl">
              <span className="block text-4xl font-bold text-indigo-400 mb-1">10ms</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Avg Latency</span>
            </div>
            <div className="p-6 glass rounded-2xl">
              <span className="block text-4xl font-bold text-purple-400 mb-1">24/7</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Support Coverage</span>
            </div>
            <div className="p-6 glass rounded-2xl">
              <span className="block text-4xl font-bold text-pink-400 mb-1">100%</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Client Retention</span>
            </div>
          </div>
        </div>

        <div className="h-[400px] glass p-8 rounded-3xl">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 text-center">Performance Benchmarks (%)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} stroke="#9ca3af" axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
