const navItems = [
  ["Shop", "products"],
  ["New In", "trending"],
  ["Deals", "deals"],
  ["Sale", "deals"],
  ["Support", "footer"],
];

type NavbarProps = {
  cartCount: number;
  onOpenCart: () => void;
};

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-lg font-bold text-white shadow-lg shadow-indigo-200">
            L
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900">LumaCart</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map(([item, target]) => (
            <a key={item} href={`#${target}`} className="transition hover:text-indigo-600">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onOpenCart} className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500">
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}
