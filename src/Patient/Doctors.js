import React from "react";

function Doctors() {
  let doc = [];
  if (JSON.parse(localStorage.getItem("medpro"))[0].Doctor.length) {
    let docdata = JSON.parse(localStorage.getItem("medpro"))[0].Doctor;
    for (let i = 0; i < docdata.length; i++) {
      doc.push(docdata[i].userName);
    }
  }
  return (
    <div>
      <div class="field">
        <label id="doctorslabel">Doctors</label>
        <select id="doctors" class="ui fluid dropdown">
          {doc.map((d) => {
            return <option value={d}>{d}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Doctors;
