import styles from './styles.module.scss';
import { FaEllipsisV, FaRegHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import {PostsList} from '../../features/posts/PostsList';
import {EditPostForm} from '../../features/posts/EditPostForm';
import {SinglePostPage} from '../../features/posts/SinglePostPage';

import { useSelector } from 'react-redux'

import { PostAuthor } from '../../features/posts/PostAuthor'
import { TimeAgo } from '../../features/posts/TimeAgo'
import { ReactionButtons } from '../../features/posts/ReactionButtons'

/*<div className = {styles.postTop}>
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
                </div>*/

const Post = () => {
    const posts = useSelector((state) => state.posts)

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => {
        return (
        <div className = {styles.post} key={post.id}>
        <div className = {styles.postWrapper}>
        <article className = {styles.postTopLeft} >
             <div className = {styles.postTitle}>
              <h3 className = {styles.postTitleName}>{post.title}</h3>
              <TimeAgo className = {styles.postDate} timestamp={post.date} />
            </div>
            <span className ={styles.place}>🏢  <PostAuthor className = {styles.postuserUsername} userId={post.user} /></span>
            <div className = {styles.postCenter}>
                <div className = {styles.postText}>
                {post.content.substring(0, 100)}
                </div>
            </div>
            <div className = {styles.postButton}>
            <ReactionButtons post={post} />
            </div>
        </article>
        </div>
        </div>
        )
    })
    

    return (
    <>
    {renderedPosts}
    </>);
}

export default Post;
