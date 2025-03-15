import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import { IoIosRemoveCircleOutline,IoIosAddCircleOutline} from "react-icons/io";
import {CiDiscount1} from "react-icons/ci";
import "./css/Bookdetails.css";
import { FaQrcode,FaCalendar,FaBook} from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

function Bookdetails(){
    const loaction = useLocation();
    const { book } = loaction.state || { book: 'No data received' };
    let [counter,setCount] = useState(0);
    let [totalpay,setTotalPay] = useState(0);

    const addBook = ()=>{
        counter += 1;
        setCount(counter);
        totalpay_set(counter);
    }

    const remBook = () => {
        counter -= 1;
       counter > 0 ? setCount(counter) : setCount(counter=0);
       totalpay_set(counter);
    }

    const totalpay_set = (counter)=>{
        setTotalPay(counter * book.price);
    }
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"60px"}}>
            <div className="book-details">
                <div>
                    <p style={{fontSize:"23px",fontWeight:"bold",marginBottom:"10px"}}>{book.title}</p>
                    <p style={{color:'gray',width:"100px",marginBottom:"3px"}}>{book.author}</p>
                    {book.discount && (
                        <div style={{alignItems:"center",display:"flex",height:"40px",marginTop:"15px",color:" #F59E0B"}}>
                        <CiDiscount1 style={{width:"25px",height:"25px"}}/> 
                        <p>{book.discount}%</p>
                    </div>
                )}
                <div style={{display:"flex",alignItems:"center",height:"65px"}}>
                    <FaQrcode style={{padding:"5px"}} />
                    <p>ISBN : {book.ISBN}</p>
                </div>
                <div style={{display:"flex",alignItems:"center",height:"50px"}}>
                    <FaCalendar style={{padding:"5px"}}/>
                    <p>year : {book.year}</p>
                </div>
                <div style={{display:"flex",alignItems:"center",height:"40px"}}>
                    <FaBook style={{padding:"5px"}} />
                    <p> Pages : {book.paperback}</p>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <RxUpdate style={{padding:"5px"}} />
                    <p>Edition : {book.edition}</p>
                </div>
                </div>
                <img className="book-cover" src={book.cover} alt={book.title} />
                <div>
            </div>
            </div>
            <div className="price-buy">
                <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10px"}}>
                        {book.discount ? (
                            <div className="prices-discount">
                            <span style={{color:"#9ca3af",textDecoration:"line-through",fontSize:"27px",marginRight:"15px",padding:"10px"}}>${book.price.toFixed(2)}</span>
                            <span style={{color:'#4F46E5',fontWeight:"bold",fontSize:"27px"}}>
                                ${(book.price * (1 - book.discount / 100)).toFixed(2)}
                            </span>
                            </div>
                        ):(
                            <span style={{fontWeight:"bold",fontSize:"25px",padding:'20px',color:"#4F46E5"}}>${book.price.toFixed(2)}</span>
                        )}
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <IoIosRemoveCircleOutline onClick={remBook} style={{width:"40px",height:"40px",color:"red"}} />
                        <p style={{padding:"10px",fontSize:"20px"}}>{counter.toString()}</p>
                        <IoIosAddCircleOutline onClick={addBook} style={{width:"40px",height:"40px",color:"green"}} />
                    </div>
                    </div>
                    <h3 className="total-pay">Total Pay : <span style={{color:"red"}}> $ {totalpay.toFixed(2)}</span>   </h3>
                    <div className="buy-now">
                        <button style={{width:"90%"}}>Buy Now</button>
                    </div>
                </div>
        </div>
        <div className="descp-book">
            <div className="Preface">
                <p style={{marginLeft:"15px",color:"white",}}>Preface</p> 
            </div>
            <div className="about-book">
                <p style={{letterSpacing:'1px',wordSpacing:"1px",fontSize:"18px"}}>{book.descripation}</p>    
            </div>    
        </div>
        </>
    )
}

export default Bookdetails;