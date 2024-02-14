import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const NavContainer = styled.nav`
  margin: ${theme.spacing(0, -2)};
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  padding: ${theme.spacing(2)};
  justify-content: space-around;

  @media ${theme.mediaQueries.tablet} {
    padding: ${theme.spacing(6, 3)};
    flex-direction: column;
    justify-content: normal;
    overflow: hidden;
  }

  @media ${theme.mediaQueries.darkMode} {
    background-color: rgba(33, 33, 33, 0.8);
  }
`;

const SelfieContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;

  @media ${theme.mediaQueries.tablet} {
    width: 100px;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;

  @media ${theme.mediaQueries.tablet} {
    margin: 0.5em 0;
  }
`;

const NavLinkIcon = styled.span`
  display: none;

  @media ${theme.mediaQueries.tablet} {
    display: initial;
    position: relative;
    top: 2px;
    width: 25px;
    margin-right: 0.4em;
  }

  @media ${theme.mediaQueries.darkMode} {
    filter invert(100%);
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
      <NavLink
        href="https://drive.google.com/file/d/1oIoy5OfRqQTrLsuDWiUXLTYn3tr4zHcr/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <NavLinkIcon>
          <StaticImage src="../images/icons/document.svg" {...iconProps} />
        </NavLinkIcon>
        Resume
      </NavLink>
      <NavLink
        href="https://github.com/arosiclair"
        target="_blank"
        rel="noreferrer"
      >
        <NavLinkIcon>
          <StaticImage src="../images/icons/github.svg" {...iconProps} />
        </NavLinkIcon>
        GitHub
      </NavLink>
      <NavLink href="mailto:arosiclair@gmail.com" target="_blank">
        <NavLinkIcon>
          <StaticImage src="../images/icons/at.svg" {...iconProps} />
        </NavLinkIcon>
        Email
      </NavLink>
    </NavContainer>
  );
};

export default Nav;
