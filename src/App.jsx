import React from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header';
import Section1 from './component/Section1/Section1';
import Section2 from './component/Section2/Section2';
import Section3 from './component/Section3/Section3';
import Footer from './component/Footer/Footer';
import Form from './component/Form/Form'
import Todo from './component/To-Do/To-Do';
// import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar'
import NotFound from './component/NotFound/NotFound'
import Products from './component/Products/Products'
import ProductDetails from './component/Products/ProductDetails'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './component/Favourites/Favourites';
import { store } from './store/store';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { useTheme } from './Context/ThemeContext';
import SearchResults from './component/SearchResults/SearchResults';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/details/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Form />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </BrowserRouter>

        </Provider>
      </div>
    </>
  )
}

export default App;








