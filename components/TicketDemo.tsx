
import React, { useState } from 'react';
import { Ticket } from '../types';

const INITIAL_TICKETS: Ticket[] = [
  { id: 'SKN-102', subject: 'Server Latency in US-East', status: 'Pending', priority: 'High', date: '2023-10-27' },
  { id: 'SKN-105', subject: 'API Authentication Failure', status: 'Open', priority: 'High', date: '2023-10-28' },
  { id: 'SKN-112', subject: 'Update Documentation', status: 'Resolved', priority: 'Low', date: '2023-10-25' },
  { id: 'SKN-120', subject: 'Billing Inquiry - Client X', status: 'Open', priority: 'Medium', date: '2023-10-28' },
];

const TicketDemo: React.FC = () => {
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  const [filter, setFilter] = useState('All');

  const filteredTickets = filter === 'All' 
    ? tickets 
    : tickets.filter(t => t.status === filter);

  return (
    <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto">
      <div className="bg-gray-800/50 p-6 flex flex-wrap justify-between items-center border-b border-white/5 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <h4 className="ml-4 font-orbitron font-bold text-gray-300">SYSTEM_OPERATIONS_CONSOLE</h4>
        </div>
        <div className="flex gap-2">
          {['All', 'Open', 'Pending', 'Resolved'].map(s => (
            <button 
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-lg text-sm transition-all ${filter === s ? 'bg-cyan-500 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-gray-400 uppercase text-xs font-bold tracking-widest">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredTickets.map((t) => (
              <tr key={t.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 font-mono text-cyan-500 text-sm">{t.id}</td>
                <td className="px-6 py-4 text-white font-medium">{t.subject}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    t.status === 'Open' ? 'bg-blue-500/20 text-blue-400' : 
                    t.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs ${
                    t.priority === 'High' ? 'text-red-400' : 
                    t.priority === 'Medium' ? 'text-yellow-400' : 'text-gray-400'
                  }`}>
                    {t.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">{t.date}</td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredTickets.length === 0 && (
        <div className="py-20 text-center text-gray-500">
          <i className="fas fa-search mb-4 text-4xl block"></i>
          <p>No tickets found in this segment.</p>
        </div>
      )}

      <div className="p-4 bg-gray-900/30 flex justify-between items-center">
        <p className="text-xs text-gray-500">Showing {filteredTickets.length} active records</p>
        <button className="text-cyan-400 text-xs font-bold hover:underline">Download Report</button>
      </div>
    </div>
  );
};

export default TicketDemo;
