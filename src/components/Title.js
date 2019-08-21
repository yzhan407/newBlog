import React from 'react';
import './Title.css';
import Mylogo from '../mylogo.svg';

class Title extends React.Component{
    render(){

        return(
            <div id="title">
                <img src={Mylogo} alt="mylogo" className="title-logo"/>
                <a className="porfolio-link" href="http://www.yifanzhang47.com/myplace/porfolio/build/index.html" target="_blank" rel="noopener noreferrer">Porfolio</a>
                <h1>Yifan Zhang</h1>
                <h6>何も捨てることができない人には、何も変えることはできないだろう  -- Shingeki no Kyojin 進撃の巨人</h6>
                <a className="blog-git-link" href="https://github.com/yzhan407/newBlog">Github Page of This Blog </a>
            </div>

        )
    }
}

export default Title;