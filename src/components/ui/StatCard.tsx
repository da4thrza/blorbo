import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: 'purple' | 'pink';
}

export function StatCard({ icon: Icon, value, label, color }: StatCardProps) {
  const colorClasses = {
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  };

  return (
    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
      <Icon className={`w-12 h-12 ${colorClasses[color]} mb-4`} />
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p className="text-purple-200">{label}</p>
    </div>
  );
}