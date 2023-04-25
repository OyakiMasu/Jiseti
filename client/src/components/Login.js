import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    const [user_email, SetUser_email] = useState("")
    const [user_password, SetUser_password] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
     
    fetch("https://move-7msy.onrender.com/auth/login", {
        method: 'POST',
        body: JSON.stringify({
        email: user_email,
        password: user_password
      })
    })
    .then((response) => response.json())
    .then((data) => {
          if (data.message === "Login success!") {
          alert(data.message)
          navigate("/report")
        } else if (data.message === "Invalid email or password"){
            alert(data.message)
            redirect('/login')
        }})
      }

    return(

        <center >
            <form className="login"  onSubmit={e => handleSubmit(e)}>

                <h3 className="title">Login</h3>

                <label><b>Email</b></label>
                <input className="emailinput" type="text" placeholder="email" value={user_email} onChange={e => SetUser_email(e.target.value)} required></input>
                <label><b>Password</b></label>
                    
                <input className="passinput" type="text" placeholder="password." value={user_password} onChange={e => SetUser_password(e.target.value)} required></input>

                    <input className="button" type="submit" ></input>

                    <a href="/registerpage" className="signroute">Signup</a>

             </form>
        </center>

    )
}

export default Login;