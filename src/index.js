import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./reset.css";
import { Search } from "./componenets/Search";
import { Footer } from "./componenets/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Search />
    <App />
    <Footer />
  </BrowserRouter>,
  rootElement
);
