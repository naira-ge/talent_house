import React, { useState } from 'react';
import styles from './styles.module.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handlelogOut } from "../titlePageComponents/actions/index.js";
import { FaRegImages, FaMapMarkerAlt, FaTags, FaRegSmileWink, FaShare} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from '../../features/posts/postsSlice';

const Share = (props) => { 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
  
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user)
  
    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setUserId(e.target.value)
  
    const onSavePostClicked = () => {
    if (title && content) {
        dispatch(postAdded(title, content, userId))
        setTitle('')
        setContent('')
    }
}

const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

    return (
        <section className={styles.share}>
            <form className={styles.shareWrapper}>
                <div className={styles.shareTop}>
                    <div className = {styles.imageContainer}>
                    <img className = {styles.shareProfileImg} 
                    src = { props.loginToHomepage.img_url } alt = "user" />
                    </div>
            <div className={styles.shareInput}>
                <div className={styles.postTitle}>
                    <input 
                    type = "text" 
                    id="postTitle"
                    name="postTitle"
                    placeholder="Title"
                    value={title}
                    onChange={onTitleChanged}/>
                    <span>
                    <label htmlFor="postAuthor">Choose Company </label>
                    <select id="postAuthor"
                    value={userId} 
                    onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                    </select>
                    </span>
                </div>
                <textarea
                id="postContent"
                name="postContent"
                placeholder="What's on your mind?"
                value={content}
                onChange={onContentChanged}/>
            </div>
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
                    <button 
                    className = {styles.shareButton}
                    onClick={onSavePostClicked} disabled={!canSave}>
                    <FaShare />
                    </button>
                </div>
            </form>
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        loginToHomepage: state.loginToHomepage,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            handlelogOut   
        },
        dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Share);
