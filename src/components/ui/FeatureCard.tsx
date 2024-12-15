import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  color: 'purple' | 'pink';
}

export function FeatureCard({ title, description, color }: FeatureCardProps) {
  const colorClasses = {
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  };

  return (
    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
      <h3 className={`text-2xl font-bold mb-4 ${colorClasses[color]}`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}