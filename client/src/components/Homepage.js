import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">
            <nav className="top">
                <Link to="/registerpage" className="loginlink">Sign Up</Link>
                <Link to="/login" className="loginlink">Login</Link>

            </nav>
            <h2 className="logo">Jiseti.</h2>

         
              <h1 className="bottom">Corruption hurts us all.Lets stop it together</h1>   

             <p className="slogan">Join the fight against coruption and be part of creating a world where fairness,justice and intergrity prevail.</p> 
        
                 <Link to="/about" className="more"> Read more</Link>
         
        </div>
      
    )
}

export default Homepage;