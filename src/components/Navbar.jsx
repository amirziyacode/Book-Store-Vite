import React, { useState } from "react";
import "./css/navbar.css";
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar(){
    const navigate = useNavigate();
    const nav_button = ["Account","BookStroes","About Us","Contact us"];
    const [navchange,setNavchange] = useState('');

    return (
        <>
        <div className="nav-bar">
            <h2 className="logo" onClick={() => {navigate('/'),setNavchange("")}}><span style={{color:"red"}}>Book</span>Store</h2>
            <ul className="nav-ite">
                {nav_button.map(navbtn => (
                    <li
                        key={navbtn}
                        onClick={() => { setNavchange(navbtn),navigate(navbtn) }}
                        style={navchange === navbtn ?{color:"black",textDecoration:"underline",textDecorationColor:"red",textDecorationThickness:"3px"} : {color:"#374151",}}
                        >
                        {navbtn}
                    </li>
                ))}
            </ul>
            <AiOutlineShoppingCart className="shop-icon"/>
            <button class="btn-outline-signUp" onClick={() => {setNavchange(''),navigate('/SingUp')}}><p class="text-btn">Sing Up</p></button>
        </div>
        </>
    )
}
export default NavBar;