import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
export default function NavbarComponent() {
  // Simulating fetching dropdown data
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    // Replace this with a fetch() call if you're getting data from an API
    const categoryData = [
      { id: 1, label: 'Groceries' },
      { id: 2, label: 'Drinks' },
      { id: 3, label: 'Chocolates' },
    ];

    setDropdownItems(categoryData);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-2 position-relative">
        <div className="container-fluid">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="../images/logo.png" alt="Example Image" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-3 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown d-flex top-0 start-50 translate-middle-x">
                <a className="nav-link dropdown-toggle mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories
                </a>
                <ul className="dropdown-menu">
                  {dropdownItems.map((item) =>
                    item.label === 'divider' ? (
                      <li key={item.id}><hr className="dropdown-divider" /></li>
                    ) : (
                      <li key={item.id}>
                        <a className="dropdown-item" href="#">{item.label}</a>
                      </li>
                    )
                  )}
                </ul>
                <form className="d-flex" role="search">
              <input className="form-control w100" type="search" style={{ width: '300px' }} placeholder="Search for more than 20,000 products" aria-label="Search" />
                  <button type="button" class="btn btn-light"><CiSearch /></button>
            </form>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
