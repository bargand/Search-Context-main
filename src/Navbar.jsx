import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded

const Navbar = () => {
  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top px-2">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Bargand
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          ref={offcanvasRef}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Debargha
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={closeOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                  aria-current="page"
                  to="/search/category1"
                  onClick={closeOffcanvas}
                >
                  Genetics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                  aria-current="page"
                  to="/search/category2"
                  onClick={closeOffcanvas}
                >
                  Plant Breeding
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                  aria-current="page"
                  to="/search/category3"
                  onClick={closeOffcanvas}
                >
                  Cytogenetics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
