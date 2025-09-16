// src/componants/NavbarComponent.jsx
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectTotalAmount } from "./Cartslice";

export default function NavbarComponent() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-2 position-relative">
        <div className="container-fluid">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="../images/logo.png" alt="Logo" />
          </a>
          <div className="collapse navbar-collapse ml-3">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex" style={{position:"relative",left:"223px" }}>
                <div className="input-group" style={{ width: "330px" }}>
                  <input
                    className="form-control"
                    style={{ backgroundColor: "transparent", border: "none" }}
                    type="search"
                    placeholder="Search for more than 20,000 products"
                    aria-label="Search"
                  />
                </div>
                <CiSearch
                  style={{
                    alignItems: "center",
                    marginLeft: "10px",
                    color: "#888",
                  }}
                  size={30}
                />
              </li>
            </ul>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ gap: "30px" }}
            >
              <div className="support" style={{ marginRight: "20px" }}>
                <p>For Support?</p>
                <h4>+980-34984089</h4>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ gap: "30px", marginRight: "30px" }}
              >
                <LuUserRound size={24} />
                <FaRegHeart size={24} />
                <div className="dropdown">
                  <button
                    className="btn"
                    onClick={() => setIsCartOpen(true)}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    Your Cart ({cartItems.length})
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr style={{ color: "lightgray" }} />

      {/* ✅ Sidebar (Cart) */}
      {isCartOpen && (
        <>
          <div
            className="cart-sidebar"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "350px",
              height: "100%",
              backgroundColor: "#fff",
              boxShadow: "-2px 0px 10px rgba(0,0,0,0.2)",
              padding: "20px",
              zIndex: 1050,
              overflowY: "auto",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                float: "right",
                cursor: "pointer",
              }}
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
            <h3>Your Cart</h3>

            {cartItems.length === 0 ? (
              <p>No items yet.</p>
            ) : (
              <>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <div>
                        <strong>{item.title}</strong> <br />
                        Qty: {item.quantity} × ${item.price.toFixed(2)}
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        style={{
                          border: "none",
                          background: "none",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <h4>Total: ${totalAmount.toFixed(2)}</h4>
              </>
            )}
          </div>

          {/* ✅ Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 1040,
            }}
          ></div>
        </>
      )}
    </>
  );
}
