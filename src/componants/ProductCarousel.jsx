// src/components/ProductCarousel.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
// import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
export default function ProductCarousel({ products, onAddToCart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // console.log("Product Carsole data", products);
  
  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, products.length - visibleCards)
    );
  };

  return (
    <div>
    {/* Arrows Below Heading (Right Side) */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            background: "#f5f5f5",
            border: "none",
            borderRadius: "8px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          <MdArrowBackIosNew />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= products.length - visibleCards}
          style={{
            background: "#f5f5f5",
            border: "none",
            borderRadius: "8px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          <GrNext />
        </button>
      </div>
      {/* Carousel Container */}
      <div
        className="carousel-wrapper"
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          className="carousel-track"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 18}rem)`,
            transition: "transform 0.5s ease",
          }}
        >
          {products.map((product) => (
            <div key={product.id} style={{ margin: "0 10px" }}>
              <ProductCard
                product={product}
                count={0}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onAddToCart={() => onAddToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
