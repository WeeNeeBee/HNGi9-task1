import React from "react";
import Weenee from '../img/profile-img.jpg'


const Profile = () => {
    return(
        <div className="profile-section">
            <img src={Weenee} alt = "profile__img" id = 'profile__img' />
            <div className="usernames">
                <p id="twitter">@ffs_gwen</p>
                <p id="slack">WeeNeeBee</p>
            </div>
            {/* <a href="https://twitter.com/ffs_gwen" id="twitter"></a> */}
        </div>
    )
}




export default Profile;