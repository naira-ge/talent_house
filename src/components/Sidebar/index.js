import styles from "./styles.module.scss"
import { FaRss, FaConnectdevelop, FaUsers, FaBookmark, FaBriefcase,  FaMeetup, FaGraduationCap} from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className ={styles.sidebar}>
            <div className ={styles.sidebarWrapper}>
                <ul className ={styles.sidebarList}>
                    <li className = {styles.sidebarListItem}>
                        <FaRss className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Feed</span>
                    </li>
                    <li className = {styles.sidebarListItem}>
                        <FaBriefcase className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Job</span>
                    </li>
                    <li className = {styles.sidebarListItem}>
                        <FaConnectdevelop className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Geeks Chat</span>
                    </li>
                    <li className = {styles.sidebarListItem}>
                        <FaUsers className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Group</span>
                    </li>
                    <li className = {styles.sidebarListItem}>
                        <FaMeetup className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Events</span>
                    </li>
                    <li className = {styles.sidebarListItem}>
                        <FaGraduationCap className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Courses</span>
                    </li>
                    <li className = {styles.sidebarListItem}>
                        <FaBookmark className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> Bookmarks</span>
                    </li>
                </ul>
                <hr className ={styles.sidebarHr}/>
                <div className = {styles.sidebarUserWrapper}>
                <h4 className = {styles.sidebarUserTitle}>Online Users</h4>
                <div className = {styles.sidebarFriendWrapper}>
                <ul calassName = {styles.sidebarFriendList}>
                    <li className = {styles.sidebarFriend}>
                        <div className = {styles.profileImgContainer}>
                        <img className = {styles.sidebarProfileImg} src ="assets/person/profile_user1.jpg" alt = "user"/>
                        <span className ={styles.profileOnline}></span>
                        </div>
                        <span className = {styles.sidebarUserName}>Jane Doe</span>
                    </li>
                    <li className = {styles.sidebarFriend}>
                        <div className = {styles.profileImgContainer}>
                        <img className = {styles.sidebarProfileImg} src ="assets/person/profile_user1.jpg" alt = "user"/>
                        <span className ={styles.profileOnline}></span>
                        </div>
                        <span className = {styles.sidebarUserName}>Jane Doe</span>
                    </li>
                    <li className = {styles.sidebarFriend}>
                        <div className = {styles.profileImgContainer}>
                        <img className = {styles.sidebarProfileImg} src ="assets/person/profile_user1.jpg" alt = "user"/>
                        <span className ={styles.profileOnline}></span>
                        </div>
                        <span className = {styles.sidebarUserName}>Jane Doe</span>
                    </li>
                    <li className = {styles.sidebarFriend}>
                        <div className = {styles.profileImgContainer}>
                        <img className = {styles.sidebarProfileImg} src ="assets/person/profile_user1.jpg" alt = "user"/>
                        <span className ={styles.profileOnline}></span>
                        </div>
                        <span className = {styles.sidebarUserName}>Jane Doe</span>
                    </li>
                    <li className = {styles.sidebarFriend}>
                        <div className = {styles.profileImgContainer}>
                        <img className = {styles.sidebarProfileImg} src ="assets/person/profile_user1.jpg" alt = "user"/>
                        <span className ={styles.profileOnline}></span>
                        </div>
                        <span className = {styles.sidebarUserName}>Jane Doe</span>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;