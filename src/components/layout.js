import * as React from 'react';
import styled from 'styled-components';
import Nav from './nav';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentContainer = styled.div`
  width: max(850px, 1vw);
  display: flex;
`;
const MainContainer = styled.main`
  flex: 1;
`;
const NavConatiner = styled.nav`
  width: 200px;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <ContentContainer>
        <MainContainer>{children}</MainContainer>
        <NavConatiner>
          <Nav />
        </NavConatiner>
      </ContentContainer>
    </PageContainer>
  );
};

export default Layout;
