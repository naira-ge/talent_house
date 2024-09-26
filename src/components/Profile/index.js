import styles from './styles.module.scss'
import { connect } from "react-redux";
import ImageUpload from '../UserProfile/ImageUpload';

const Profile = (props) => {
    return (
    <div className={styles.profileRightTop}>
        <div className={styles.profileCover}>
        <img className={styles.profileCoverImg} 
        src ="assets/post/3.jpeg" alt ="cover"/>
        <div className={styles.profileUserImgContainer}>
        <img className={styles.profileUserImg} 
        src = { props.loginToHomepage.img_url } alt = "profile"/>
        </div>
        <ImageUpload/>
      </div>
      <div className={styles.profileInfo}>
            <h4 className={styles.profileInfoName}>{ props.loginToHomepage.username }</h4>
            <span className={styles.profileInfoDesc}>{ props.loginToHomepage.email }</span>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        loginToHomepage: state.loginToHomepage,
    }
} 

export default connect(mapStateToProps, null)(Profile);
