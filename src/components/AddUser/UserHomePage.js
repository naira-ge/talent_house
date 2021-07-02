import { images } from './Carouseldata';
import React, {useState} from'react';
import "./style.css";



function UserHomePage(){
const [currImg, setCurrImg]=useState(0)
    
    return(
        <div className="wrapper">
<div className= "img1" 
      style={{backgroundImage:`url(${images[currImg].backimg})`}}>
         
</div>
        <div className= "img2"
      style={{backgroundImage:`url(${images[currImg].img})`}}>
       
       </div>
       
{/*<ImageUpload/>*/}
        <div className ="userinfo"> 
        <h2>{images[currImg].title}</h2>
        <h2>{images[currImg].prof}</h2>
        <h2>{images[currImg].country}</h2>
         </div>
         <div className="followers">
             <ul>
                 501
                 1400
                 950
             </ul>
             <ul className="secondul">
               Post
               Following
               Followers
             </ul>
             
         </div>
      
        <div className = "skills"><span>SKILLS</span><br/>{images[currImg].text}</div>
        </div>
    );
    }

export default UserHomePage