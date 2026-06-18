import { useState } from "react";
import "../styles/General.css";

function General() {
  const [boolMode, setBoolMode] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleMode = () => setBoolMode((prev) => !prev);

  return (
    <div className="general">
      <h3>General information</h3>
      {boolMode ? (
        <>
          {" "}
          <div className="general-field">
            <label htmlFor="general-name">Full name: </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              id="general-name"
              type="text"
              placeholder="John Doe"
              value={fullName !== "" ? fullName : ""}
              required
            />
          </div>
          <div className="general-field">
            <label htmlFor="general-email">Email: </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="general-email"
              type="email"
              placeholder="example@example.com"
              value={email !== "" ? email : ""}
              required
            />
          </div>
          <div className="general-field">
            <label htmlFor="general-phone">Phone: </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              id="general-phone"
              type="tel"
              placeholder="+1 (555) 555-5555"
              value={phone !== "" ? phone : ""}
              required
            />
          </div>{" "}
        </>
      ) : (
        <>
          <h4>{fullName}</h4>
          <p>{email}</p>
          <p>{phone}</p>
        </>
      )}
      <button onClick={handleMode}>{boolMode ? "Submit" : "Edit"}</button>
    </div>
  );
}
export default General;
