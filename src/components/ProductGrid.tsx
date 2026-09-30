import type { Product } from "@/data/products";
import Image from "next/image";

type ProductGridProps = {
  products: Product[];
  hasMore: boolean;
  onLoadMore: () => void;
  onAddToCart: (product: Product) => void;
};

export default function ProductGrid({ products, hasMore, onLoadMore, onAddToCart }: ProductGridProps) {
  return (
    <section id="products" className="container py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Featured</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Hot deals for today</h2>
        </div>
        <span className="text-sm font-medium text-slate-500">{products.length} shown</span>
      </div>

      {products.length > 0 ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative overflow-hidden bg-slate-100 p-4">
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 shadow-sm">
                {product.tag}
              </div>
              <Image src={product.image} alt={product.name} width={900} height={600} unoptimized className="h-56 w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>{product.category}</span>
                <span>★ {product.rating}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                <span className="text-sm text-slate-400 line-through">${product.oldPrice?.toFixed(2)}</span>
              </div>
              <button onClick={() => onAddToCart(product)} className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div> : <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">No products match your search.</p>}

      {hasMore && (
        <div className="mt-10 text-center">
          <button onClick={onLoadMore} className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-indigo-300 hover:text-indigo-700">
            Load more products
          </button>
        </div>
      )}
    </section>
  );
}
