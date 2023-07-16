import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const handleClick = () => {
    // Navigate to the desired route when the button is clicked
  };
  const submit = () => {};
  let user = props.patordoc;
  if (user == "Patient") {
    user = "/patient";
  } else {
    user = "/doc";
  }
  return (
    <div>
      <div id="login-form">
        <div id="login-head">
          <h1>{props.patordoc} Login</h1>
        </div>
        <div id="login-details">
          <form onSubmit={submit}>
            <div id="user">
              <input id="un" type="text" name="name" placeholder="Username" />
            </div>

            <div id="pass">
              <input
                id="pw"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div id="submit">
              <Link to={user}>
                <input class="blurbtn"
                  type="submit"
                  value="Log-In"
                  onClick={() => {
                    let data = props.data;
                    let userName = document.getElementById("un").value;
                    let passWord = document.getElementById("pw").value;
                    let currUser = data[0].Patient.filter((d) => {
                      return d.userName == userName;
                    });
                    props.setCurrentUser(currUser[0]);
                  }}
                />
              </Link>
              <input class="blurbtn" id="editbtn"
                style={{ marginLeft: "20px" }}
                type="button"
                value="Sign Up"
                onClick={() => {
                  let data = props.data;
                  let userName = document.getElementById("un").value;
                  let passWord = document.getElementById("pw").value;
                  if (userName && passWord) {
                    data[0][props.patordoc].push({
                      userName: userName,
                      passWord: passWord,
                    });
                    localStorage.setItem("medpro", JSON.stringify(data));
                    alert("User created");
                  } else {
                    alert("Error Creating User");
                  }
                }}
              />
              <input class="blurbtn"
                style={{ marginLeft: "20px" }}
                type="button"
                value="Switch"
                onClick={() => {
                  if (props.patordoc != "Doctor") {
                    props.setPatDoc("Doctor");
                  } else {
                    props.setPatDoc("Patient");
                  }
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
