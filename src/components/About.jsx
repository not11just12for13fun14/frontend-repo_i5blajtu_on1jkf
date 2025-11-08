import React from 'react';

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-0 -z-[0] bg-gradient-to-b from-red-600/10 via-transparent to-transparent blur-[120px]" />
      <div className="relative grid grid-cols-1 items-start gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Ramthilak</h2>
          <p className="mt-4 text-white/80">
            Ramthilak is a performance marketer and creative strategist who blends data with narrative. Over 8+ years across FMCG, D2C and Media‑Tech, he has engineered profitable funnels, built thumb‑stopping creatives, and scaled brands with discipline.
          </p>
          <p className="mt-4 text-white/80">
            Highlights include driving consistent <span className="text-white font-semibold">3.4 ROAS</span> campaigns, scaling D2C stores from <span className="text-white font-semibold">20–40L</span> to higher revenue bands, and leading digital for brands like <span className="text-white font-semibold">Cycle Pure</span>, <span className="text-white font-semibold">Amrutanjan</span>, and <span className="text-white font-semibold">Asiaville</span>.
          </p>
          <p className="mt-4 text-white/80">
            Expertise spans paid acquisition, creative storytelling, funnel optimization and analytics — the full stack needed to turn clicks into customers.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Core Strengths</h3>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• Paid Ads: Meta, Google, YouTube</li>
            <li>• Creative Strategy & Storytelling</li>
            <li>• CRO: Landing Pages & Analytics</li>
            <li>• D2C Growth: Shopify, retention & subscriptions</li>
          </ul>
          <a href="#lead" className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">Get a Free Growth Audit</a>
        </div>
      </div>
    </section>
  );
}

export default About;
