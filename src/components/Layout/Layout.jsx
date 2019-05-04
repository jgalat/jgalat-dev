import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
  }
`;

const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
`;

const Content = styled.div`
  padding: 5px;
`;

function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout>
        <Content>{children}</Content>
      </StyledLayout>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
