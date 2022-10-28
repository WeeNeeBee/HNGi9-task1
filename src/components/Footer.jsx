import React from "react";
import Slack from '../img/slack.png';
import Git_hub from '../img/github_icon.png';
import Zuri from '../img/Zuri.Internship_Logo.png';
import I4G from '../img/I4G.png';


const Footer = () => {
    return(
        <div className="footer">
            {/* icons for slack and github */}
            <div className="slack-github-icons">
                <a href="#"><img src={Slack} alt='slack-logo' className="slack"/></a>
                <a href="#"><img src={Git_hub} alt='github-logo' /></a>
            </div>
            <hr />
            {/* icons for Zuri, HNG and I4G */}
            <div className="zuri-hng-ig4-icons">
                <a href="#"> <img src={Zuri} /> </a>
                <p>HNG Internship 9 Frontend Task</p>
                <a href="#"> <img src={I4G} /> </a>
            </div>
        </div>
    )
}



export default Footer; 