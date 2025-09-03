import React, { useState } from "react";
import "./Trendingcomponent.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Trendingcomponents() {
  // JSON array with multiple products
  const productsData = [
    {
      id: 1,
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
      image: "./thumb-bananas.png",
      discount: "30%",
    },
    {
      id: 2,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-biscuits.png",
      discount: "20%",
    },
    {
      id: 3,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-cucumber.png",
      discount: "20%",
    },
    {
      id: 4,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-milk.png",
      discount: "20%",
    },
    {
      id: 5,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-bananas.png",
      discount: "20%",
    },
    {
      id: 6,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-cucumber.png",
      discount: "20%",
    },
    {
      id: 7,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-milk.png",
      discount: "20%",
    },
    {
      id: 8,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-bananas.png",
      discount: "20%",
    },
    {
      id: 9,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-biscuits.png",
      discount: "20%",
    },
    {
      id: 10,
      title: "Organic Red Apples",
      unit: "1 KG",
      rating: 4.7,
      price: 12.5,
      image: "./thumb-biscuits.png",
      discount: "20%",
    },
  ];

  const [itemCounts, setItemCounts] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setItemCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setItemCounts((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  return (
    <>
      <div className="Trndmain">
        <h3>Trending Products</h3>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{ color: "grey" }}
            >
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "grey" }}>
              FRUITS & VEGES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "grey" }}>
              JUICES
            </a>
          </li>
        </ul>
      </div>

      {/* Render all product cards */}
      <div className="trndcard">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="card rounded-4 shadow border-0 mb-3"
            style={{ width: "18rem" }}
          >
            <div className="parent">
              <img
                src={product.image}
               
                alt={product.title}
              />

              <div className="discount">
                <span>-{product.discount}</span>
              </div>
              <div className="like">
                <FaRegHeart />
              </div>
            </div>

            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="list-group-item">
                {product.unit} <FaStar style={{ color: "gold" }} />{" "}
                <span>{product.rating}</span>
              </p>
              <p className="list-group-item">${product.price.toFixed(2)}</p>

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
                    padding: 0,
                    cursor: "pointer",
                    fontSize: "1rem",
                    marginLeft: "70px",
                  }}
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
