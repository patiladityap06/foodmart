import React from "react";
import "./Home.css";

import { FaArrowRight } from "react-icons/fa";

export default function HomeComponent() {
  return (
    <>
      <div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "20px",
            }}
          >
            Shop by Departments
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Shop by Departments
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Groceries
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Drinks
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Chocolates
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Women
          </button>
          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Men
          </button>
          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Kids
          </button>
          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Accessories
          </button>

          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pages
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li>
              <a className="dropdown-item" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Single Product
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cart
              </a>
            </li>
            <li onClick={()=>console.log("Hello")}>
              <a className="dropdown-item" href="#">
                Checkout
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Single Post
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Styles
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Thank You
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                My Account
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                404 Error
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Brand
          </button>
          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Sale
          </button>
          <button
            type="button"
            className="btn btn-link"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Blog
          </button>
        </div>
        <div className="main">
          <div className="carousel">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <div className="font">
                    <p className="content">100% Natural</p>
                    <p id="title">
                      Fresh Smoothie <br />& Summer Juice
                    </p>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur asperiores, placeat necessitatibus aliquid.
                    </span>
                    <br />
                    <p class=" gap">
                      <button
                        type="button"
                        class="btn active"
                        data-bs-toggle="button"
                        aria-pressed="true"
                        style={{ width: "155px", height: "58px",marginTop: "40px"}}
                      >
                        Shop now
                      </button>
                    </p>
                  </div>

                  <div>
                    <img className="Bottle"
                      src="./product-thumb-1.png"
                      // class="d-block w-51"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className="font">
                    <p className="content">100% Natural</p>
                    <p id="title">
                      Fresh Smoothie <br />& Summer Juice
                    </p>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur asperiores, placeat necessitatibus aliquid.
                    </span>
                    <br />
                    <p class=" gap">
                      <button
                        type="button"
                        class="btn active"
                        data-bs-toggle="button"
                        aria-pressed="true"
                        style={{ width: "155px", height: "58px", marginTop: "40px"}}
                      >
                        Shop Collection
                      </button>
                    </p>
                  </div>
                  <div>
                    <img className="Bottle"
                      src="./product-thumb-1.png"
                      // class="d-block w-51"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="font">
                    <p className="content">100% Natural</p>
                    <p id="title">
                      Fresh Smoothie <br />& Summer Juice
                    </p>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur asperiores, placeat necessitatibus aliquid.
                    </span>
                    <br />
                    <p class=" gap">
                      <button
                        type="button"
                        class="btn active"
                        data-bs-toggle="button"
                        aria-pressed="true"
                        style={{ width: "155px", height: "58px" , marginTop: "40px"}}
                      >
                        Shop Collection
                      </button>
                    </p>
                  </div>
                  <div>
                    <img className="Bottle"
                      src="./product-thumb-2.png"
                      // class="d-block w-51"
                      alt="..."
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="main2">
            <div className="cardss">
              <div className="subheading">
                <p>
                  20% Off
                  <br />
                </p>
                <span>_____S A L E</span>
                <p>
                  Fruits&
                  <br />
                  Vegetables
                </p>
                <a>
                  Shop for collection <FaArrowRight />
                </a>
              </div>
              <div className="img">
                <img src="./ad-image-1.png" class="d-block w-100" alt="..." />
              </div>
            </div>

            <div className="abs">
              <div className="cardss" style={{ backgroundColor: "#ffe7df" }}>
                <div className="subheading">
                  <p>
                    15% Off
                    <br />
                  </p>
                  <span>_____S A L E</span>
                  <p>Baked Products</p>
                  <a>
                    Shop for collection <FaArrowRight />
                  </a>
                </div>
                <div className="img">
                  <img src="./ad-image-2.png" class="d-block w-200" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
