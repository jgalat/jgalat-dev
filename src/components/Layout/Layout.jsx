import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    font-family: Roboto Mono, monospace;
    background: #000;
  }
`;

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin: 64px 16px;
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
