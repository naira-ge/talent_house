import Header from "../header/index.js";
import Content from "../content/index.js";
import Footer from "../footer/index.js";
import Popup from '../popup/index.js';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openSignUpPopup } from "../actions/index.js";
import styles from './styles.module.scss';

function TitlePage(props) {
  return (
    <div className={styles.titlePage}>
       <Header />
       <Content />
       <Footer />
       { props.popupHandler.openPopup ? <Popup /> : null }
    </div>
  )

}


const mapStateToProps = (state) => {
  return {
      popupHandler: state.popupHandler,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
   {
      openSignUpPopup
   },
      dispatch,
   )    
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);