import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, description, url, urlToImage, publishedAt }) => {
  return (
    <div class="grid-item">
      <div class="image">
        <img src={urlToImage} alt={urlToImage} />
      </div>
      <div class="info">
        <h3>{title}</h3>
        <div class="info-text">
          <p>{description}</p>
        </div>
        <div class="button-wrap">
          <a class="atuin-btn" href={url}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
