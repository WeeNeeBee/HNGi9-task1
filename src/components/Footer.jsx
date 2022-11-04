import React from "react";
import Zuri from '../img/Zuri.Internship_Logo.png';
import I4G from '../img/I4G.png';


const Footer = () => {
    return(
        <div className="footer">
            <hr />
            {/* icons for Zuri and I4G */}
            <div className="zuri-hng-ig4-icons">
                <a href="https://internship.zuri.team/"> <img src={Zuri} alt = 'zuri-logo'/> </a>
                <p>HNG Internship 9 Frontend Task</p>
                <a href="https://ingressive.org/"> <img src={I4G} alt = 'i4g-logo'/> </a>
            </div>
        </div>
    )
}



export default Footer; 