import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7f26e1590bd540e7af9d4c233412ed23";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    let items = [];

    for (let i = 0; i < this.state.articles.length; i++) {
      let article = this.state.articles[i];
      let desc = article.description
      if (desc !== null && desc !== undefined) {
        if (desc.split("").length > 100) {
          desc = desc.split("").splice(0, 97).join("") + "..."
        }
      }
      items.push(<NewsItem title={article.title} desc={desc} imgUrl={article.urlToImage} newsUrl={article.url} />);
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 place-items-center">
        {items}
      </div>
    );
  }

}

export default News

