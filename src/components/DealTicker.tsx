const deals = ["Free shipping over $75", "New arrivals weekly", "Member pricing on premium tech", "Secure checkout"];

export default function DealTicker() {
  return (
    <section id="deals" className="border-y border-slate-200 bg-slate-900 text-slate-100">
      <div className="container flex flex-wrap items-center justify-center gap-4 py-3 text-sm font-medium md:justify-between">
        {deals.map((deal) => (
          <span key={deal} className="inline-flex items-center gap-2 text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {deal}
          </span>
        ))}
      </div>
    </section>
  );
}
