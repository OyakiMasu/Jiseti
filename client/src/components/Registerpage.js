import React, { useState } from "react";
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
        navigate("/dashboard")
    })
    .catch(error => console.error(error))
    }


    return(

      <center>
            <div className="signup">

                <form className="regnav" onSubmit={e => handleAdd(e)}>
                    <input type="hidden" name="movie[user_id]" value="<%= @user.id %>"></input>
                                    <h3>signup</h3>

                    <label>firstname:</label>
                    <input type="text" value={first} onChange={e => SetFirst(e.target.value)} required></input>

                    <label>lastname:</label>
                    <input type="text" value={last} onChange={e => SetLast(e.target.value)} required></input>

                    <label>Email:</label>
                    <input type="text" value={mail} onChange={e => SetMail(e.target.value)} required></input>

                    <label>Password:</label>
                    <input type="text" placeholder="Password" value={pass} onChange={e => SetPass(e.target.value)} required></input>
                    <input type="submit" value="Add User" required></input>
                </form>
            </div>
      </center>  

    )
}

export default Registerpage;