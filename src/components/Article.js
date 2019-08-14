import React from 'react';
import InnerArticle from './InnerArticle';
import './Article.css';
import cf from '../Crazyflie2-1.svg';


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
            <div className="first-article">
                <div className="first-article-container">
                    <div id="first-article-leftside">
                        <p className="blog-title">Blog</p>
                        {tags}
                    </div>
                    <div id="first-article-rightside">
                        <p className="news">News in US today</p>
                    </div>
                </div>
                
            </div>
            <div className="second-article">
                <div className="second-article-container">
                    <p className="thesis-title">Robotic thesis</p>
                    <p className="thesis-title-2">Experimental Implementation of Distributed Time-Varying Optimization Algorithms Using Crazyflie Platform</p>
                    <iframe src="https://www.youtube.com/embed/VV46fOYWaM0" name="youtube-video" scrolling="no" title="youtube showcase"></iframe>
                    <div className="second-article-description">
                        <p>Using crazyflie with VICON camera , to perform trajectory tracking. The crazyflie each has an optimal trajectory, though all the trajectory have similar shape, all of them should form as a formation and move as a team.</p>
                        <img src={cf} alt="crazyflie" id="thesis-img"></img>
                    </div>
                    <div className="thesis-abstract">
                    <p className="abstract">Abstract</p>
                    <p>Formation control and trajectory following using distributed optimization algorithms is validated in this thesis. The crazyflie platform is used for validating the algorithms. Then the implementations on different algorithms and different numbers of robots take place.  Firstly, distributed optimization algorithm with general time-varying cost functions is implemented to make the crazyflies follow a line trajectory in a square formation.  Then another distributed optimization algorithm with time-varying cost functions and nonidentical hessian is used to get the crazeflies follow a circle trajectory in a square formation. After achieving relatively high accuracy of implementation of the two distributed optimization algorithms, a target tracking task is performed to prove the feasibility of the algorithms. In all, this thesis explores a new way for distributed optimization algorithms on multi-agent systems such as UAVs.</p>
                    </div>
                </div>
            </div>
            <div className="third-article">
                <div className="third-article-container">
                    <p>
                        how this site is built?
                    </p>
                </div>

            </div>
        </div>
    )
}


export default Article;