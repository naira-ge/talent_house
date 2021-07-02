import React, {useState} from'react';
import styles from './styles.module.scss';
import images from '../AddUser/Carouseldata';
import ImageUpload from './ImageUpload';


const UserProfile = () => {
    const [currImg, setCurrImg]=useState(0);

    return (
    <div className={styles.profileRightTop}>
        <div className={styles.profileCover}>
        <img className={styles.profileCoverImg} 
        src ={images[currImg].backimg} alt ="cover"/>
        <div className={styles.profileUserImgContainer}>
        <img className={styles.profileUserImg} 
        src = {images[currImg].img } alt = "profile"/>
        </div>
        <ImageUpload/>
      </div>
      <div className={styles.profileInfo}>
            <h4 className={styles.profileInfoName}>{ images[currImg].title }</h4>
            <p className={styles.profileInfoName}>{ images[currImg].prof }</p>
            <span className={styles.profileInfoDesc}>{images[currImg].country}</span>
      </div>
    </div>
    )
}
 

export default UserProfile;
