import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/index.css'

 ReactDOM.render(
 <BrowserRouter> 
   <Routes />, 
 </BrowserRouter>,
 document.getElementById("root"));

reportWebVitals();
