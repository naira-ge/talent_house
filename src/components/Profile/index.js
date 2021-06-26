import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Feed from '../Feed/index'
import Rightbar from '../Rightbar/index'
import Footer from '../Footer/index'
import styles from './styles.module.scss'

const Profile = () => {
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
            src ="assets/person/profile_user5.jpg" alt = "profile"/>
            </div>
            <div className={styles.profileInfo}>
                <h4 className={styles.profileInfoName}>Naira Gezhoyan</h4>
                <span className={styles.profileInfoDesc}>I like front-end</span>
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

export default Profile
