import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: 'purple' | 'pink';
}

export function SocialButton({ icon: Icon, label, href, color }: SocialButtonProps) {
  const colorClasses = {
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`aspect-square flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${colorClasses[color]} hover:opacity-90 transition-opacity`}
    >
      <Icon className="w-8 h-8 mb-2" />
      <span className="text-sm font-medium text-center">{label}</span>
    </a>
  );
}