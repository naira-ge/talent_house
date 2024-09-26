import Profile from '../../components/Profile/index';
import Navbar from '../../components/Navbar/index';
import Sidebar from '../../components/Sidebar/index';
import Feed from '../../components/Feed/index';
import Rightbar from '../../components/Rightbar/index';
import Footer from '../../components/Footer/index';
import Notes from '../../components/Notes/Notes'
import styles from './styles.module.scss';

export default function UserProfile() {
    return (
      <>
    <Navbar />
    <div className={styles.profile}>
    <Rightbar profile/>
     <div className={styles.profileRight}>
       <div>
        <Profile/>
        <Feed />
        </div>
        <div>
        <Sidebar profile/>
        <Notes />
        </div>
     </div>
    </div>
    <Footer />
    </>)
  }
  