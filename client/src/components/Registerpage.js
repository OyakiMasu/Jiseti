import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import '../styles/signup.css'

function Registerpage() {
    const navigate = useNavigate()
    const { setUserId } = useContext(AuthContext);
    const [username, SetUsername] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitting signup form with: ");
        console.log("username: ", username);
        console.log("email: ", email);
        console.log("password: ", password);
        fetch("http://127.0.0.1:3000/signup", {
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
            .then(response => response.json())
            .then(data => {
              setUserId(data.userId);
              console.log("userId in Registerpage component: ", data.userId);
              navigate("/login");
            })
            .catch(error => console.error(error));
        }
    return(
            <div className="signimg">
                <form className="signform" onSubmit={e => handleSubmit(e)}>
                     <h3 className="title">signup</h3>
                    <label>Username:</label>
                    <input placeholder="username" type="text" value={username} onChange={e => SetUsername(e.target.value)}required></input>
                    <label>Email:</label>
                    <input type="text" placeholder="email" value={email} onChange={e => SetEmail(e.target.value)} required></input>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" value={password} onChange={e => SetPassword(e.target.value)} required></input>
                    <input className="button"  type="submit" value="Add User" required></input>
                    <a href="/login">Login</a>
                </form>
            </div>
    )
}
export default Registerpage;