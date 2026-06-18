import { useState } from "react";
import "../styles/Educational.css";

function Educational() {
  const [boolMode, setBoolMode] = useState(true);
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
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
              onChange={(e) => setSchoolName(e.target.value)}
              id="educational-name"
              type="text"
              placeholder="University of Oxford"
              value={schoolName}
              required
            />
          </div>
          <div className="educational-field">
            <label htmlFor="educational-title">Title of study: </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              id="educational-title"
              type="text"
              placeholder="Computer Science"
              value={title}
              required
            />
          </div>
          <div className="educational-field">
            <label htmlFor="educational-date">Date of study: </label>
            <input
              onChange={(e) => setDate(e.target.value)}
              id="educational-date"
              type="text"
              placeholder="2020-2025"
              value={date}
              required
            />
          </div>{" "}
        </>
      ) : (
        <>
          <h4>{schoolName}</h4>
          <p>{title}</p>
          <p>{date}</p>
        </>
      )}
      <button onClick={handleMode}>{boolMode ? "Submit" : "Edit"}</button>
    </div>
  );
}
export default Educational;
