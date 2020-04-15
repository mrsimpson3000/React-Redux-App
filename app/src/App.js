import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Info from "./components/Info";
import "./App.css";

function App() {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <>
      <Header />
      <Info />
    </>
  );
}

export default App;
