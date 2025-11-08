import React from 'react';

const services = [
  {
    title: 'Paid Performance Marketing',
    desc: 'Full‑funnel ads across Meta, Google & YouTube with ruthless testing for scale.',
    bullets: ['Structured testing & creative systems', 'ROAS‑first budget allocation', 'YouTube funnels & remarketing'],
  },
  {
    title: 'Website Conversion Optimization',
    desc: 'Landing pages, CRO and analytics that turn intent into purchases.',
    bullets: ['High‑velocity landing page builds', 'Heatmaps & GA4/Tag Manager', 'A/B tests that compound'],
  },
  {
    title: 'Brand Growth Strategy',
    desc: 'Creative storytelling, video campaigns and UGC that move the needle.',
    bullets: ['Concept to script to edit', 'Hook frameworks & thumb‑stoppers', 'Creator sourcing & management'],
  },
  {
    title: 'D2C Consulting',
    desc: 'Shopify growth, retention, subscriptions and full funnel monetization.',
    bullets: ['LTV & subscription frameworks', 'Email/SMS retention systems', 'Offer & funnel architecture'],
  },
];

function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Services</h2>
          <p className="mt-3 max-w-2xl text-white/80">A performance partner who actually executes — from media buying to creatives to conversion infrastructure.</p>
        </div>
        <a href="#lead" className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 md:inline-flex">Build My Growth Plan</a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 transition hover:from-white/10 hover:to-white/[0.06]">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-white/80">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-white/70">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
