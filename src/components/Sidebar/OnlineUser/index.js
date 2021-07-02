import React from 'react';
import styles from '../styles.module.scss'

const OnlineUsers = () => {
    return (
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
    )
}

export default OnlineUsers;