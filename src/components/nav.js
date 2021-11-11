import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const NavContainer = styled.nav`
  display: flex;
  padding: ${theme.spacing(2, 0)};
  justify-content: space-around;

  @media ${theme.mediaQueries.tablet} {
    padding: ${theme.spacing(6, 2)};
    flex-direction: column;
    justify-content: normal;
    overflow: hidden;
  }
`;

const SelfieContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing(1)};

  @media ${theme.mediaQueries.tablet} {
    width: 100px;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0.25em;

  @media ${theme.mediaQueries.tablet} {
    margin: 0.5em;
  }
`;

const NavLinkIcon = styled.span`
  display: none;

  @media ${theme.mediaQueries.tablet} {
    display: initial;
    width: 25px;
    margin-right: 0.25em;
  }
`;

const iconProps = {
  alt: '',
};

const Nav = () => {
  return (
    <NavContainer>
      <SelfieContainer>
        <StaticImage
          src="../images/me.png"
          alt="a photo of Andrew Rosiclair"
          style={{
            borderRadius: '50%',
          }}
        />
      </SelfieContainer>
      <NavLink href="">
        <NavLinkIcon>
          <StaticImage src="../images/icons/resume.svg" {...iconProps} />
        </NavLinkIcon>
        Resume
      </NavLink>
      <NavLink href="">
        <NavLinkIcon>
          <StaticImage src="../images/icons/github.svg" {...iconProps} />
        </NavLinkIcon>
        GitHub
      </NavLink>
      <NavLink href="">
        <NavLinkIcon>
          <StaticImage src="../images/icons/email.svg" {...iconProps} />
        </NavLinkIcon>
        Email
      </NavLink>
    </NavContainer>
  );
};

export default Nav;
