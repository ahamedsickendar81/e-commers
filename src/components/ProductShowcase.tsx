export default function ProductShowcase() {
  return (
    <section className="container py-8">
      <div className="grid gap-6 rounded-[30px] bg-slate-900 p-8 text-white md:grid-cols-[1fr_1fr] md:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">Smart living</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Upgrade your everyday setup</h2>
          <p className="mt-4 max-w-lg text-slate-300">
            Designed to keep you productive, active, and connected with premium essentials that fit into modern life.
          </p>
          <a href="#products" className="mt-6 w-fit rounded-full bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-400">
            Shop essentials
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] bg-white/10 p-5">
            <div className="text-sm text-indigo-200">Sound</div>
            <div className="mt-4 text-3xl font-black">Studio Pro</div>
            <div className="mt-2 text-sm text-slate-300">Immersive audio</div>
          </div>
          <div className="rounded-[24px] bg-white/10 p-5">
            <div className="text-sm text-indigo-200">Health</div>
            <div className="mt-4 text-3xl font-black">Pulse Max</div>
            <div className="mt-2 text-sm text-slate-300">Track your goals</div>
          </div>
          <div className="rounded-[24px] bg-white/10 p-5 sm:col-span-2">
            <div className="text-sm text-indigo-200">Mobility</div>
            <div className="mt-4 text-3xl font-black">Move Free</div>
            <div className="mt-2 text-sm text-slate-300">Performance accessories built for everyday life</div>
          </div>
        </div>
      </div>
    </section>
  );
}
