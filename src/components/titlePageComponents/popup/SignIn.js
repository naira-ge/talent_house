import "../style/popup.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeSignInPopup, openSignUpPopup, openSignInPopup, loginToHomepage } from "../actions/index.js";
import { Component } from "react";

class SignIn extends Component {
   state = {
      emailValue: "",
      emailMsg: "",
      email: false,
      passwordValue: "",
      passMsg: "",
      password: false,
   }

   changeEmailValue = (e) => {
      if(e.target.value === "") {
         this.setState({
            emailMsg: "Wrong Email",
            emailValue: "",
            email: false,
         }) 
      } else {
         this.setState({
            emailValue: e.target.value,
            emailMsg: "",
            email: true,
         })
      }
   }

   changePasswordValue = (e) => {
      if(e.target.value === "") {
         this.setState({
            passwordValue: "",
            passMsg: "Wrong password",
            password: false,
         })
      } else {
        this.setState({
           passwordValue: e.target.value,
           passMsg: "",
           password: true,
        })
     }
   }

   handleSignInSubmit = (e) => {
      e.preventDefault();
      if (this.state.email && this.state.password) {
         this.props.loginToHomepage(this.state.emailValue, this.state.passwordValue)
      } else {
         this.setState({
            passMsg: "Wrong Email or Password",
            emailMsg: "",
         })
         this.props.openSignInPopup()
      }
   }

   render() {
    return(
        <div className="signUp-container">
           <div className="signUp-container-header">
              <span onClick={ this.props.closeSignInPopup }>X</span>
              <h1>Sign In</h1>
           </div>
           <form className="form" onSubmit={ this.handleSignInSubmit }>
              <input type="text" placeholder="Email" onChange={ this.changeEmailValue } value={ this.state.emailValue }></input>
                 <p>{ this.state.emailMsg }</p>
              <input type="password" placeholder="Password" onChange={ this.changePasswordValue} value={ this.state.passwordValue }></input>
                 <p>{ this.state.passMsg }</p>
              <button className="btn">Sign In</button>
           </form>
           <div className="signUp-container-footer">
               <p onClick={ this.props.openSignUpPopup }>Don't have an account yet? Sign Up</p>
           </div>
       </div>
    )
   }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(
    {
       closeSignInPopup,
       openSignUpPopup,
       openSignInPopup,
       loginToHomepage,
    },
       dispatch,
    )    
}

export default connect(null, mapDispatchToProps)(SignIn);