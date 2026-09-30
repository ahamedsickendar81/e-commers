export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  tag: string;
};

const productCatalog: Record<
  string,
  Array<{
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    image: string;
    tag: string;
  }>
> = {
  Audio: [
    {
      name: "Aero Wireless Headphones",
      price: 129,
      oldPrice: 179,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Pulse Bass Pro",
      price: 149,
      oldPrice: 199,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "Echo Mini Speaker",
      price: 89,
      oldPrice: 119,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
    {
      name: "Studio Beam",
      price: 189,
      oldPrice: 249,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
    {
      name: "Silverline ANC",
      price: 219,
      oldPrice: 299,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
  ],
  Camera: [
    {
      name: "PixelPro Camera",
      price: 649,
      oldPrice: 899,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Drift Lens Kit",
      price: 329,
      oldPrice: 429,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
    {
      name: "Luma One X",
      price: 799,
      oldPrice: 999,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "Summit DSLR",
      price: 1099,
      oldPrice: 1399,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "NightFrame Pro",
      price: 459,
      oldPrice: 599,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
  ],
  Shoes: [
    {
      name: "Swift Run X1",
      price: 119,
      oldPrice: 159,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
    {
      name: "TrailFlex Runner",
      price: 139,
      oldPrice: 189,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Urban Glide",
      price: 99,
      oldPrice: 139,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "Summit Edge",
      price: 169,
      oldPrice: 219,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
    {
      name: "Nova Step",
      price: 129,
      oldPrice: 169,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
  ],
  Gaming: [
    {
      name: "Vision X VR",
      price: 499,
      oldPrice: 649,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Arena Console",
      price: 699,
      oldPrice: 899,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "CloudStrike Pad",
      price: 79,
      oldPrice: 109,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "Orbit VR Kit",
      price: 549,
      oldPrice: 749,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
    {
      name: "Quest Drift",
      price: 399,
      oldPrice: 529,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
  ],
  Wearables: [
    {
      name: "Nova Smart Watch",
      price: 249,
      oldPrice: 329,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
    {
      name: "Pulse Fit Band",
      price: 89,
      oldPrice: 129,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "Halo Smart Ring",
      price: 149,
      oldPrice: 199,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Atlas Health Watch",
      price: 279,
      oldPrice: 369,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "Orbit Smart Glass",
      price: 199,
      oldPrice: 259,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1577803947579-9f6d0e6c9b2a?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
  ],
  Home: [
    {
      name: "Breeze Smart Fan",
      price: 109,
      oldPrice: 149,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
    {
      name: "Orbit Lamp",
      price: 79,
      oldPrice: 109,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "Glow Sound Bar",
      price: 169,
      oldPrice: 219,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1543512214-1265f0db7d2f?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "AirNest Purifier",
      price: 139,
      oldPrice: 179,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "Aura Speaker",
      price: 129,
      oldPrice: 169,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
  ],
  Office: [
    {
      name: "FlexDesk Lamp",
      price: 69,
      oldPrice: 99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "Motive Keyboard",
      price: 119,
      oldPrice: 159,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Vista Monitor",
      price: 329,
      oldPrice: 449,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
    {
      name: "Draft Ergonomic Chair",
      price: 389,
      oldPrice: 509,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "Pilot Dock",
      price: 99,
      oldPrice: 129,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
  ],
  Wellness: [
    {
      name: "Zen Massager",
      price: 89,
      oldPrice: 119,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      tag: "New",
    },
    {
      name: "CoreFit Mat",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller",
    },
    {
      name: "Hydra Bottle",
      price: 39,
      oldPrice: 59,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
      tag: "Trending",
    },
    {
      name: "Sole Recovery Roller",
      price: 49,
      oldPrice: 69,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
      tag: "Hot",
    },
    {
      name: "Calm Sleep Mask",
      price: 35,
      oldPrice: 49,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
      tag: "Top Rated",
    },
  ],
};

const categoryOrder = Object.keys(productCatalog) as Array<
  keyof typeof productCatalog
>;

export const categories = ["All", ...categoryOrder];

export const products: Product[] = categoryOrder.flatMap((category) =>
  productCatalog[category].map((product, index) => ({
    id:
      categoryOrder
        .slice(0, categoryOrder.indexOf(category))
        .reduce((count, current) => count + productCatalog[current].length, 0) +
      index +
      1,
    name: product.name,
    category,
    price: product.price,
    oldPrice: product.oldPrice,
    rating: product.rating,
    image: product.image,
    tag: product.tag,
  })),
);
