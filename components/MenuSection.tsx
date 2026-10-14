"use client";

import { Dish, Category } from "@/data/menu";
import DishCard from "./DishCard";

type MenuSectionProps = {
  category: Category;
  onDishClick: (dish: Dish) => void;
  sectionRef: (el: HTMLElement | null) => void;
};

export default function MenuSection({ category, onDishClick, sectionRef }: MenuSectionProps) {
  return (
    <section
      id={`section-${category.id}`}
      ref={sectionRef}
      aria-labelledby={`heading-${category.id}`}
      className="menu-category"
    >
      {/* Section header */}
      <header className="category-heading">
        <div className="category-heading-copy">
          <p className="category-eyebrow">Carta · {category.dishes.length} {category.dishes.length === 1 ? "plato" : "platos"}</p>
          <h2
            id={`heading-${category.id}`}
            className="category-title"
          >
            {category.name}
          </h2>
          <p className="category-subtitle">{category.subtitle}</p>
        </div>
        <span className="category-flourish" aria-hidden="true" />
      </header>

      {/* Dish cards */}
      <div className="dish-list">
        {category.dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            categoryId={category.id}
            onClick={() => onDishClick(dish)}
          />
        ))}
      </div>
    </section>
  );
}
