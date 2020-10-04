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
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin: 80px 8px;
`;
