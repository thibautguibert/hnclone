import React from 'react';
import PropTypes from 'prop-types';

const NewsDetails = ({ news, index }) => (
  <div>
    <h2>
      <span>{`${index}. `}</span>
      {news.title}
    </h2>
  </div>
);

NewsDetails.propTypes = {
  index: PropTypes.number.isRequired,
  news: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    by: PropTypes.string,
    score: PropTypes.number,
    time: PropTypes.number,
    kids: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default NewsDetails;
