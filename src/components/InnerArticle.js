import React from 'react';
import './InnerArticle.css';


// here UseContext has to be in {}
function InnerArticle(props){
    console.log(props)
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