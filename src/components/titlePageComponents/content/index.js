import "../style/content.css";
import ContentTop from "./ContentTop";
import ContentBottom from "./ContentBottom";

const Content = () => {
    return(
        <div className="content-wrapper">
            <ContentTop />
            <ContentBottom />
        </div>
    )
}

export default Content;