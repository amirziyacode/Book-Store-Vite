
import { FaUserCircle ,FaShoppingCart} from "react-icons/fa";
import "./css/Navbar-Account.css"
import { MdMessage ,MdOutlineLogout} from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavbarAccount({currentState}){
    const options = [
        {
          divclass:"my-account",
          navigate:"/Account",
          name:"My Account",
          icon:<FaUserCircle className="my-account-icon"/>,
          ngvit:"/Account"
        },
        {
            divclass:"my-order",
            navigate:"/Account",
            icon:<FaShoppingCart className="my-order-icon"/>,
            name:"My Order" ,
            ngvit:"/Account/Order"
        },
        {
            divclass:"my-message",
            navigate:"/Account",
            icon:<MdMessage className="my-message-icon"/>,
            name:"My Message",
            ngvit:"/Account/Message"  
        },
        {
            divclass:"log-out",
            navigate:"/Account",
            icon:<MdOutlineLogout className="log-out-icon"/>,
            name:"Log Out"  
        },
    ]
    const[selectIcon,setSelecetIcon] = useState(currentState);
    const navigate = useNavigate();
    return(
        <>
            <div className="options-accounts">
                {
                    options.map(opt => (
                        <div key={opt} className={opt.divclass}onClick={() => { setSelecetIcon(opt.divclass),navigate(opt.ngvit)}} style={selectIcon === opt.divclass ? {color:"red"}: {color:"black"}}>
                            {opt.icon}
                            <p>{opt.name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NavbarAccount;