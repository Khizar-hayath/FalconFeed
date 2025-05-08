import React, {useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News= (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0)
  

  const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json()
    props.setProgress(60);

    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }
  //UseEffect instead of ComponentDidMount
  useEffect(() => {
    document.title = `FalconFeed - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
    updateNews();
  }, []); 
  // [] is the condition for the useEffect to run. If it is empty, it will run only once when the component is mounted.

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };

  return (
    <>
      <h1 className='text-center' style={{ margin: "35px", marginTop: "45px" }}>FalconFeed - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} headlines</h1>  {/* NewsDuck ?? */}
      {loading && <Spinner/>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : ""} source={element.source.name} />
            </div>
          })}
        </div>
      </div>
      </InfiniteScroll>
    </>
  )
};

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News