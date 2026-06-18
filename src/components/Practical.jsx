import { useState } from "react";
import "../styles/Practical.css";

function Practical() {
  const [boolMode, setBoolMode] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsabilities, setResponsabilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUntil, setDateUntil] = useState("");
  const handleMode = () => setBoolMode((prev) => !prev);

  return (
    <div className="practical">
      <h3>Practical information</h3>
      {boolMode ? (
        <>
          {" "}
          <div className="practical-field">
            <label htmlFor="practical-name">Company name: </label>
            <input
              onChange={(e) => setCompanyName(e.target.value)}
              id="practical-name"
              type="text"
              placeholder="Red Hat"
              value={companyName}
              required
            />
          </div>
          <div className="practical-field">
            <label htmlFor="practical-position">Position title: </label>
            <input
              onChange={(e) => setPosition(e.target.value)}
              id="practical-position"
              type="text"
              placeholder="Backend Developer"
              value={position}
              required
            />
          </div>
          <div className="practical-field">
            <label htmlFor="practical-responsabilities">
              Responsibilities:{" "}
            </label>
            <textarea
              onChange={(e) => setResponsabilities(e.target.value)}
              id="practical-responsabilities"
              type="text"
              placeholder="Developed and maintained REST APIs."
              value={responsabilities}
              required
            />
          </div>{" "}
          <div className="practical-field">
            <label htmlFor="practical-from">Date from: </label>
            <input
              onChange={(e) => setDateFrom(e.target.value)}
              id="practical-from"
              type="text"
              placeholder="2025"
              value={dateFrom}
              required
            />
          </div>
          <div className="practical-field">
            <label htmlFor="practical-until">Until: </label>
            <input
              onChange={(e) => setDateUntil(e.target.value)}
              id="practical-until"
              type="text"
              placeholder="Present"
              value={dateUntil}
              required
            />
          </div>
        </>
      ) : (
        <>
          <h4>{companyName}</h4>
          <p>{position}</p>
          <p>{responsabilities}</p>
          <p>
            {dateFrom} - {dateUntil}
          </p>
        </>
      )}
      <button onClick={handleMode}>{boolMode ? "Submit" : "Edit"}</button>
    </div>
  );
}
export default Practical;
