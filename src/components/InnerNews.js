import React from 'react';
import './InnerNews.css';


function InnerNews(props){
        console.log(props.data.url);
        return(
            <div className="inner-news">
                <a href={props.data.url}>
                    <div>
                        <p>{props.data.title}</p>
                    </div>
                </a>
            </div>
        )
    
}
    
export default InnerNews;