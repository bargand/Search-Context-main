import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <h1>Search Categories</h1>
      <div className="cards-container">
        <div className="card">
          <h3>Search Genetics Contents</h3>
          <Link to="/search/category1">
            <button>Search</button>
          </Link>
        </div>

        <div className="card">
          <h3>Search Plant Breeding Contents</h3>
          <Link to="/search/category2">
            <button>Search</button>
          </Link>
        </div>

        <div className="card">
          <h3>Search Cytogenetics Contents</h3>
          <Link to="/search/category3">
            <button>Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
