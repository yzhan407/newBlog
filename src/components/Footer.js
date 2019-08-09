import React from 'react';
import earth from '../earth.png';
import './Footer.css';
class Footer extends React.Component{
  constructor(props){
    super(props);
    this.handleScrollEvent=this.handleScrollEvent.bind(this);
  }

  state={
    scrolled: 0,
  };
  componentDidMount(){
    window.addEventListener("scroll",this.handleScrollEvent,true);
  };
  componentWillUnmount(){
    window.removeEventListener("scroll",this.handleScrollEvent);
  };
  handleScrollEvent(){
    console.log(window.pageYOffset);
  };
  render(){
    return(
      <div className="footer-main">
        <img className="earth-img" ref="image0" src={earth} alt="earthImage" onScroll={this.handleScrollEvent }/>
      </div>
    )
  }
}

export default Footer;