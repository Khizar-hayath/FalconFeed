import React from 'react'

const NewsItem = (props) =>{
  let { title, description, imageurl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" >
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', marginTop: '-10px'}}>
          <span className="badge rounded-pill bg-danger" style={{}}>{source}</span>
        </div>
        <img src={!imageurl ? "https://i.insider.com/67730cd7ca1058716a5ec151?width=1200&format=jpeg" : imageurl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem