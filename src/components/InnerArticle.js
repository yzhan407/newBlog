import React from 'react';
import './InnerArticle.css';



function InnerArticle(props){
        return(
            <div className="inner-article">
                <a href={props.data.link}>
                    <div>
                        <p>{props.data.title}</p>
                    </div>
                </a>
            </div>
        )
    
}
    
export default InnerArticle;