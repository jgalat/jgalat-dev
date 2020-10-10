import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Layout({ children }) {
  return (
    <React.Fragment>
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

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--color-background);
  color: var(--color-text);
`;

const Content = styled.div`
  margin: 80px 20px;
`;
