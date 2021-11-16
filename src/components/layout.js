import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Nav from './nav';
import 'normalize.css';
import '../styles/reset.css';
import '../styles/typography.css';
import '../styles/theme.css';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentContainer = styled.div`
  width: max(850px, 1vw);
  padding: ${theme.spacing(0, 2)};
  position: relative;

  @media ${theme.mediaQueries.tablet} {
    padding: ${theme.spacing(6, 3)};
  }
`;
const MainContainer = styled.main`
  flex: 1;
  margin: ${theme.spacing(1, 0)};

  @media ${theme.mediaQueries.tablet} {
    margin: 0;
    padding-right: 175px;
  }
`;
const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;

  @media ${theme.mediaQueries.tablet} {
    position: absolute;
    top: ${theme.spacing(5)};
    right: 0;
    height: 100%;
    width: 175px;
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
        <NavContainer>
          <NavContent>
            <Nav />
          </NavContent>
        </NavContainer>
        <MainContainer>{children}</MainContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Layout;
