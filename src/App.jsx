import { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";
import "./App.css";

function App() {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="general-information">
        <General />
      </section>
      <section id="educational-information">
        <Educational />
      </section>
      <section id="practical-information">
        <Practical />
      </section>
    </>
  );
}

export default App;
