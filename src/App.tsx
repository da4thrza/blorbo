import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}

export default App;