import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlay for contrast, allow interactions with scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Growth Partner for D2C, Startups & Founders
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-red-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl">
          Turn Performance + Storytelling into Scalable ROAS
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          Turn clicks into conversions with data-driven creativity. Built by Ramthilak — performance marketer & creative strategist with 8+ years across FMCG, D2C & Media-Tech.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#lead" className="group inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-red-500">
            Book a Free Audit
          </a>
          <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Let’s Grow Your Brand
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-10 grid grid-cols-2 gap-6 text-left text-xs text-white/60 sm:grid-cols-4">
          <div>
            <div className="text-white font-semibold">3.4x</div>
            Avg campaign ROAS
          </div>
          <div>
            <div className="text-white font-semibold">40% ↓</div>
            Customer Acquisition Cost
          </div>
          <div>
            <div className="text-white font-semibold">500% ↑</div>
            Engagement Growth
          </div>
          <div>
            <div className="text-white font-semibold">20–40L → +</div>
            D2C revenue scale
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
