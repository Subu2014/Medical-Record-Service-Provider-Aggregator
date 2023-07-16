import React from "react";

function Diseases() {
  return (
    <div>
      <div class="field">
        <label id="bodyproblem">Specialization</label>
        <select id="diseases" class="ui fluid dropdown">
          <option value="Anesthesiology"> Anesthesiology</option>
          <option value="Cardiology"> Cardiology</option>
          <option value="Dermatology"> Dermatology</option>
          <option value="Emergency Medicine"> Emergency Medicine</option>
          <option value="Endocrinology"> Endocrinology</option>
          <option value="Gastroenterology"> Gastroenterology</option>
          <option value="Hematology/Oncology"> Hematology/Oncology</option>
          <option value="Neurology"> Neurology</option>
          <option value="Obstetrics and Gynecology">
            Obstetrics and Gynecology
          </option>
          <option value="Ophthalmology"> Ophthalmology</option>
          <option value="Orthopedic Surgery"> Orthopedic Surgery</option>
          <option value="Otolaryngology (ENT)"> Otolaryngology (ENT)</option>
          <option value="Pediatrics"> Pediatrics</option>
          <option value="Psychiatry"> Psychiatry</option>
          <option value="Pulmonology"> Pulmonology</option>
          <option value="Radiology"> Radiology</option>
          <option value="Urology"> Urology</option>
          <option value="Plastic Surgery"> Plastic Surgery</option>
          <option value="Rheumatology"> Rheumatology</option>
          <option value="Family Medicine/Internal Medicine">
            {" "}
            Family Medicine/Internal Medicine
          </option>
        </select>
      </div>
    </div>
  );
}

export default Diseases;
