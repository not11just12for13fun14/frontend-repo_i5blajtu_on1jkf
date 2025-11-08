import React, { useState } from 'react';

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

function Testimonial({ quote, author, role }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
      <p className="text-white/90">“{quote}”</p>
      <div className="mt-4 text-sm text-white/70">— {author}, {role}</div>
    </div>
  );
}

function LeadForm() {
  const [form, setForm] = useState({ name: '', brand: '', contact: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="lead" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      {!sent ? (
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your Name"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-red-500"
            required
          />
          <input
            name="brand"
            value={form.brand}
            onChange={onChange}
            placeholder="Brand Name"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-red-500"
            required
          />
          <input
            name="contact"
            value={form.contact}
            onChange={onChange}
            placeholder="Email or Phone"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-red-500"
            required
          />
          <button type="submit" className="md:col-span-3 inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-red-500">
            Let’s build your next growth story
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="text-lg font-semibold">Thanks! Your audit request is in.</div>
          <p className="mt-1 text-white/70">Ramthilak will reach out shortly to schedule your free growth audit.</p>
        </div>
      )}
    </div>
  );
}

function GrowthProof() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Results that compound</h2>
          <p className="text-white/80">Execution meets strategy. Here are snapshots of what brands achieved with Ramthilak as their hands‑on growth partner.</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat value="3x" label="ROAS improvement" />
            <Stat value="500%" label="Engagement growth" />
            <Stat value="40%" label="Lower CAC" />
            <Stat value="+120%" label="Checkout conversion" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Testimonial
              quote="We cut CAC by 38% while scaling spend. The creative testing cadence alone paid for the engagement."
              author="VP Growth, D2C Wellness"
              role="Shopify Plus"
            />
            <Testimonial
              quote="From offer to video scripts to media buying — finally a partner who executes end‑to‑end."
              author="Founder"
              role="Consumer Electronics"
            />
          </div>
        </div>
        <div className="space-y-6">
          <LeadForm />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">SEO Focus</h3>
            <p className="mt-2 text-sm text-white/70">Performance Marketing Expert · D2C Growth Partner · Digital Marketing Freelancer in India · Brand Storytelling Agency · Lead Generation for Startups</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthProof;
