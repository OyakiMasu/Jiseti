import React, { useState } from "react";
import '../styles/signup.css'
import { useNavigate } from "react-router-dom";

function Registerpage() {

    const navigate = useNavigate()
    const [first, SetFirst] = useState("")
    const [last, SetLast] = useState("")
    const [mail, SetMail] = useState("")
    const [pass, SetPass] = useState("")

    function handleAdd(e) {
        e.preventDefault()

    fetch('https://move-7msy.onrender.com/auth/register', {
    method: 'POST',
    body: JSON.stringify({
        first_name: first,
        last_name: last,
        email: mail,
        password: pass
    })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        navigate("/login")
    })
    .catch(error => console.error(error))
    }


    return(

            <div>

                <form className="signup" onSubmit={e => handleAdd(e)}>
                
                     <h3 className="title">signup</h3>

                    <label>
                    firstname:
                    <input placeholder="Firstname" className="emailinput"  type="text" value={first} onChange={e => SetFirst(e.target.value)}required></input>
                    </label>

                    <label>lastname:</label>
                    <input placeholder="Lastname"  className="passinput"  type="text" value={last} onChange={e => SetLast(e.target.value)} required></input>

                    <label>Email:</label>
                    <input placeholder="Email"  className="signemail" type="text" value={mail} onChange={e => SetMail(e.target.value)} required></input>

                    <label>Password:</label>
                    <input  className="passwordinput"  type="text" placeholder="Password" value={pass} onChange={e => SetPass(e.target.value)} required></input>

                    <input className="adduser" type="submit" value="Add User" required></input>
                    
                    <a href="/login">Login</a>
                </form>
            </div>

    )
}

export default Registerpage;