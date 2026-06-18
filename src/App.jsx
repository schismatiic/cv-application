import { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Educational from "./components/Educational";
import "./App.css";

function App() {
  return (
    <>
      <section id="header">
        <Header />
        <General />
        <Educational />
      </section>
    </>
  );
}

export default App;
