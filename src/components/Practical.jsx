import { useState } from "react";
import "../styles/Practical.css";

function Practical({ practicalInformation, setPracticalInformation }) {
  const [boolMode, setBoolMode] = useState(true);
  const handleCompanyName = (e) => {
    setPracticalInformation({
      ...practicalInformation,
      companyName: e.target.value,
    });
  };
  const handlePosition = (e) => {
    setPracticalInformation({
      ...practicalInformation,
      position: e.target.value,
    });
  };
  const handleResponsabilities = (e) => {
    setPracticalInformation({
      ...practicalInformation,
      responsabilities: e.target.value,
    });
  };
  const handleDateFrom = (e) => {
    setPracticalInformation({
      ...practicalInformation,
      dateFrom: e.target.value,
    });
  };
  const handleDateUntil = (e) => {
    setPracticalInformation({
      ...practicalInformation,
      dateUntil: e.target.value,
    });
  };
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
              onChange={handleCompanyName}
              id="practical-name"
              type="text"
              placeholder="Red Hat"
              value={practicalInformation.companyName}
              required
            />
          </div>
          <div className="practical-field">
            <label htmlFor="practical-position">Position title: </label>
            <input
              onChange={handlePosition}
              id="practical-position"
              type="text"
              placeholder="Backend Developer"
              value={practicalInformation.position}
              required
            />
          </div>
          <div className="practical-field">
            <label htmlFor="practical-responsabilities">
              Responsibilities:
            </label>
            <textarea
              onChange={handleResponsabilities}
              id="practical-responsabilities"
              type="text"
              placeholder="Developed and maintained REST APIs."
              value={practicalInformation.responsabilities}
              required
            />
          </div>{" "}
          <div className="practical-field">
            <label htmlFor="practical-from">Date from: </label>
            <input
              onChange={handleDateFrom}
              id="practical-from"
              type="text"
              placeholder="2025"
              value={practicalInformation.dateFrom}
              required
            />
          </div>
          <div className="practical-field">
            <label htmlFor="practical-until">Until: </label>
            <input
              onChange={handleDateUntil}
              id="practical-until"
              type="text"
              placeholder="Present"
              value={practicalInformation.dateUntil}
              required
            />
          </div>
        </>
      ) : (
        <>
          <h4>{practicalInformation.companyName}</h4>
          <p>{practicalInformation.position}</p>
          <p>{practicalInformation.responsabilities}</p>
          <p>
            {practicalInformation.dateFrom} - {practicalInformation.dateUntil}
          </p>
        </>
      )}
      <button onClick={handleMode}>{boolMode ? "Submit" : "Edit"}</button>
    </div>
  );
}
export default Practical;
