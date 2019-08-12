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
      winHeight:0,
      seg: 0,
      action: 0,
    }
  }

  state={
    scrolled: 0,
  };
  componentDidMount(){
    window.addEventListener("scroll",this.handleScrollEvent,true);
    window.addEventListener("resize",this.handleResize);
  };
  componentWillUnmount(){
    window.removeEventListener("scroll",this.handleScrollEvent);
    window.removeEventListener("resize",this.handleResize);
  };
  handleScrollEvent(){
    const segment=Math.round(window.pageYOffset/500);
    switch(segment){
      case 0:
        if(segment !== this.state.seg){
          if (segment < this.state.seg){
            this.setState({
              rotation:0,
              action: 0,
              seg : segment,
            });
          }
          else{
            this.setState({
              rotation:0,
              action: 1,
              seg : segment,
            })
          };
        }
        break;
      case 1:
        if(segment !== this.state.seg){
          if (segment < this.state.seg){
            this.setState({
              rotation:72,
              action: 0,
              seg : segment,
            });
          }
          else{
            this.setState({
              rotation:72,
              action: 1,
              seg : segment,
            })
          };
        }
        
        break;
      case 2:
        if (segment !== this.state.seg){
          if (segment < this.state.seg){
            this.setState({
              rotation:144,
              action: 0,
              seg : segment,
            });
          }
          else{
            this.setState({
              rotation:144,
              action: 1,
              seg : segment,
            })
          };
        }
        
        break;
      case 3:
        if (segment !== this.state.seg){
          if (segment < this.state.seg){
            this.setState({
              rotation:216,
              action: 0,
              seg : segment,
            });
          }
          else{
            this.setState({
              rotation:216,
              action: 1,
              seg : segment,
            })
          };
        }
        
        break;
      case 4:
        if (segment !== this.state.seg){
          if (segment < this.state.seg){
            this.setState({
              rotation:288,
              action: 0,
              seg : segment,
            });
          }
          else{
            this.setState({
              rotation:288,
              action: 1,
              seg : segment,
            })
          };
        }
        
        break;
      default:
        if(segment !== this.state.seg){
          if (segment < this.state.seg){
            this.setState({
              rotation:0,
              action: 0,
              seg : segment,
            });
          }
          else{
            this.setState({
              rotation:0,
              action: 1,
              seg : segment,
            })
          };
        }
      break;
    }
  };
  handleResize(){
  };
  render(){
    return(
      <div className="footer-main">
        <img className={'earth-img-'+this.state.rotation+'-'+this.state.action} ref="image0" src={earth} alt="earthImage" onScroll={this.handleScrollEvent }/>
      </div>
    )
  }
}

export default Footer;