import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
export default function NavbarComponent() 
{
  const [dropdownItems, setDropdownItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const categoryData = [
      { label: "All Categories" },
      { label: "Groceries" },
      { label: "Drinks" },
      { label: "Chocolates" },
    ];
    setDropdownItems(categoryData);
  }, []);

  const handleSelect = (label) => {
    setSelectedCategory(label);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-2 position-relative">
        <div className="container-fluid">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="../images/logo.png" alt="Example Image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-3 " id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li
                className="nav-item dropdown d-flex"
                style={{
                  marginLeft: "115px",
                  backgroundColor: "#ececec59",
                  borderRadius: "15px",
                  border: "none",
                  padding: 5,
                }}
              >
                <a
                  className="nav-link dropdown-toggle mx-4 add"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" style={{color: "gray",border:"none !important"}}
                >
                  {selectedCategory}
                </a>

                <ul className="dropdown-menu">
                  {dropdownItems.map((item) => (
                    <li key={item.id}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleSelect(item.label)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
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
                    top: "25%",
                    pointerEvents: "none",
                    color: "#888",
                    paddingRight: "5",
                  }}
                  size={35}
                />
              </li>
            </ul>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ display: "flex", alignItems: "center", gap: "30px" }}
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
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    Your Cart
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  ></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr style={{ color: "lightgray" }} />
    </>
  );
}
