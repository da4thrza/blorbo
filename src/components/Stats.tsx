import React from 'react';
import { Coins, CandlestickChart, Sparkles } from 'lucide-react';
import { StatCard } from './ui/StatCard';

const stats = [
  {
    icon: Coins,
    value: '1,000,000,000,000',
    label: 'Total Supply',
    color: 'purple'
  },
  {
    icon: CandlestickChart,
    value: 'Blorbo Up Only',
    label: 'Current Price',
    color: 'pink'
  },
  {
    icon: Sparkles,
    value: 'Lotsa Blorbos',
    label: 'Holders',
    color: 'purple'
  }
];

export function Stats() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}