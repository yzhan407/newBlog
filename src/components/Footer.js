import React from 'react';
import earth from '../earth.png';
import './Footer.css';
class Footer extends React.Component{
  constructor(props){
    super(props);
    this.handleScrollEvent=this.handleScrollEvent.bind(this);
    this.handleResize=this.handleResize.bind(this);
    this.state={
      rotation: 0,
    }
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
    switch(Math.round(window.pageYOffset/500)){
      case 0:
        this.setState({
          rotation: 0,
        });
        break;
      case 1:
        this.setState({
          rotation: 72,
        });
        break;
      case 2:
        this.setState({
          rotation: 144,
        });
        break;
      case 3:
        this.setState({
          rotation: 216,
        });
        break;
      case 4:
        this.setState({
          rotation: 288,
        });
        break;
      default:
        this.setState({
          rotation: 0,
        });
      break;
    }
  };
  render(){
    return(
      <div className="footer-main">
        <img className={'earth-img-'+this.state.rotation} ref="image0" src={earth} alt="earthImage" onScroll={this.handleScrollEvent }/>
      </div>
    )
  }
}

export default Footer;