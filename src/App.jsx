import { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";
import Curriculum from "./components/Curriculum";
import "./App.css";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [educationalInformation, setEducationalInformation] = useState({
    schoolName: "",
    title: "",
    date: "",
  });
  const [practicalInformation, setPracticalInformation] = useState({
    companyName: "",
    position: "",
    responsabilities: "",
    dateFrom: "",
    dateUntil: "",
  });
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <div id="content">
        <div id="left-content">
          <section id="general-information">
            <General
              generalInformation={generalInformation}
              setGeneralInformation={setGeneralInformation}
            />
          </section>
          <section id="educational-information">
            <Educational
              educationalInformation={educationalInformation}
              setEducationalInformation={setEducationalInformation}
            />
          </section>
          <section id="practical-information">
            <Practical
              practicalInformation={practicalInformation}
              setPracticalInformation={setPracticalInformation}
            />
          </section>
        </div>
        <div id="right-content">
          <Curriculum
            generalInformation={generalInformation}
            educationalInformation={educationalInformation}
            practicalInformation={practicalInformation}
          />
        </div>
      </div>
    </>
  );
}

export default App;
