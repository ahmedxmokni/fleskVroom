import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  Products,
  Expert,
  AboutPage,
  ContactPage,
  Annonce,
  Estimation,
  Login,
  Service,
  Favoris,
  Register,
  Checkout,
  PageNotFound,
  Dashboard, 
  Dashboardu,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/annonce" element={<Annonce />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/user/dashboard" element={<Dashboardu />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);