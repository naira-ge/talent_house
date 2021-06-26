import styles from './styles.module.scss'
import { FaHotjar } from "react-icons/fa";

const HomeRightbar = () =>{
    return(
        <>
        <div className ={styles.jobsContainer}>
                    <img className ={styles.jobImg} src = "assets/job/logo.job.png" alt="jobs" />
                    <span className ={styles.jobsText}>
                    <FaHotjar /> <b>5</b> new positions for you
                    </span>
                    <div className = {styles.jobsWrapper}>
                <ul calassName = {styles.jobsList}>
                    <li className = {styles.companyContainer}>
                        <img className = {styles.companyLogo} src ="/logo512.png" alt = "user"/>
                        <div className = {styles.companyDesc}>
                        <h4 className = {styles.companyName}>My Compny Hero</h4>
                        <span className = {styles.position}>Front-End Developer</span>
                        </div>
                    </li>
                    <li className = {styles.companyContainer}>
                        <img className = {styles.companyLogo} src ="/logo512.png" alt = "user"/>
                        <div className = {styles.companyDesc}>
                        <h4 className = {styles.companyName}>My Compny Hero</h4>
                        <span className = {styles.position}>Front-End Developer</span>
                        </div>
                    </li>
                    <li className = {styles.companyContainer}>
                        <img className = {styles.companyLogo} src ="/logo512.png" alt = "user"/>
                        <div className = {styles.companyDesc}>
                        <h4 className = {styles.companyName}>My Compny Hero</h4>
                        <span className = {styles.position}>Front-End Developer</span>
                        </div>
                    </li>
                    <li className = {styles.companyContainer}>
                        <img className = {styles.companyLogo} src ="/logo512.png" alt = "user"/>
                        <div className = {styles.companyDesc}>
                        <h4 className = {styles.companyName}>My Compny Hero</h4>
                        <span className = {styles.position}>Front-End Developer</span>
                        </div>
                    </li>
                    <li className = {styles.companyContainer}>
                        <img className = {styles.companyLogo} src ="/logo512.png" alt = "user"/>
                        <div className = {styles.companyDesc}>
                        <h4 className = {styles.companyName}>My Compny Hero</h4>
                        <span className = {styles.position}>Front-End Developer</span>
                        </div>
                    </li>
                    <li className = {styles.companyContainer}>
                        <img className = {styles.companyLogo} src ="/logo512.png" alt = "user"/>
                        <div className = {styles.companyDesc}>
                        <h4 className = {styles.companyName}>My Compny Hero</h4>
                        <span className = {styles.position}>Front-End Developer</span>
                        </div>
                    </li>
                </ul>
                </div>
                    <button className = {styles.rightbarButton}>Show more</button>
                </div>
        </>
    )
}

const ProfileRightbar = () =>{
    return(<>
    <h4 className = {styles.rightbarTitle}>Information</h4>
    <div className = {styles.rightbarInfo}>
        <div className = {styles.rightbarInfoItem}>
            <span className = {styles.rightbarInfoKey}>Skills: </span>
            <span className = {styles.rightbarInfoValue}>JavaScript, React.js </span>
        </div>
        <div className = {styles.rightbarInfoItem}>
            <span className = {styles.rightbarInfoKey}>Experience year: </span>
            <span className = {styles.rightbarInfoValue}> 1 </span>
        </div>
        <div className = {styles.rightbarInfoItem}>
            <span className = {styles.rightbarInfoKey}>GitHub profile: </span>
            <span className = {styles.rightbarInfoValue}> naira-ge </span>
        </div>
    </div>
    <h4 className = {styles.rightbarTitle}>Followers</h4>
    <div className = {styles.rightbarFollowings}>
        <div className = {styles.rightbarFollowing}>
            <img src ="assets/person/profile_user2.jpg"  
            alt ="follower" className ={styles.rightbarFollowingImg}/>
            <span className ={styles.rightbarFollowingName}>Jon Mile</span>
        </div>
        <div className = {styles.rightbarFollowing}>
            <img src ="assets/person/profile_user2.jpg"  
            alt ="follower" className ={styles.rightbarFollowingImg}/>
            <span className ={styles.rightbarFollowingName}>Jon Mile</span>
        </div>
    </div>
    </>)
}

const Rightbar = ({profile}) => {
    
    return (
        <div className ={styles.rightbar}>
            <div className ={styles.rightbarWrapper}>
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
