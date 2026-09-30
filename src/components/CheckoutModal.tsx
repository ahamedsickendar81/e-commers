"use client";

import { useState, type FormEvent } from "react";

type CheckoutModalProps = {
  onClose: () => void;
  onComplete: () => void;
};

export default function CheckoutModal({ onClose, onComplete }: CheckoutModalProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOrderPlaced(true);
  }

  return (
    <div className="fixed inset-0 z-[110] grid place-items-center bg-slate-950/55 p-4" onClick={onClose}>
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Checkout"
        className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {orderPlaced ? (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl font-black text-emerald-700">✓</div>
            <h2 className="mt-5 text-2xl font-black text-slate-900">Order confirmed</h2>
            <p className="mt-2 text-sm text-slate-600">Thanks for shopping with LumaCart. Your order is ready for processing.</p>
            <button onClick={onComplete} className="mt-7 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-500">Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Secure checkout</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">Delivery details</h2>
              </div>
              <button onClick={onClose} aria-label="Close checkout" className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-xl text-slate-600 hover:bg-slate-50">×</button>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm font-semibold text-slate-700">
                Full name
                <input required autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500" />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Email address
                <input required type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500" />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Delivery address
                <input required autoComplete="street-address" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500" />
              </label>
              <button type="submit" className="w-full rounded-full bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-500">Place order</button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}