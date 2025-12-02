import React, { Component } from 'react'
import fallbackImg from '../assets/fallback.jpg';

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props
    return (
      <div className="h-[550px]">
        <div className="w-72 bg-white shadow rounded overflow-hidden min-h-[400px]">
          <img src={imgUrl || fallbackImg} alt="" className="w-full h-40 object-cover" onError={(e) => (e.target.src = fallbackImg)} />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">{title}</h5>
            <p className="text-gray-600 mb-4">
              {desc}
            </p>
            <a href={newsUrl} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
