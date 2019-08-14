import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Article from './components/Article';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';




class App extends Component {
  state={
    Info: "hi i am here",
    data:[],
    l:undefined,
    updateInfo: 0,
    today: Date(),
  }

  // there needs to be () around res, and res is an object consists of data ,status etc.
  
  componentDidMount(){
    axios.get(`http://www.yifanzhang47.com/wp-json/wp/v2/posts`)
      .then((res)=>{
        let temp=[];
        for(let i=0;i<res.data.length;i++){
          temp.push({
            title:res.data[i].title.rendered,
            content:res.data[i].excerpt.rendered,
            time:res.data[i].modified,
            link:res.data[i].guid.rendered,
            slug:res.data[i].slug
          })
          };
          this.setState({
            data:temp,
            l:res.data.length,
            updateInfo:1
        })
      })
    
  }



  render() {
    return (
      <div >
        <Title ></Title>
          <Article articlenums={this.state.data.length} data={this.state.data}></Article>
          <Sidebar updateInfo={this.state.updateInfo}/>
          <Footer />
      </div>
    );
  }
}

export default App;


