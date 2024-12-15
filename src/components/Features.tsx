import React from 'react';
import { FeatureCard } from './ui/FeatureCard';
import { SocialLinks } from './SocialLinks';

const features = [
  {
    title: 'Completely Useless',
    description: 'Unlike other cryptocurrencies that pretend to have utility, Blorbo is proudly and completely useless.',
    color: 'purple'
  },
  {
    title: 'Moon Mission',
    description: 'Our advanced algorithms guarantee that number will definitely go up (this is not financial advice).',
    color: 'pink'
  },
  {
    title: 'Community Driven',
    description: 'Join our vibrant community of memers, dreamers, and people who like to watch numbers go up and down.',
    color: 'purple'
  },
  {
    title: 'Revolutionary Technology',
    description: 'Built on blockchain technology we found on Stack Overflow. What could go wrong?',
    color: 'pink'
  }
];

export function Features() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Why Blorbo Will Change Everything
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <SocialLinks />
    </div>
  );
}