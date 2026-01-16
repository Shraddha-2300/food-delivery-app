import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CategoryProvider from "./context/CategoryContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </BrowserRouter>
);
