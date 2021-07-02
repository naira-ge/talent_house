import styles from './styles.module.scss';
import HomeRightbar from './HomeRightbar/index';
import ProfileRightbar from './ProfileRightbar';


const Rightbar = ({profile}) => {
    return (
        <div className ={styles.rightbar}>
            <div className ={styles.rightbarWrapper}>
            {profile ? <ProfileRightbar /> :<HomeRightbar /> }
            </div>
        </div>
    )
}

export default Rightbar;
