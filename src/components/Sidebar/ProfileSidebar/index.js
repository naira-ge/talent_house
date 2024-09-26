import styles from '../styles.module.scss';

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

export default ProfileRightbar;