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
                        <a href="https://www.instagram.com/amirziya.py?igsh=empvOWp6ZncwbHU5"><FaInstagram className="instagram"/></a>
                        <a href="https://github.com/amirziyacode"><FaGithub className="github"/></a>
                        <a href="https://www.linkedin.com/in/amir-ali-ziya-zadeh-19161b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"></a>
                        <FaLinkedin className="linkdin"/>
                       <a href="mailto:amz.python@gmail.com"><MdEmail className="email"/></a> 
                    </div>
                </div>
                <img className="pic-about" src="src/assets/aboutus.jpg" alt="about-us" />
            </div>
        </>
    )
}

export default Aboutus;