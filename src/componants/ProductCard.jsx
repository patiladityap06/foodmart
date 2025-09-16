// src/components/ProductCard.jsx
import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product, count, onIncrement, onDecrement, onAddToCart }) {
  // console.log("Product Card data", product);
  
  return (
    <div
      className="card rounded-4 shadow border-0 mb-3"
      style={{ width: "18rem" }}
    >
      <div className="parent">
        <img src={product.image} alt={product.title} />
        <div className="discount">
          <span>-{product.discount}</span>
        </div>
        <div className="like">
          <FaRegHeart />
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          {product.unit} <FaStar style={{ color: "gold" }} />{" "}
          <span>{product.rating}</span>
        </p>
        <p>${Number(product.price).toFixed(2)}</p>


        <div className="addtocart">
          <button
            onClick={onDecrement}
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "20%",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            -
          </button>
          <span style={{ margin: "0 12px" }}>{count}</span>
          <button
            onClick={onIncrement}
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "20%",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            +
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              color: "grey",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
