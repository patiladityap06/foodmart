import React, { useRef } from "react";

import ProductCarousel from "./ProductCarousel";

export default function BestSellingProducts(props) {
  const carouselRef = useRef();


  console.log("Bestselling props data", props.data);
  

  const handleAddToCart = (pdt) => {
    alert(`Added ${pdt.title} to cart`);
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      {/* 🔹 Header Section */}
      <div
        className="best-selling-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ fontWeight: "600" }}>{props.data.title}</h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "grey",
              fontWeight: "500",
            }}
          >
            View All Categories →
          </a>
        </div>
      </div>

      {/* 🔹 Product Carousel */}
      <ProductCarousel products={props.data.data} onAddToCart={handleAddToCart} />
    </div>
  );
}
