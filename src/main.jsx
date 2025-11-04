import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

// CSS
import "./style.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
