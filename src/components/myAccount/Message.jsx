import NavbarAccount from "../NavbarAccount";
import "../css/message.css";

function MyMessage(){
    return(
        <>
        <div className="my-accout">
            <NavbarAccount currentState={"my-message"}/> 
            <div className="message">
                <p className="title-message">My Message</p>
            </div>
        </div>
        </>
    )
}
export default MyMessage;