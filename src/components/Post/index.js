import styles from './styles.module.scss';
import { FaEllipsisV, FaRegHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const Post = () => {
    return (
        <div className = {styles.post}>
            <div className = {styles.postWrapper}>
                <div className = {styles.postTop}>
                    <div className = {styles.postTopLeft}>
                        <img src = "assets/person/profile_user4.jpg" 
                        alt = "user"
                        className ={styles.postProfileImg}/>
                        <span className = {styles.postuserUsername}>Naira Gezhoyan</span>
                        <span className = {styles.postDate}>5 min ago</span>
                    </div>
                    <div className = {styles.postTopRight}>
                        <FaEllipsisV />
                    </div>
                </div>
                <div className = {styles.postCenter}>
                    <span className = {styles.postText}>Hey!</span>
                    <img className = {styles.postImg} src = "assets/post/1.jpeg"  alt = "post"/>
                </div>
                <div className = {styles.postButton}>
                    <div className = {styles.postButtonLeft}>
                    <AiOutlineLike className ={styles.likeIcon}/>
                    <FaRegHeart className ={styles.likeIcon}/>
                    <span className = {styles.postlikeCounter}>32 likes</span>
                    </div>
                    <div className = {styles.postButtonRight}>
                        <span className = {styles.postCommentText}>3 comments</span>
                    </div>
                </div>
                <div className = {styles.postTop}>
                    <div className = {styles.postTopLeft}>
                        <img src = "assets/person/profile_user4.jpg" 
                        alt = "user"
                        className ={styles.postProfileImg}/>
                        <span className = {styles.postuserUsername}>Naira Gezhoyan</span>
                        <span className = {styles.postDate}>5 min ago</span>
                    </div>
                    <div className = {styles.postTopRight}>
                        <FaEllipsisV />
                    </div>
                </div>
                <div className = {styles.postCenter}>
                    <span className = {styles.postText}>Hey!</span>
                    <img className = {styles.postImg} src = "assets/post/1.jpeg"  alt = "post"/>
                </div>
                <div className = {styles.postButton}>
                    <div className = {styles.postButtonLeft}>
                    <AiOutlineLike className ={styles.likeIcon}/>
                    <FaRegHeart className ={styles.likeIcon}/>
                    <span className = {styles.postlikeCounter}>32 likes</span>
                    </div>
                    <div className = {styles.postButtonRight}>
                        <span className = {styles.postCommentText}>3 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
