import styles from "./styles.module.scss";
import OptionList from './OptionList/index';
import Widget from '../AddUser/Widget/Widget'


const Sidebar = ({profile}) => {
    return (
        <div className ={styles.sidebar}>
            <div className ={styles.sidebarWrapper}>
            {profile ? <OptionList /> : <Widget /> }
            </div>
        </div>
    )
}

export default Sidebar;