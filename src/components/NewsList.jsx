import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = ({ type, start, end, newsApi }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${type}&apiKey=${newsApi}`,
      );
      let array = [];
      for (let i = start; i < end; i++) {
        // console.log(response.data.articles[i])
        array.push(response.data.articles[i]);
      }
      console.log(array);
      console.log(response.data.articles);
      setArticles(array);
    };
    getArticles();
  }, [type, start, end]);

  return (
    <div>
      {articles.map((articles) => {
        //list
        return (
          <NewsItem
            title={articles.title}
            description={articles.description}
            url={articles.url}
            urlToImage={articles.urlToImage}
            publishedAt={articles.publishedAt}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
