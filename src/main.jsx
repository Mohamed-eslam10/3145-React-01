import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import { Provider } from "react-redux";

import store from './lib/redux';

// CSS
import "./style.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider >
);
