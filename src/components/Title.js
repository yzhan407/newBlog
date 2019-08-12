import React from 'react';
import './Title.css';
import Mylogo from '../mylogo.svg';
class Title extends React.Component{
    render(){
        return(
            <div id="title">
                <img src={Mylogo} alt="mylogo" className="title-logo"/>
                <h1>Yifan Zhang</h1>
                <h6>何も捨てることができない人には、何も変えることはできないだろう  -- Shingeki no Kyojin 進撃の巨人</h6>
            </div>

        )
    }
}

export default Title;