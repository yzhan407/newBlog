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
    news:[],
    newsLength:0,
  }

  // there needs to be () around res, and res is an object consists of data ,status etc.
  
  componentDidMount(){
    axios.all([
      axios.get(`http://www.yifanzhang47.com/wp-json/wp/v2/posts`),
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d0dc8443dfdd45e0b01b4e15b237b688&pageSize=70`)
    ])
      .then(axios.spread((res,res2)=>{
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
        let newTemp=[];
        for(let j=0;j<res2.data.articles.length;j++){
          newTemp.push(res2.data.articles[j])
        };
        this.setState(
          {
            newsLength: res2.data.articles.length,
            news: newTemp,
            data:temp,
            l:res.data.length,
            updateInfo:1
          }
        )
        console.log(newTemp);
      }))
        
  /*  axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d0dc8443dfdd45e0b01b4e15b237b688&pageSize=70')
      .then((res2)=>{
        let newTemp=[];
        for(let j=0;j<res2.data.articles.length;j++){
          newTemp.push(res2.data.articles[j])
        };
        this.setState(
          {
            newsLength: res2.data.articles.length,
            news: newTemp,
          }
        )
      })*/
    
  }



  render() {
    return (
      <div >
        <Title ></Title>
          <Article articlenums={this.state.data.length} data={this.state.data} news={this.state.news} newsLength={this.state.newsLength}></Article>
          <Sidebar updateInfo={this.state.updateInfo}/>
          <Footer />
      </div>
    );
  }
}

export default App;


