import React from 'react';
import NewsList from './NewsList';
import './NewsGrid.css';

const NewsGrid = ({ type, newsApi }) => {
  return (
    <div className="main-body">
      <div className="grid">
        <NewsList type={type} start={0} end={10} newsApi={newsApi}/>
        <NewsList type={type} start={10} end={20} newsApi={newsApi}/>
        <NewsList type={type} start={20} end={30} newsApi={newsApi}/>
        <NewsList type={type} start={30} end={40} newsApi={newsApi}/>
      </div>

    </div>
  );
};

export default NewsGrid;
