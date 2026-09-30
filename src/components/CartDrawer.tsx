"use client";

import Image from "next/image";
import type { Product } from "@/data/products";

type CartDrawerProps = {
  items: Product[];
  onClose: () => void;
  onRemove: (productId: number) => void;
  onCheckout: () => void;
};

export default function CartDrawer({ items, onClose, onRemove, onCheckout }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/45" onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Your bag</p>
            <h2 className="mt-1 text-2xl font-black text-slate-900">Cart ({items.length})</h2>
          </div>
          <button onClick={onClose} aria-label="Close cart" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-xl text-slate-600 hover:bg-slate-50">×</button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="text-lg font-bold text-slate-900">Your cart is empty</p>
                <p className="mt-2 text-sm text-slate-500">Add something you love and it will appear here.</p>
              </div>
            </div>
          ) : items.map((item, index) => (
            <article key={`${item.id}-${index}`} className="flex gap-4 border-b border-slate-100 pb-4">
              <Image src={item.image} alt="" width={96} height={96} unoptimized className="h-24 w-24 rounded-xl bg-slate-100 object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.category}</p>
                <h3 className="mt-1 truncate font-bold text-slate-900">{item.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-black text-slate-900">${item.price.toFixed(2)}</span>
                  <button onClick={() => onRemove(item.id)} className="text-sm font-semibold text-rose-600 hover:text-rose-700">Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between text-lg font-bold text-slate-900">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Shipping and taxes are calculated at checkout.</p>
          <button onClick={onCheckout} disabled={items.length === 0} className="mt-5 w-full rounded-full bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300">
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  );
}