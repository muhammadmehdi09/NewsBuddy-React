import React, { Component } from 'react';
import NewsItem from './NewsItem';
import fallbackImg from '../assets/fallback.jpg';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://inshortsapi.vercel.app/news?category=all');
      let parsedData = await response.json();
      this.setState({ articles: parsedData.data || [] });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ articles: [] });
    }
  }

  render() {
    let items = [];

    for (let i = 0; i < this.state.articles.length; i++) {
      let article = this.state.articles[i];

      let title = article.title || "No Title";
      let desc = article.content || "No description available.";
      if (desc.length > 100) {
        desc = desc.substring(0, 97) + "...";
      }

      let imgUrl = article.imageUrl || fallbackImg;
      let newsUrl = article.readMoreUrl || "#";

      items.push(
        <NewsItem
          key={i}
          title={title}
          desc={desc}
          imgUrl={imgUrl}
          newsUrl={newsUrl}
        />
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 place-items-center">
        {items}
      </div>
    );
  }
}

export default News;
