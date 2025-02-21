import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor(){
    super();
    console.log("I am a constructor");
    this.state={
      articles: [],
      loading: false 
    };
  }

  async componentDidMount(){
    console.log("ComponentDidMount");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=acf658acc68b4218bd87ef623db45cab";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className='container'>
        <h2>NewsMonkey - Top Headlines</h2>  {/* NewsDuck ?? */}
        <div className="row">
        {this.state.articles.map((element)=> {
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url}/></div>
        })}
        </div>
      </div>
    )
  }
}

export default News