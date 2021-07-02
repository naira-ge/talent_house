import React from 'react';
import styles from '../styles.module.scss';
import { FaGithub, FaConnectdevelop, FaUsers, FaBookmark,  FaMeetup, FaGraduationCap} from "react-icons/fa";

const OptionList = () => {
    return (
        <>
        <ul className ={styles.sidebarList}>
                    <li className = {styles.sidebarListItem}>
                        <FaGithub className = {styles.sidebarIcon}/>
                        <span className = {styles.sidebarListItemText}> GitHub</span>
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
                        <span className = {styles.sidebarListItemText}> Bookmark</span>
                    </li>
                </ul>
                </>
    );
}

export default OptionList;
