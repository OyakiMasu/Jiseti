import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import '../styles/login.css'
import { AuthContext } from "../AuthContext";

function Login() {
    const navigate = useNavigate()
    const { setUserId } = useContext(AuthContext);
    const [username, SetUsername] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")


    function handleSubmit(e) {
      e.preventDefault();
  
      console.log("login form submitted with", { username, email, password });

      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      })
        .then(response => {
          if(response.ok){
            navigate("/report");
            return response.json()
          } else {
            alert("Login failed")
            return response.json()
          }
        }
        )

        .then(data => {
          console.log("login response", data);
          localStorage.setItem("userId",data.userId);
          localStorage.setItem("token",data.token);
          console.log("userId in Login component: ", data.userId);
        })
        .catch(error => console.error(error));
    }
    return(
        <div className="loginimg">
            <form className="logform" onSubmit={e => handleSubmit(e)}>
                <h3 className="title">Login</h3>
                <label>username:</label>
                <input className="loginput" type="text" placeholder="username" value={username} onChange={e => SetUsername(e.target.value)} required></input>
                <label>email:</label>
                <input className="loginput" type="text" placeholder="email" value={email} onChange={e => SetEmail(e.target.value)} required></input>
                <label>Password:</label>
                <input className="loginput" type="password" placeholder="password" value={password} onChange={e => SetPassword(e.target.value)} required></input>
               
                    <input className="button" type="submit" ></input>
                    <a href="/registerpage">Signup</a>
             </form>
        </div>
    )
}
export default Login;







