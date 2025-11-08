import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import GrowthProof from './components/GrowthProof.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-red-500/30 selection:text-white">
      <Hero />
      <About />
      <Services />
      <GrowthProof />
    </div>
  );
}

export default App;
