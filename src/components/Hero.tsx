export default function Hero() {
  return (
    <section className="container py-12 md:py-20">
      <div className="grid items-center gap-8 rounded-[32px] bg-gradient-to-br from-indigo-800 via-violet-700 to-indigo-600 p-8 text-white shadow-[0_30px_80px_rgba(79,70,229,0.35)] md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
            New season drop
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Shop smarter. <span className="text-indigo-200">Live brighter.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-indigo-100 md:text-lg">
            Discover premium gadgets, everyday essentials, and wellness upgrades for a more elevated life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50">
              Shop now
            </a>
            <a href="#deals" className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Explore deals
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-indigo-100">
            <div>
              <div className="text-2xl font-black text-white">12k+</div>
              <div>happy shoppers</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">4.9/5</div>
              <div>average rating</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">2-day</div>
              <div>delivery</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[28px] bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[24px] bg-gradient-to-br from-white via-indigo-50 to-violet-100 p-5 text-slate-900">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">-34%</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">limited</span>
              </div>
              <div className="mt-6 rounded-[22px] bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-800 p-6 text-white">
                <div className="flex items-center justify-between text-sm text-indigo-100">
                  <span>Smart Audio</span>
                  <span>01</span>
                </div>
                <div className="mt-10 text-5xl font-black">Aero</div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-indigo-200">from</div>
                    <div className="mt-1 text-3xl font-black">$129</div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold">New</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
