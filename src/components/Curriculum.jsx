import { useState } from "react";
import "../styles/Curriculum.css";

function Curriculum({
  generalInformation,
  educationalInformation,
  practicalInformation,
}) {
  return (
    <div className="curriculum">
      <section id="general">
        <h3>
          {generalInformation.fullName !== ""
            ? generalInformation.fullName
            : "John Doe"}
        </h3>
        <p>
          {generalInformation.email !== ""
            ? generalInformation.email
            : "example@example.com"}
        </p>
        <p>
          {generalInformation.phone !== ""
            ? generalInformation.phone
            : "+1 (555) 555-5555"}
        </p>
      </section>
      <section id="educational">
        <h3>
          {educationalInformation.schoolName !== ""
            ? educationalInformation.schoolName
            : "University of Oxford"}
        </h3>
        <p>
          {educationalInformation.title !== ""
            ? educationalInformation.title
            : "Computer Science"}
        </p>
        <p>
          {educationalInformation.date !== ""
            ? educationalInformation.date
            : "2020-2025"}
        </p>
      </section>
      <section id="practical">
        <h3>
          {practicalInformation.companyName !== ""
            ? practicalInformation.companyName
            : "Red Hat"}
        </h3>
        <p>
          {practicalInformation.position !== ""
            ? practicalInformation.position
            : "Backend Developer"}
        </p>
        <p>
          {practicalInformation.responsabilities !== ""
            ? practicalInformation.responsabilities
            : "Developed and maintained REST APIs."}
        </p>
        <p>
          {practicalInformation.dateFrom !== ""
            ? practicalInformation.dateFrom
            : "2025"}{" "}
          -{" "}
          {practicalInformation.dateUntil !== ""
            ? practicalInformation.dateUntil
            : "Present"}
        </p>
      </section>
    </div>
  );
}
export default Curriculum;
