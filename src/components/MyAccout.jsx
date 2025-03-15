
import { FaUserCircle ,FaShoppingCart} from "react-icons/fa";
import { CiShoppingCart} from "react-icons/ci";
import "./css/MyAccount.css"
import { MdMessage ,MdOutlineLogout} from "react-icons/md";

function MyAccount(){
    return(
        <>
            <div className="profile">
                <div className="options-accounts">
                    <div className="my-account">
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
            </div>
        </>
    )
}

export default MyAccount;