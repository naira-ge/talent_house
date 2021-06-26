import React, {useState} from 'react';
import { GoLocation } from "react-icons/go";
import { RiBuilding2Line } from "react-icons/ri";


function JobFeed({ id, company, company_logo, location, title, description, url, company_url, created_at, how_to_apply, removeFeed}) {
    const [readMore, setReadMore] = useState(false);

    let desc = `<span class="description-info">${description}</span>`;
    const short = `<span class="description-info">${desc.substring(0, 200)}...</span>`;
    const descInfo = <span dangerouslySetInnerHTML={{ __html: desc }}></span>;
    const descShort = <span dangerouslySetInnerHTML={{ __html: short }}></span>;

    return (<article className="single-tour" key = {id}> 
        <img src={company_logo} alt={company} />
        <footer>
            <div className="company-info">
                <div>
                <h4><a href={url} target="_blank" rel="noreferrer">{title}</a></h4>
                <p id="company"><a href={company_url} target="_blank" rel="noreferrer"><RiBuilding2Line /> {company}</a></p>
                </div>
                <div className="location">
                <h4 className="company-price"><GoLocation/> {location}</h4>
                <h6>Created: {created_at.slice(0,10)}</h6>
                </div>
            </div>
            {readMore ? descInfo : descShort}
            <button className = "show-btn" onClick = {()=> setReadMore(!readMore)}>
                {readMore ? ' show less' : ' read more'}
            </button>
            
            <div className="interest-btn">
                <button className="delete-btn" onClick ={() => removeFeed(id)}>Not interested</button>
                <a className="accept-btn" href ={url} target="_blank" rel="noreferrer">Interested</a>
            </div>

        </footer>
    </article>);
}

export default JobFeed;