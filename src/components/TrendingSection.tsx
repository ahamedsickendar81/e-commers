import type { Product } from "@/data/products";
import Image from "next/image";

type TrendingSectionProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default function TrendingSection({ products, onAddToCart }: TrendingSectionProps) {
  return (
    <section id="trending" className="container py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Trending</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Fresh picks this week</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="rounded-[24px] bg-slate-100 p-3">
              <Image src={product.image} alt={product.name} width={900} height={600} unoptimized className="h-48 w-full rounded-[18px] object-cover" />
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{product.category}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                <button onClick={() => onAddToCart(product)} className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-bold text-white">Buy now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
