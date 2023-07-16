import React, { useState, useEffect } from "react";
import getPlaceNameFromCoordinates from "./geocodeAPI";
import "../App.css";
function LocationSec() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  useEffect(() => {
    const showPosition = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const showError = (error) => {
      setError(error.message);
    };

    const askForGeolocation = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else if (result.state === "denied") {
            setError("Geolocation permission denied.");
          }
        });
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    document.getElementById("getLocationBtn").addEventListener("click", () => {
      askForGeolocation();
    });
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <>
          <button
            style={{ display: "none" }}
            onClick={getPlaceNameFromCoordinates(latitude, longitude)
              .then((placeName) => {
                setPlaceName(placeName.split(",")[4]);
                document.getElementById("doctorslabel").innerText =
                  "Doctors matching Location :" + placeName.split(",")[4];
              })
              .catch((error) => {
                setError(error.message);
              })}
            id="getPlace"
            className="btn"
          >
            Get Place
          </button>
          <p id="place">Place:{placeName}</p>
        </>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <button className="btn" id="getLocationBtn">
            Get Location
          </button>
        </>
      )}
    </div>
  );
}

export default LocationSec;
