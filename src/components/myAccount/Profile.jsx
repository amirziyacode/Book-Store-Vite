import "../css/profile.css";
import NavbarAccount from "../NavbarAccount";

function Profile() {

    return(
        <>
        <div className="my-accout">
            <NavbarAccount currentState={"my-account"}/> 
            <div className="account">
                <p className="title-profile">My Account</p>
                <div className="inputs-button">
                <div className="input-update">
                        <input className="input-account" type="text" placeholder="Firstname"/>
                        <input className="input-account" type="text" placeholder="Lastname"/>
                    </div>
                    <div className="input-update">
                        <input className="input-account" type="email" placeholder="Email"/>
                        <input className="input-account" type="password" placeholder="Password"/>
                    </div>
                    <button className="update-account">Update Account</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Profile;