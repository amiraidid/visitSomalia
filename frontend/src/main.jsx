import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CityProvider } from "./context/CityData.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <CityProvider>
          <App />
        </CityProvider>
    </Router>
  </React.StrictMode>
);
