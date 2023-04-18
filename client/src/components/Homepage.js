import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">

            <h2 className="logo">Jiseti.</h2>

            <nav className="top">
                <Link to="/registerpage" className="link">Sign Up</Link>
                <Link to="/login" className="">Login</Link>
                <Link to="/report" className="">Report</Link>

            </nav>
        <h1 className="bottom">Corruption hurts us all.Lets stop it together</h1>   

        <p className="slogan">Join the fight against coruption and be part of creating a world where fairness,justice,and intergrity prevail.</p> 
        
       <Link to="/about" className="more"> Read more</Link>
        </div>
    )
}

export default Homepage;