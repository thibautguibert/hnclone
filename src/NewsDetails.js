import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getSource, getTime } from './util';

const NewsRow = styled.div`
  padding: 1rem;
  margin: 0 0.5rem;
  border-bottom: 1px solid var(--lightgray);
  &:hover{
    background-color: seashell;
  }
  @media (max-width: 414px){
    padding: 0.5rem;
  }
`;
const GraySpan = styled.span`color: var(--gray)`;
const NewsTitle = styled.a`
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: 414px){
    font-size: 0.75rem;
  }
`;
const NewsSubtitle = styled.p`
  padding: 0.25rem 0 0.25rem 1.25rem;
  font-size: 0.625rem;
  @media (max-width: 414px){
    padding: 0.5rem 0 0.25rem 0.25rem;
  }
  @media (max-width: 360px){
    font-size: 0.5rem;
  }
`;

const NewsDetails = ({ news, index }) => (
  <NewsRow>
    <NewsTitle href={news.url}>
      <GraySpan>{`${index}. `}</GraySpan>
      {news.title}
      <GraySpan>{` (${getSource(news.url)})`}</GraySpan>
    </NewsTitle>
    <NewsSubtitle>
      {`${news.score} points `}
      <GraySpan>by</GraySpan>
      {` ${news.by} `}
      <GraySpan>{`${getTime(news.time)} ago | `}</GraySpan>
      {`${news.kids?.length || 0} comment${news.kids?.length > 0 ? 's' : ''}`}
    </NewsSubtitle>
  </NewsRow>
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
