export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-lg font-black text-white">
              L
            </div>
            <div className="text-xl font-black text-slate-900">LumaCart</div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Premium essentials for a smarter, happier lifestyle.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Shop</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="#trending">New arrivals</a></li>
            <li><a href="#products">Best sellers</a></li>
            <li><a href="#deals">Deals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Support</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="mailto:support@lumacart.example?subject=Shipping">Shipping</a></li>
            <li><a href="mailto:support@lumacart.example?subject=Returns">Returns</a></li>
            <li><a href="mailto:support@lumacart.example">Help center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Follow</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
