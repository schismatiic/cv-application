import { useState } from "react";
import "../styles/Educational.css";

function Educational({ educationalInformation, setEducationalInformation }) {
  const [boolMode, setBoolMode] = useState(true);
  const handleSchoolName = (e) => {
    setEducationalInformation({
      ...educationalInformation,
      schoolName: e.target.value,
    });
  };
  const handleTitle = (e) => {
    setEducationalInformation({
      ...educationalInformation,
      title: e.target.value,
    });
  };
  const handleDate = (e) => {
    setEducationalInformation({
      ...educationalInformation,
      date: e.target.value,
    });
  };
  const handleMode = () => setBoolMode((prev) => !prev);

  return (
    <div className="educational">
      <h3>Educational experience</h3>
      {boolMode ? (
        <>
          {" "}
          <div className="educational-field">
            <label htmlFor="educational-name">School name: </label>
            <input
              onChange={handleSchoolName}
              id="educational-name"
              type="text"
              placeholder="University of Oxford"
              value={educationalInformation.schoolName}
              required
            />
          </div>
          <div className="educational-field">
            <label htmlFor="educational-title">Title of study: </label>
            <input
              onChange={handleTitle}
              id="educational-title"
              type="text"
              placeholder="Computer Science"
              value={educationalInformation.title}
              required
            />
          </div>
          <div className="educational-field">
            <label htmlFor="educational-date">Date of study: </label>
            <input
              onChange={handleDate}
              id="educational-date"
              type="text"
              placeholder="2020-2025"
              value={educationalInformation.date}
              required
            />
          </div>{" "}
        </>
      ) : (
        <>
          <h4>{educationalInformation.schoolName}</h4>
          <p>{educationalInformation.title}</p>
          <p>{educationalInformation.date}</p>
        </>
      )}
      <button onClick={handleMode}>{boolMode ? "Submit" : "Edit"}</button>
    </div>
  );
}
export default Educational;
