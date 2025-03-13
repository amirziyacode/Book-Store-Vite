import "./css/contactus.css";
import { MdPhoneIphone,MdOutlineEmail } from "react-icons/md";

function Contactus(){

    return(
        <>
        <div className="contact-contrainer">
            <div className="contact-me">
                <div className="title-contact" >
                    <p style={{color:'red',height:'2px'}}>CONTACT ME</p>
                    <p style={{fontSize:"37px",fontWeight:"bold",height:'30px'}}>How can I help you ?</p>
                    <p>Fill the form or drop an email</p>
                </div>
                <div className="phone-box">
                    <MdPhoneIphone style={{width:"30px",height:"25px",margin:"5px"}}/>
                    <p>+1 012 345 678</p>
                </div>
                <div className="email-box">
                    <MdOutlineEmail style={{width:"30px",height:"25px",margin:"5px"}}/>
                    <p>email@gmail.com</p>
                </div>
            </div>
            <div className="email-form">
                <input className="contact-input" type="text" placeholder="Name"/>
                <input className="contact-input" type="emil" placeholder="Email" />
                <input className="contact-input" type="text" placeholder="Subject" />
                <textarea type="text" placeholder="Massage" />
                <button className="sumbit">
                    Sumbite
                </button>
            </div>
        </div>
        </>
    )
}

export default Contactus;