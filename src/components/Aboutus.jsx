import "./css/aboutus.css"
import { FaInstagram ,FaGithub,FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Aboutus(){
    return(
        <>
            <div className="container-about-us">
                <div className="about">
                    <h2 style={{fontSize:"40px"}}>About Us</h2>
                    <p style={{letterSpacing:"1px",fontSize:"17px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, adipisci expedita ratione explicabo earum neque maxime et soluta dolorem, sapiente enim magnam quidem officiis. Facere illum voluptates officia sequi in?</p>
                    <div className="about-icons">
                        <a href=""><FaInstagram className="instagram"/></a>
                        <FaGithub className="github"/>
                        <FaLinkedin className="linkdin"/>
                        <MdEmail className="email"/>
                    </div>
                </div>
                <img className="pic-about" src="src/assets/aboutus.jpg" alt="about-us" />
            </div>
        </>
    )
}

export default Aboutus;