import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Patient from "./Patient/Patient";
import Doc from "./Doctor/Doc";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [isLoggedin, setLogin] = useState(false);
  let [patordoc, setPatDoc] = useState("Patient");
  let [data, setData] = useState([]);
  let [currentUser, setCurrentUser] = useState({});
  let [docdetails, setDocDetails] = useState({});

  useEffect(() => {
    if (localStorage.getItem("medpro")) {
      setData(JSON.parse(localStorage.getItem("medpro")));
    } else {
      localStorage.setItem(
        "medpro",
        JSON.stringify([
          {
            Doctor: [],
            Patient: [],
          },
        ])
      );
      setData(JSON.parse(localStorage.getItem("medpro")));
    }
    console.log("another login");
  }, [isLoggedin]);
  return (
    <div className="App">
      <Header isLoggedin={isLoggedin} setLogin={setLogin} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                data={data}
                patordoc={patordoc}
                setPatDoc={setPatDoc}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/doc/*"
            element={<Doc data={data} currentUser={currentUser} />}
          />
          <Route
            path="/patient/*"
            element={
              <Patient
                docdetails={docdetails}
                setDocDetails={setDocDetails}
                data={data}
                currentUser={currentUser}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
