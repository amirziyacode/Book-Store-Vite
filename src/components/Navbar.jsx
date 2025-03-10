import React from "react";
import "./css/home.css";
import { useNavigate } from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();
    return (
        <>
        <div className="nav-bar">
            <h2 className="logo" onClick={() => navigate('/')}><span style={{color:"red"}}>Book</span>Store</h2>
            <ul className="nav-ite">
                <li onClick={() => navigate('/bookstore')}>BookStroes</li>
                <li onClick={() =>  navigate('/login')}>Shop</li>
                <li>About Us</li>
                <li>Contact us</li>
            </ul>
            <button class="btn-outline" onClick={() => navigate('/SingUp')}><p class="text-btn">Sing Up</p></button>
        </div>
        </>
    )
}
export default NavBar;