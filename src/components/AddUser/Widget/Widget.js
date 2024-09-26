import React, {useState} from 'react';
import people from "./data_widgets";
import styles from './styles.module.scss';
import { Link} from "react-router-dom";
import images  from '../Carouseldata';

import {FaJsSquare, FaChevronRight, FaChevronLeft, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Widget = () =>{
    const [index, setIndex] = useState(0);
    //const {name, job, image, text, id} = images;

    const checkNumber = (number) => {
        if(number > images.length - 1){
            return 0;
        }
        if(number < 0){
            return images.length-1;
        }
        return number;
    }

    const nextPerson = () =>{
       setIndex((index) => {
           let newIndex = index + 1;
           return checkNumber(newIndex);
       });
    }

    const prevPerson = () =>{
        setIndex((index) =>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * images.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }

        return setIndex(checkNumber(randomNumber));
    }

    function removePerson(id){
        let newPeople = images.filter((people) => people.id !== id);
    }

    return (<article className = {styles.review}>
        <div className = {styles.imgContainer}>
            <img src = {images[index].img} alt = {images[index].name} className ={styles.personImg} />
            <span className = {styles.quoteIcon}>
                <FaJsSquare />
            </span>
            </div>
            <div className = {styles.userInfo}>
            <Link to="/user-profile">
            <h4 className = {styles.author}>{images[index].title}</h4>
            </Link>
            <p className = {styles.job}>{images[index].prof}</p>
            </div>
            <p className = {styles.info}>
            <span className = {styles.quoteIconText}>
              <FaQuoteLeft />
            </span>
                {images[index].text}
            <span className = {styles.quoteIconText}>
              <FaQuoteRight />
            </span>
                </p>
            <footer className = {styles.reviewBtnContainer}> 
                <div className = {styles.buttonContainer}>
                <button className = {styles.prevBtn} onClick = {()=>{
            index < images.length - 1 && setIndex(index + 1);
        }}>
                    <FaChevronLeft />
                </button>
                <button className = {styles.nextBtn} onClick = {()=>{index > 0 && setIndex(index - 1)}} >
                    <FaChevronRight />
                </button>
                </div>

                <div className = {styles.buttonContainerRandom}>
                <button className = {styles.pass} onClick = {randomPerson}> pass </button>
                <button className = {styles.connect} onClick = {randomPerson}>connect</button>
                {/*"A different language is a different vision of life." <em>Fellini</em>*/}
                </div>
            </footer>
    </article>)
}

export default Widget;