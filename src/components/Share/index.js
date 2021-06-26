import styles from './styles.module.scss'
import { FaRegImages, FaMapMarkerAlt, FaTags, FaRegSmileWink} from "react-icons/fa";

const Share = () => {
    return (
        <div className={styles.share}>
            <div className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <img className = {styles.shareProfileImg} 
                    src = "/assets/person/profile_user5.jpg" alt = "user" />
                    <input type = "text" 
                    placeholder = "What's in your mind ?"
                    className={styles.shareInput}/>
                </div>
                <hr className={styles.shareHr} />
                <div className={styles.shareBottom}>
                    <div className={styles.shareOptions}>
                        <div className ={styles.shareOption}>
                            <FaRegImages className={styles.shareIcon}/>
                            <span className = {styles.shareOptionText}>Photo or Video</span>
                        </div>
                        <div className ={styles.shareOption}>
                            <FaTags className={styles.shareIcon}/>
                            <span className = {styles.shareOptionText}>Tag</span>
                        </div>
                        <div className ={styles.shareOption}>
                            <FaMapMarkerAlt className={styles.shareIcon}/>
                            <span className = {styles.shareOptionText}>Location</span>
                        </div>
                        <div className ={styles.shareOption}>
                            <FaRegSmileWink className={styles.shareIcon}/>
                            <span className = {styles.shareOptionText}>Emojis</span>
                        </div>
                    </div>
                    <button className = {styles.shareButton}>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
