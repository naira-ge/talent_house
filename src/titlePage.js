import "./titlePage.css";
import Header from "../src/components/titlePageComponents/header/index.js";
import Content from "../src/components/titlePageComponents/content/index.js";
import Footer from "../src/components/titlePageComponents/footer/index.js";
import Popup from '../src/components/titlePageComponents/popup/index.js';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openSignUpPopup } from "../src/components/titlePageComponents/actions/index.js";

function TitlePage(props) {
  return (
    <div className="titlePage">
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