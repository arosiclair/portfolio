import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Nav from './nav';
import 'normalize.css';
import '../styles/reset.css';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentContainer = styled.div`
  width: max(850px, 1vw);
  padding: ${theme.spacing(0, 2)};

  @media ${theme.mediaQueries.tablet} {
    padding: ${theme.spacing(6, 3)};
  }
`;
const MainContainer = styled.main`
  flex: 1;
`;
const NavConatiner = styled.nav`
  position: sticky;
  top: 0;

  @media ${theme.mediaQueries.tablet} {
    height: 100%;
    width: 200px;
    float: right;
    margin-top: ${theme.spacing(4)};
  }
`;

const NavContent = styled.div`
  position: sticky;
  top: 0;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <ContentContainer>
        <NavConatiner>
          <NavContent>
            <Nav />
          </NavContent>
        </NavConatiner>
        <MainContainer>{children}</MainContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Layout;
