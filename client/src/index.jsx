import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Store from "./Redux/store"

// Packages
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
