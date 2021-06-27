import "../style/header.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openSignUpPopup, openSignInPopup } from "../actions/index.js";

const Header = (props) => {
    return(
        <div className="header">
            <div className="logo">
                <p>Talent House</p>
            </div>
            <div className="signIn_signUp_container">
                <p  onClick={ props.openSignUpPopup }>Sign Up</p>
                <span>/</span>
                <p onClick={ props.openSignInPopup }>Sign In</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
     {
        openSignUpPopup,
        openSignInPopup,
     },
        dispatch,
     )    
}

export default connect(null, mapDispatchToProps)(Header);