import React from 'react';
import { Button } from './ui/Button';
import { SOCIAL_LINKS } from '../constants/links';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-pink-600/20" />
      <div className="absolute inset-0">
        <div className="grid grid-cols-8 gap-4 animate-float opacity-10">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl" />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="https://pbs.twimg.com/profile_images/1867060800172503040/bWtIfhRS_400x400.jpg"
            alt="Blorbo"
            className="w-32 h-32 rounded-full border-4 border-pink-500 animate-pulse"
          />
        </div>
        <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
          BLORBO
        </h1>
        <p className="text-2xl md:text-4xl mb-8 text-purple-200">
          the most important innovation in finance since money
        </p>
        <div className="flex justify-center">
          <Button 
            variant="primary"
            onClick={() => window.open(SOCIAL_LINKS.dexscreener, '_blank')}
          >
            Buy $BLORB
          </Button>
        </div>
      </div>
    </div>
  );
}