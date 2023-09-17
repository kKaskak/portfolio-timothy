import React from "react";
import ReactDOM from "react-dom/client";
// You don't need to import ReactDOMClient for the basic use-case
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
