"use client";

import { useEffect, useRef, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useCart } from "@/lib/cart";

export default function CartButton() {
  const { state, totalItems, openCart } = useCart();
  const previousTotal = useRef(totalItems);
  const [isBadgeBouncing, setIsBadgeBouncing] = useState(false);

  useEffect(() => {
    const wasItemAdded = totalItems > previousTotal.current;
    previousTotal.current = totalItems;

    if (!wasItemAdded) return;

    setIsBadgeBouncing(false);
    const animationFrame = requestAnimationFrame(() => setIsBadgeBouncing(true));
    const timeout = window.setTimeout(() => setIsBadgeBouncing(false), 450);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeout);
    };
  }, [totalItems]);

  return (
    <button
      type="button"
      onClick={openCart}
      className="cart-fab"
      aria-label="Abrir pedido por WhatsApp"
      aria-haspopup="dialog"
      aria-controls="cart-sheet"
      aria-expanded={state.isCartOpen}
      id="floating-cart-btn"
    >
      <WhatsAppIcon className="cart-fab-icon" />

      {totalItems > 0 && (
        <span
          className={`cart-fab-badge${isBadgeBouncing ? " is-bouncing" : ""}`}
          aria-hidden="true"
        >
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  );
}
