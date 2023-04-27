import React from "react";
import '../styles/home.css'
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">

            <nav>
                <div className="logo">
                    <span>Jiseti.</span>
                </div>
                <div className="signlink">
                    <Link to="/registerpage">Sign Up</Link>
                </div>
                <div className="loginlink">
                <Link to="/login">Login</Link>

                </div>
            </nav>
                
           
         
              <h1 className="bottom">Corruption hurts us all.Lets stop it together</h1>   

             <p className="slogan">Join the fight against coruption and be part of creating a world where fairness,justice and intergrity prevail.</p> 
        
                 <Link to="/about" className="more">Readmore</Link>
         <div className="heroimg">

         </div>
        </div>
      
    )
}

export default Homepage;