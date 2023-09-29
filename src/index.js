import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/media/media.css";
import App from "./App";
import Content from "../src/components/header_c";
import Section1 from "../src/components/section1";
import Section2 from "../src/components/section2";
import Section3 from "../src/components/section3";
import Section4 from "../src/components/section4";
import Section5 from "../src/components/section5";
import Section6 from "./components/footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Content />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
  </React.StrictMode>
);
reportWebVitals();
