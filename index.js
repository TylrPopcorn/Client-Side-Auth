import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
//import "./styles/reset.css";
import "./styles/styles.css";
import App from "./components/App";

/**
 * Dependencies:
 *
 * npm install react
 * npm install parcel-bundler
 * npm install react-router-dom
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
