import { connect } from "react-redux";
import Pages from "./Pages.js";
import TitlePage from "./titlePage.js";

const App = ( props ) => {
    return(
        <div>
           { !props.loginToHomepage.login ? <TitlePage /> : <Pages /> }
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        loginToHomepage: state.loginToHomepage
    }
}

export default connect(mapStateToProps, null)(App);