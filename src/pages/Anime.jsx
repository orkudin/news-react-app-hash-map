import React from 'react';
import NewsGrid from '../components/NewsGrid';

const Anime = ({newsApi}) => {
  var type_s = 'anime';
  // let newsApi = '72bcf1a53ce14dccb9985f97dbdeee6b'
  return (
    <div>
      <NewsGrid type={type_s} newsApi={newsApi} />
    </div>
  );
};

export default Anime;
