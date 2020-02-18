import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import Routes from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
