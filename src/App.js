import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/MainComponents";

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
