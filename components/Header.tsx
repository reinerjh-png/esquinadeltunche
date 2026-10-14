"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart";

type HeaderProps = {
  searchQuery: string;
  onSearch: (q: string) => void;
};

export default function Header({ searchQuery, onSearch }: HeaderProps) {
  const { totalItems, totalPrice, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,26,16,0.96)"
          : "linear-gradient(to bottom, rgba(10,26,16,0.98), rgba(10,26,16,0.85))",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--tunche-border)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Logo */}
        {!searchOpen && scrolled && (
          <div className="flex-shrink-0">
            <Image
              src="/img/logo.webp"
              alt="La Esquina del Tunche"
              width={40}
              height={40}
              className="rounded-full border border-tunche-gold/30 shadow-md"
              priority
            />
          </div>
        )}

        {/* Search bar */}
        {searchOpen ? (
          <div className="flex-1 flex items-center gap-2 bg-tunche-surface-2 border border-tunche-border rounded-full px-4 py-2">
            <Search size={16} className="text-tunche-muted flex-shrink-0" aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar platos..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-tunche-cream text-sm placeholder:text-tunche-muted"
              aria-label="Buscar platos en el menú"
              autoFocus
            />
            <button
              onClick={() => { onSearch(""); setSearchOpen(false); }}
              className="text-tunche-muted hover:text-tunche-cream transition-colors"
              aria-label="Cerrar buscador"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-tunche-muted font-semibold uppercase tracking-wider leading-none">La Esquina del</p>
              <h1 className="font-display text-tunche-gold text-base font-bold leading-tight truncate">Tunche</h1>
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-tunche-surface-2 border border-tunche-border text-tunche-muted hover:text-tunche-cream hover:border-tunche-gold/40 transition-all"
              aria-label="Abrir buscador"
            >
              <Search size={18} />
            </button>
          </>
        )}

        {/* Cart button */}
        <button
          onClick={openCart}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-tunche-surface-2 border border-tunche-border text-tunche-cream hover:border-tunche-gold/50 transition-all flex-shrink-0"
          aria-label={`Carrito con ${totalItems} productos, total S/ ${totalPrice.toFixed(2)}`}
          id="header-cart-btn"
        >
          <ShoppingBag size={18} />
          {totalItems > 0 && (
            <span
              className="badge absolute -top-1 -right-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
