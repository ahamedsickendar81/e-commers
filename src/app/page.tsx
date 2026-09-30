"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DealTicker from "@/components/DealTicker";
import ProductGrid from "@/components/ProductGrid";
import TrendingSection from "@/components/TrendingSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import { categories, products, type Product } from "@/data/products";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {showSplash ? (
        <div className="splash-screen">
          <div className="splash-logo-wrap">
            <div className="splash-logo">L</div>
            <div className="splash-title">LumaCart</div>
          </div>
        </div>
      ) : (
        <main>
          <Navbar cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
          <Hero />
          <DealTicker />

          <section className="container py-10">
            <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setVisibleCount(12);
                    }}
                    className={
                      activeCategory === category
                        ? "rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-200"
                        : "rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>

              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search products"
                className="w-full max-w-xs rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-indigo-300 md:w-auto"
              />
            </div>
          </section>

          <ProductGrid
            products={filteredProducts.slice(0, visibleCount)}
            hasMore={visibleCount < filteredProducts.length}
            onLoadMore={() => setVisibleCount((count) => count + 12)}
            onAddToCart={(product) => setCartItems((items) => [...items, product])}
          />
          <ProductShowcase />
          <TrendingSection products={filteredProducts.slice(0, 4)} onAddToCart={(product) => setCartItems((items) => [...items, product])} />
          <Footer />
          {isCartOpen && (
            <CartDrawer
              items={cartItems}
              onClose={() => setIsCartOpen(false)}
              onRemove={(productId) => {
                const itemIndex = cartItems.findIndex((item) => item.id === productId);
                if (itemIndex !== -1) {
                  setCartItems((items) => items.filter((_, index) => index !== itemIndex));
                }
              }}
              onCheckout={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            />
          )}
          {isCheckoutOpen && (
            <CheckoutModal
              onClose={() => setIsCheckoutOpen(false)}
              onComplete={() => {
                setCartItems([]);
                setIsCheckoutOpen(false);
              }}
            />
          )}
        </main>
      )}
    </>
  );
}
