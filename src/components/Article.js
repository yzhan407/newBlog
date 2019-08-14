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
            <div className="first-article">
                <div>
                    {tags}
                </div>
                
            </div>
            <div className="second-article">
                <div>

                
                    <p className="thesis-title">Robotic thesis</p>
                    <p className="thesis-title-2">Experimental Implementation of Distributed Time-Varying Optimization Algorithms Using Crazyflie Platform</p>
                    <iframe src="https://www.youtube.com/embed/VV46fOYWaM0" name="youtube-video" scrolling="no" title="youtube showcase"></iframe>
                    <div className="thesis-abstract">
                    <p className="abstract">Abstract</p>
                    <p>Formation control and trajectory following using distributed optimization algorithms is validated in this thesis. The crazyflie platform is used for validating the algorithms. Then the implementations on different algorithms and different numbers of robots take place.  Firstly, distributed optimization algorithm with general time-varying cost functions is implemented to make the crazyflies follow a line trajectory in a square formation.  Then another distributed optimization algorithm with time-varying cost functions and nonidentical hessian is used to get the crazeflies follow a circle trajectory in a square formation. After achieving relatively high accuracy of implementation of the two distributed optimization algorithms, a target tracking task is performed to prove the feasibility of the algorithms. In all, this thesis explores a new way for distributed optimization algorithms on multi-agent systems such as UAVs.</p>
                    </div>
                </div>
            </div>
            <div className="third-article">
                <div>
                    <p>
                        how this site is built?
                    </p>
                </div>

            </div>
        </div>
    )
}


export default Article;