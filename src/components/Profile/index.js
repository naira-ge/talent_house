import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Feed from '../Feed/index'
import Rightbar from '../Rightbar/index'
import Footer from '../Footer/index'
import styles from './styles.module.scss'
import { connect } from "react-redux";

const Profile = (props) => {
    return (
    <>
    <Navbar />
    <div className={styles.profile}>
    <Sidebar />
     <div className={styles.profileRight}>
        <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
            <img className={styles.profileCoverImg} 
            src ="assets/post/3.jpeg" alt ="cover"/>
            <img className={styles.profileUserImg} 
            src = { props.loginToHomepage.img_url } alt = "profile"/>
            </div>
            <div className={styles.profileInfo}>
                <h4 className={styles.profileInfoName}>{ props.loginToHomepage.username }</h4>
                <span className={styles.profileInfoDesc}>{ props.loginToHomepage.email }</span>
            </div>
        </div>
        <div className={styles.profileRightBottom}>
        <Feed />
        <Rightbar profile/>
        </div>
     </div>
    </div>
    <Footer />
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        loginToHomepage: state.loginToHomepage,
    }
} 

export default connect(mapStateToProps, null)(Profile);
