import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://i.insider.com/67730cd7ca1058716a5ec151?width=1200&format=jpeg":imageurl} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem