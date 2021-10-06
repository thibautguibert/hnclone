import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getSource } from './util';

const NewsRow = styled.div`
  padding: 1rem;
  margin: 0 0.5rem;
  border-bottom: 1px solid var(--lightgray);
  &:hover{
    background-color: seashell;
  }
`;

const NewsTitle = styled.a`
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: 414px){
    font-size: 0.75rem;
  }
`;
const GraySpan = styled.span`color: var(--gray)`;

const NewsDetails = ({ news, index }) => (
  <NewsRow>
    <NewsTitle href={news.url}>
      <GraySpan>{`${index}. `}</GraySpan>
      {news.title}
      <GraySpan>{` (${getSource(news.url)})`}</GraySpan>
    </NewsTitle>
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
