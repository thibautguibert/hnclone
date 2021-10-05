import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';
import { Skeleton, ButtonGroup, Button } from '@mui/material';

const NewsList = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 85%;
  min-height: 20rem;
  background-color: white;
  margin: 0 auto 2rem;
`;
const buttonStyle = { textTransform: 'capitalize' };
const buttonDisabledStyle = { textTransform: 'capitalize', color: 'var(--gray)', cursor: 'not-allowed' };

const SkeletonNews = () => (
  <div>
    {[...Array(20)].map(() => (
      <div key={shortid.generate()}>
        <Skeleton
          style={{ margin: '1.5rem 2rem 0.5rem' }}
          animation="wave"
          variant="rectangular"
          height={24}
        />
        <Skeleton
          style={{ margin: '0rem 2rem 1.5rem' }}
          animation="wave"
          variant="rectangular"
          height={12}
        />
      </div>
    ))}
  </div>
);

const NewsListComponent = ({
  newsList, isFirstPage, pageNumber, setPageNumber,
}) => (
  <NewsList>
    {newsList.length === 0 ? (
      <SkeletonNews />
    ) : newsList.map((news) => <p key={news}>a news</p>)}
    <ButtonGroup variant="text" size="small" color="inherit" style={{ padding: '1.5rem' }}>
      <Button
        style={isFirstPage ? buttonDisabledStyle : buttonStyle}
        onClick={isFirstPage ? () => { } : () => setPageNumber(pageNumber - 1)}
      >
        Prev
      </Button>
      <Button style={buttonStyle} onClick={() => setPageNumber(pageNumber + 1)}>More</Button>
    </ButtonGroup>
  </NewsList>
);

NewsListComponent.propTypes = {
  newsList: PropTypes.arrayOf(PropTypes.string),
  isFirstPage: PropTypes.bool,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
};

NewsListComponent.defaultProps = {
  newsList: [],
  isFirstPage: true,
  pageNumber: 1,
  setPageNumber() { },
};

export default NewsListComponent;
