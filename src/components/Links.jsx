import React from "react";
import { MdOutlineIosShare } from 'react-icons/md'



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
        <div className="links-section">
                {linkItems}
        </div>
    )
}






export default Links;