// =========================================================
// * Volt Router Edition (Modified from Volt React Dashboard)
// =========================================================

// * Original Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Modified by MdFarzan
// * Repository: https://github.com/[your-github]/volt-router-edition
// * License: MIT License (https://themesberg.com/licensing)

// * Original design and code by Themesberg, modified to use React Router instead of HashRouter

// =========================================================

import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; // Correct import
import { BrowserRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <HomePage />
  </BrowserRouter>
);

/* ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <HomePage />
  </BrowserRouter>,
  document.getElementById("root")
); */
