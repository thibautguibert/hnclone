import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import refreshIcon from './assets/refresh.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--orange);
  padding: 1rem 2.5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`;

const RefreshIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`;

const HeaderComponent = ({ setRefresh }) => (
  <Header>
    <Title>HackerNews</Title>
    <RefreshIcon src={refreshIcon} alt="refresh" onClick={setRefresh} />
  </Header>
);

HeaderComponent.propTypes = {
  setRefresh: PropTypes.func.isRequired,
};

export default HeaderComponent;
