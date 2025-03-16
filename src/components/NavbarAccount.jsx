
import { FaUserCircle ,FaShoppingCart} from "react-icons/fa";
import "./css/Navbar-Account.css"
import { MdMessage ,MdOutlineLogout} from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavbarAccount(){
    const myIcons = ["my-account","my-order","my-message","log-out"]
    const[selectIcon,setSelecetIcon] = useState("my-account");
    const navigate = useNavigate();
    return(
        <>
                <div className="options-accounts">
                    <div className="my-account" onClick={() => navigate("/Account")}>
                        <FaUserCircle className="my-account-icon" />
                        <p>My Account</p>
                    </div>
                    <div className="my-order">
                        <FaShoppingCart className="my-order-icon" />
                        <p>My Order</p>
                    </div>
                    <div className="my-message">
                        <MdMessage  className="my-message-icon"/>
                        <p>My Message</p>
                    </div>
                    <div className="log-out">
                        <MdOutlineLogout className="log-out-icon"/>
                        <p>Log Out</p>
                    </div>
                </div>
        </>
    )
}

export default NavbarAccount;