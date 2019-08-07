import React from 'react';
import InnerArticle from './InnerArticle';
import './Article.css';


function Article(props){
    console.log(props)
    let tags=[]
    for (let i=0;i<props.articlenums;i++){
        tags.push(
            <InnerArticle key={i} data={props.data[i]}></InnerArticle>
        )
    }
    
    return(
        <div className="outer-article">
            {tags}
        </div>
    )
}


export default Article;