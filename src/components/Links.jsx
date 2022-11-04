import React from "react";
import { MdOutlineIosShare } from 'react-icons/md'
import Slack from '../img/slack.png';
import Git_hub from '../img/github_icon.png';



const Links = ({ buttons }) => {

    const linkItems = buttons.map((button) => (
            <a 
                href={button.link} 
                id={button.id} 
                className = 'link-item' 
                key={button.id}
            > 
                <MdOutlineIosShare className="share-link" title="share"/>
                <h4>
                    {button.text}
                </h4>
                
                <br />
                <small className="sub-text">
                    {button.subText}
                </small>
            </a>
    ))

    return (
        <>
            <div className="links-section">
                {linkItems}
            </div>
        
            {/* icons for slack and github */}
            <div className="slack-github-icons">
                <a href="https://slack.com/"><img src={Slack} alt='slack-logo' className="slack"/></a>
                <a href="https://github.com/"><img src={Git_hub} alt='github-logo' /></a>
            </div>
        </>
    )
}






export default Links;