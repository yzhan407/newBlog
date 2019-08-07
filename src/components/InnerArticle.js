import React from 'react';
import './InnerArticle.css';


// here UseContext has to be in {}
function InnerArticle(props){
    console.log(props)
        return(
            <div className="inner-article">
                <div>
                    {props.data.title}
                </div>
            </div>
        )
    
}
    
export default InnerArticle;