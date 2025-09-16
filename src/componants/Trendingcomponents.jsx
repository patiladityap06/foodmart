import React, { useState } from "react";
import "./Trendingcomponent.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./Cartslice";
import ProductCard from "./ProductCard";
import productsData from "../data/productsData"; // 👈 imported here

export default function Trendingcomponents() {
  const dispatch = useDispatch();

  const [itemCounts, setItemCounts] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleIncrement = (id) => {
    setItemCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setItemCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] - 1),
    }));
  };

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="Trndmain">
        <h3>Trending Products</h3>
        <ul className="nav justify-content-end">
          {["All", "Fruits & Veges", "Juices"].map((cat) => (
            <li className="nav-item" key={cat}>
              <a
                className="nav-link"
                href="#"
                style={{ color: "grey" }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(cat);
                }}
              >
                {cat.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="trndcard">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            count={itemCounts[product.id]}
            onIncrement={() => handleIncrement(product.id)}
            onDecrement={() => handleDecrement(product.id)}
            onAddToCart={() =>
              dispatch(addToCart({ product, count: itemCounts[product.id] }))
            }
          />
        ))}
      </div>
    </>
  );
}
