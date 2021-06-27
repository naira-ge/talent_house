import "../style/popup.css";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeSignInPopup, openSignInPopup, openSignUpPopup, singUpToHomepage } from "../actions/index.js";

class SignUp extends Component {
   state = {
      wrongUsername: "",
      username: false,
      usernameValue: "",
      wrongEmail: "",
      emailValue: "",
      email: false,
      wrongPassword: "",
      passwordValue: "",
      password: false,
      wrongConfirmPassword: "",
      confirmPassword: false,
   }
   
   changeUsername = (e) => {  
        let regUser=/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){4,16}[a-zA-Z0-9]$/;
        if(!regUser.test(e.target.value)){
              this.setState({
                   wrongUsername: 'Username can only use letters,numbers, minimum length is 6 characters',
                   unsernameValue: e.target.value,
                   username: false,
           })
        } else {
              this.setState({
                   wrongUsername: "",
                   unsernameValue: e.target.value,
                   username: true,
         })
      }
   }

   changeEmail = (e) => {
      let mailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!e.target.value.match(mailFormat)) {
         this.setState({
            wrongEmail: "Email is incorrect",
            emailValue: e.target.value,
            email: false,
         })
      } else {
         this.setState({
            wrongEmail: "",
            emailValue: e.target.value,
            email: true,
         })
      }
   }

   changePassword = (e) => {
      let lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/g;
      if(e.target.value.length < 8) {
         this.setState({
            wrongPassword: "Password must contain at least 8 or more characters",
            passwordValue: e.target.value,
            password: false,
         })
      } else if(!e.target.value.match(lowerCaseLetters) || !e.target.value.match(upperCaseLetters) || !e.target.value.match(numbers)) {
         this.setState({
            wrongPassword: "Password must contain at least one number and one uppercase and lowercase letter",
            passwordValue: e.target.value,
            password: false,
         })
      } else {
         this.setState({
            wrongPassword: "",
            passwordValue: e.target.value,
            password: true,
         })
      } 
   }

   changeConfirmPassword = (e) => {
      if(e.target.value === "" || e.target.value !== this.state.passwordValue){
         this.setState({
            wrongConfirmPassword: "Password is incorrect",
            confirmPassword: false,
         })
      } else {
         this.setState({
            wrongConfirmPassword: "",
            confirmPassword: true,
         })
      }
   }

   handleSignInSubmit = (e) => {
      e.preventDefault();
      if(this.state.username && this.state.email && this.state.password && this.state.confirmPassword) {
         alert("success");
         this.props.singUpToHomepage(this.state.unsernameValue, this.state.emailValue, this.state.passwordValue);
      } else {
         this.setState({
            wrongConfirmPassword: "Datas are incorrect",
         })
         this.props.openSignUpPopup();
      }
   }

   render() {
     return(
        <div className="signUp-container">
           <div className="signUp-container-header">
              <span onClick={ this.props.closeSignInPopup }>X</span>
              <h1>Sign Up</h1>
           </div>
           <form className="form" onSubmit={ this.handleSignInSubmit }>
              <input type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.unsernameValue}></input>
                 <p>{this.state.wrongUsername}</p>
              <input type="text" placeholder="Email" onChange={this.changeEmail} value={this.state.emailValue}></input>
                 <p>{this.state.wrongEmail}</p>
              <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.passwordValue}></input>
                 <p>{this.state.wrongPassword}</p>
              <input type="password" placeholder="Confirm Password" onChange={this.changeConfirmPassword}></input>
                 <p>{this.state.wrongConfirmPassword}</p>
              <button className="btn">Sign Up</button>
           </form>
           <div className="signUp-container-footer">
               <p onClick={ this.props.openSignInPopup }>Already have an account? Sign in</p>
           </div>
       </div>
    )
   }  
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(
    {
       closeSignInPopup,
       openSignInPopup,
       openSignUpPopup,
       singUpToHomepage,
    },
       dispatch,
    )    
}

export default connect(null, mapDispatchToProps)(SignUp);