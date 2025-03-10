import React from "react"
import "./css/home.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate =  useNavigate();
    return (
        <>
        <div className="home-body">
            <div className="home-text-btn">
                <p className="big-text-gray">
                    Let's celebrate together
                </p>
                <p className="big-text-black">
                    Happ World Book Day
                </p>
                <p className="dcp">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum fugiat, rem laborum accusamus est aliquid atque. Culpa fugit incidunt a magnam eius ullam debitis magni,
                    nemo veritatis quod nihil. In?
                </p>
                <button className="btn-primary">
                    Get Started
                </button>
                <button onClick={() => navigate('/bookstore')} className="btn-primary-outline">
                    Discover
                </button>
            </div>
            <div className="img">
                <img src="src/assets/book-landing-page.png" alt="book-store" className="img-book" />
            </div>
        </div>
        </>
    )
}

export default Home;