import { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import "./App.css";

function App() {
  return (
    <>
      <section id="header">
        <Header />
        <General />
      </section>
    </>
  );
}

export default App;
