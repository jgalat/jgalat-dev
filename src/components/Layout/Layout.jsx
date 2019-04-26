import React from 'react';
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

export default Layout;
