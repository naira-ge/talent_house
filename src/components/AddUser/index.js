import React, {useState} from'react';
import { images } from './Carouseldata';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import "./UserHomePage";
import { Link} from "react-router-dom";
import './style.css';


function Users(){
    const [currImg, setCurrImg] = useState(0);
    const [showPopUp, setShowPopUp] = useState(false);

    const PopUpTable = ({text})=>{ 
        return(
          <div className = "popUpTable">{text}</div>
        )
        };

    const openPopUp = ()=>{
        setShowPopUp(!showPopUp)
    }
    return(
        <div className="carousel">
            <p className = "users">OUR USERS</p>
        <div className= "carouselInner"
      style={{backgroundImage:`url(${images[currImg].img})`}}
    >
        </div>
        <div className="center">
            <Link to="/profile">
            <h1 >{images[currImg].title}</h1>
            </Link>
            <h1 className = "prof">{images[currImg].prof}</h1>
     <button className="about" onClick = {openPopUp} >About</button>
     {showPopUp ? <PopUpTable  className = "popUpTable"    text = {images[currImg].text}/> : null}
     <div className="left" onClick = {()=>{
            currImg > 0 && setCurrImg(currImg - 1);
        }}>
            <FaAngleLeft/>
            </div> 
        <div className="right" onClick = {()=>{
            currImg < images.length - 1 && setCurrImg(currImg + 1);
        }}>
            <FaAngleRight/>
            </div>     
            </div> 

        </div>
    );
    }

export default Users
