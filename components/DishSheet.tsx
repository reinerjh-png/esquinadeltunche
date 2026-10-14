"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Dish } from "@/data/menu";
import DishImage from "./DishImage";
import { formatPrice, CartItemOption } from "@/lib/whatsapp";
import { useCart } from "@/lib/cart";

type DishSheetProps = {
  dish: Dish | null;
  categoryId?: string;
  onClose: () => void;
};

export default function DishSheet({ dish, categoryId, onClose }: DishSheetProps) {
  const { addItem, showToast } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState(dish?.variants?.[0]?.id ?? "");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>(() => {
    const defaults: Record<string, string[]> = {};
    dish?.options?.forEach((option) => { defaults[option.id] = []; });
    return defaults;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sheetRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (dish) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [dish]);

  if (!dish) return null;

  const hasOptions = Boolean(dish.options?.length);
  const selectedVariant = dish.variants?.find((variant) => variant.id === selectedVariantId);
  const unitPrice = selectedVariant?.price ?? dish.price;

  const toggleChoice = (optionId: string, choice: string, max: number) => {
    setSelectedOptions((prev) => {
      const current = prev[optionId] || [];
      if (current.includes(choice)) {
        return { ...prev, [optionId]: current.filter((c) => c !== choice) };
      }
      if (max === 1) {
        return { ...prev, [optionId]: [choice] };
      }
      if (current.length >= max) return prev;
      return { ...prev, [optionId]: [...current, choice] };
    });
    setErrors((prev) => ({ ...prev, [optionId]: "" }));
  };

  const validate = (): boolean => {
    if (!hasOptions) return true;
    const newErrors: Record<string, string> = {};
    let valid = true;
    dish.options!.forEach((opt) => {
      const selected = selectedOptions[opt.id] || [];
      if (selected.length < opt.min) {
        newErrors[opt.id] = `Debes elegir ${opt.min === opt.max ? opt.min : `entre ${opt.min} y ${opt.max}`} opción${opt.min > 1 ? "es" : ""}`;
        valid = false;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const buildOptions = (): CartItemOption[] => {
    const options = (dish.options ?? []).map((opt) => ({
      optionId: opt.id,
      label: opt.label,
      choices: selectedOptions[opt.id] || [],
    }));

    if (selectedVariant) {
      options.unshift({
        optionId: "variant",
        label: "Opción",
        choices: [selectedVariant.name],
      });
    }

    return options;
  };

  const handleAdd = () => {
    if (!validate() || !unitPrice) return;
    const options = buildOptions();
    addItem({
      dishId: dish.id,
      name: dish.name,
      price: unitPrice,
      quantity,
      options,
      note,
    });
    showToast(`✓ Agregado: ${dish.name}`);
    onClose();
  };

  const totalPrice = unitPrice ? unitPrice * quantity : 0;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="bottom-sheet-overlay"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="bottom-sheet"
        style={{ maxHeight: "92dvh" }}
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle de ${dish.name}`}
      >
        <div className="bottom-sheet-handle" />

        <div className="bottom-sheet-body" style={{ maxHeight: "calc(92dvh - 20px)" }}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-tunche-surface-3 border border-tunche-border text-tunche-muted hover:text-tunche-cream transition-colors z-10"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>

          {/* Dish image */}
          {dish.image && (
            <div className="h-52 relative">
              <DishImage
                src={dish.image}
                alt={dish.name}
                fill
                className="absolute inset-0"
                type={categoryId as Parameters<typeof DishImage>[0]["type"]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tunche-surface via-transparent to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="px-5 pb-6 pt-4 flex flex-col gap-5">
            {/* Name + description */}
            <div>
              {dish.tags?.[0] && (
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className={`tag tag-${dish.tags[0]}`}>
                    {dish.tags[0] === "recomendado" ? "Favorito" :
                     dish.tags[0] === "picante" ? "Picante" :
                     dish.tags[0] === "amazonico" ? "Amazónico" :
                     dish.tags[0] === "marino" ? "Marino" : "Nuevo"}
                  </span>
                </div>
              )}
              <h2 className="font-display text-tunche-cream text-xl font-bold mb-2">{dish.name}</h2>
              {dish.description && (
                <p className="text-tunche-muted text-sm leading-relaxed">{dish.description}</p>
              )}
            </div>

            {/* Price-bearing variant */}
            {dish.variants?.length ? (
              <div>
                <label htmlFor="dish-variant" className="text-tunche-cream text-[15px] font-semibold block mb-2">
                  Elige una opción
                </label>
                <select
                  id="dish-variant"
                  value={selectedVariantId}
                  onChange={(event) => setSelectedVariantId(event.target.value)}
                  className="tunche-input"
                >
                  {dish.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.name} — {formatPrice(variant.price)}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {/* Options */}
            {dish.options?.map((opt) => (
              <div key={opt.id}>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-tunche-cream text-sm font-semibold">{opt.label}</label>
                  <span className="text-tunche-muted text-xs">
                    {opt.min === opt.max ? `Elige ${opt.min}` : `${opt.min}–${opt.max}`}
                    {opt.min > 0 ? " · Obligatorio" : " · Opcional"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {opt.choices.map((choice) => {
                    const selected = (selectedOptions[opt.id] || []).includes(choice);
                    return (
                      <button
                        key={choice}
                        onClick={() => toggleChoice(opt.id, choice, opt.max)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all min-h-[36px] ${
                          selected
                            ? "bg-tunche-gold text-tunche-dark border-tunche-gold"
                            : "bg-tunche-surface-2 text-tunche-cream border-tunche-border hover:border-tunche-gold/40"
                        }`}
                        aria-pressed={selected}
                        aria-label={`${choice}${selected ? ", seleccionado" : ""}`}
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>
                {errors[opt.id] && (
                  <p className="text-red-400 text-xs mt-1" role="alert">{errors[opt.id]}</p>
                )}
              </div>
            ))}

            {/* Note */}
            <div>
              <label htmlFor="dish-note" className="text-tunche-cream text-sm font-semibold block mb-2">
                Nota para cocina <span className="text-tunche-muted font-normal">(opcional)</span>
              </label>
              <textarea
                id="dish-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ej: sin ají, extra crocante…"
                className="tunche-input resize-none"
                rows={2}
                maxLength={200}
              />
            </div>

            {/* Quantity + Add button */}
            <div className="flex items-center gap-4">
              <div
                className="qty-stepper"
                aria-label="Cantidad"
              >
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Reducir cantidad"
                >
                  −
                </button>
                <span aria-live="polite">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="btn-gold flex-1 text-sm py-3"
                disabled={!unitPrice}
                id="dish-sheet-add-btn"
                aria-label={`Agregar ${quantity} ${dish.name} al pedido por ${formatPrice(totalPrice)}`}
              >
                Agregar · {unitPrice ? formatPrice(totalPrice) : "Sin precio"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
