import { useState } from "react";
import "../styles/General.css";

function General({ generalInformation, setGeneralInformation }) {
  const [boolMode, setBoolMode] = useState(true);
  const handleFullName = (e) => {
    setGeneralInformation({ ...generalInformation, fullName: e.target.value });
  };
  const handleEmail = (e) => {
    setGeneralInformation({ ...generalInformation, email: e.target.value });
  };
  const handlePhone = (e) => {
    setGeneralInformation({ ...generalInformation, phone: e.target.value });
  };
  const handleMode = () => setBoolMode((prev) => !prev);

  return (
    <div className="general">
      <h3>General information</h3>
      {boolMode ? (
        <>
          <div className="general-field">
            <label htmlFor="general-name">Full name: </label>
            <input
              onChange={handleFullName}
              id="general-name"
              type="text"
              placeholder="John Doe"
              value={generalInformation.fullName}
              required
            />
          </div>
          <div className="general-field">
            <label htmlFor="general-email">Email: </label>
            <input
              onChange={handleEmail}
              id="general-email"
              type="email"
              placeholder="example@example.com"
              value={generalInformation.email}
              required
            />
          </div>
          <div className="general-field">
            <label htmlFor="general-phone">Phone: </label>
            <input
              onChange={handlePhone}
              id="general-phone"
              type="tel"
              placeholder="+1 (555) 555-5555"
              value={generalInformation.phone}
              required
            />
          </div>{" "}
        </>
      ) : (
        <>
          <h4>{generalInformation.fullName}</h4>
          <p>{generalInformation.email}</p>
          <p>{generalInformation.phone}</p>
        </>
      )}
      <button onClick={handleMode}>{boolMode ? "Submit" : "Edit"}</button>
    </div>
  );
}
export default General;
