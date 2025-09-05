// src/componants/Trendingcomponents.jsx
import React, { useState } from "react";
import "./Trendingcomponent.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "./Cartslice";

export default function Trendingcomponents() {
  const dispatch = useDispatch();

  const productsData = [
    {
      id: 1,
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
      image: "./thumb-bananas.png",
      discount: "30%",
      category: "Fruits & Veges",
    },
    {
      id: 2,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-biscuits.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
    {
      id: 3,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-cucumber.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
    {
      id: 4,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-milk.png",
      discount: "20%",
      category: "Juices",
    },
    {
      id: 5,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-bananas.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
    {
      id: 6,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-cucumber.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
    {
      id: 7,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-milk.png",
      discount: "20%",
      category: "Juices",
    },
    {
      id: 8,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-bananas.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
    {
      id: 9,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-biscuits.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
    {
      id: 10,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-biscuits.png",
      discount: "20%",
      category: "Fruits & Veges",
    },
  ];

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
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              style={{ color: "grey" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory("All");
              }}
            >
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              style={{ color: "grey" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory("Fruits & Veges");
              }}
            >
              FRUITS & VEGES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              style={{ color: "grey" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory("Juices");
              }}
            >
              JUICES
            </a>
          </li>
        </ul>
      </div>

      <div className="trndcard">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
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
              <p>${product.price.toFixed(2)}</p>

              <div className="addtocart">
                <button
                  onClick={() => handleDecrement(product.id)}
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
                <span style={{ margin: "0 12px" }}>
                  {itemCounts[product.id]}
                </span>
                <button
                  onClick={() => handleIncrement(product.id)}
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
                  onClick={() =>
                    dispatch(addToCart({ product, count: itemCounts[product.id] }))
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}
