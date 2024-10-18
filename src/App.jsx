import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import CategorySearch from './CategorySearch';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/category1" element={<CategorySearch category="Genetics" />} />
        <Route path="/search/category2" element={<CategorySearch category="Plant Breeding" />} />
        <Route path="/search/category3" element={<CategorySearch category="Cytogenetics" />} />
      </Routes>
    </Router>
  );
}

export default App;
