import styles from './styles.module.scss';
import Link from 'react-router-dom/Link';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handlelogOut } from "../titlePageComponents/actions/index.js";
import { FaSearch, FaRegUser, FaFacebookMessenger, FaRegBell, FaHubspot } from "react-icons/fa";

const Navbar = ( props ) => {
        return (
            <div className = {styles.navContainer}>
                <div className = {styles.navLeft}>
                <Link to="/">
                <span className = {styles.logo}><FaHubspot /> TalentHouse</span>
                </Link>
                </div>
                <div className = {styles.navCenter}>
                    <div className = {styles.searchbar}>
                        <FaSearch className = {styles.searchIcon}/>
                        <input placeholder = "Search" type = {styles.searchInput}></input>
                    </div>
                </div>
                <div className = {styles.navRight}>
                <div className ={styles.navMenu}>
                <Link to="/">
                <div>Job</div>
                </Link>
                <div onClick={ props.handlelogOut }>Log Out</div>
                {/* <Link to="/login">
                <div>Login</div>
                </Link>
                <Link to="/signup">
                <div>SignUp</div>
                </Link> */}
                </div>
                    <div className = {styles.navIcons}>
                        <div className={styles.navIconItem}>
                            <FaRegUser />
                            <span className= {styles.navIconBadge}>1</span>
                        </div>
                        <div className={styles.navIconItem}>
                            <FaFacebookMessenger />
                            <span className= {styles.navIconBadge}>2</span>
                        </div>
                        <div className={styles.navIconItem}>
                            <FaRegBell />
                            <span className= {styles.navIconBadge}>3</span>
                        </div>
                </div>
                <Link to="/profile">
                <img src ="assets/person/default_man.jpg" alt = "user" className={styles.navImg} />
                </Link>
                </div>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            handlelogOut   
        },
        dispatch
    )
}
export default connect(null, mapDispatchToProps)(Navbar);
