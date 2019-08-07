import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends React.Component{
  state={
    update:0,
  }
componentDidMount(){
  if (this.props.updateInfo===1){
    this.setState({
      update:1,
    })
  }
}

  render(){

    
    return (
        <div className="sidebar">
          <div>
          <a id="envelope-icon"  href="mailto:yifanzhang47@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          </div>
          <div>
          <a id="github-icon" href="https://github.com/yzhan407">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
          <div>
          <a id="linkedin-icon" href="https://linkedin.com/in/eason-zhang-022312184/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          </div>
          
        </div>
    )
  }
};

export default Sidebar;