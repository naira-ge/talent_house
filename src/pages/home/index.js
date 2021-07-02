import Navbar from '../../components/Navbar/index'
import Sidebar from '../../components/Sidebar/index'
import JobFeed from '../../components/JobFeed/index'
import Rightbar from '../../components/Rightbar/index'
import Footer from '../../components/Footer/index'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.homeContainer}>
    <Rightbar />
    <JobFeed />
    <Sidebar />
    </div>
    <Footer />
    </>
  );
}


