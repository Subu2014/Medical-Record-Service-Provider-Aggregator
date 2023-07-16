import React from "react";
import LocationSec from "./LocationSec";
import Diseases from "./Diseases";
import Doctors from "./Doctors";
function Patient(props) {
  return (
    <div className="patientpage">
      <div className="patientpageLeft">
        <p className="bigheading">Welcome {props.currentUser.userName}</p>
        <Diseases />
        <br />
        <Doctors data={props.data} />
        <br />

        <LocationSec />
        <button
          onClick={() => {
            props.setDocDetails({
              disease: document.getElementById("diseases").value,
              name: document.getElementById("doctors").value,
              place: document.getElementById("place").innerText,
            });
            document.getElementsByClassName(
              "patientpageRight"
            )[0].style.display = "block";
          }}
          className="btn"
        >
          Submit
        </button>
      </div>
      <div style={{ display: "none" }} className="patientpageRight">
        <p className="bigheading" id="id1">Doctor Details</p>
        <p class="textinside">Doctor Name : {props.docdetails.name}</p>
        <p class="textinside">Specialization : {props.docdetails.disease}</p>
        <p class="textinside"> {props.docdetails.place}</p>
        <button onClick={() => {}} className="btn">
          Book Doctor
        </button>
      </div>
    </div>
  );
}

export default Patient;
