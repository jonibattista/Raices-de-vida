import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then(resolve)
            .catch(() => resolve([]));
        }, 500);
      });
    fetchCategories().then(setCategories);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="40" /> Raices de vida
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categorías
              </span>
              <ul className="dropdown-menu">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      className="dropdown-item"
                      to={`/category/${cat.slug}`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <CartWidget count={0} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
