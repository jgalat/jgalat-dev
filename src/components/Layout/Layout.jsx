import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  padding: 5px;
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <Content>{children}</Content>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
