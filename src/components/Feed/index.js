import styles from './styles.module.scss'
import Share from '../Share/index'
import Post from '../Post/index'

const Feed = () => {
    return (
        <div className ={styles.feed}>
            <div className ={styles.feedWrapper}>
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feed;
