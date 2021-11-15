import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Skill = ({ title, children }) => {
  return (
    <SkillContainer>
      <h3>{title}</h3>
      <TechContainer>{children}</TechContainer>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  margin-bottom: ${theme.spacing(1)};
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9em;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${theme.spacing(0, 1, 1, 0)};
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5em;

  @media ${theme.mediaQueries.darkMode} {
    background-color: rgba(255, 255, 255, 0.075);
  }
`;

const TechItemIcon = styled.span`
  margin-right: 0.4em;
`;

const iconProps = {
  alt: '',
  width: 25,
  height: 25,
  objectFit: 'contain',
};

const SkillsSection = () => (
  <section>
    <h2>Skills</h2>
    <Skill title="Software Engineering">
      <TechItem>Software Design</TechItem>
      <TechItem>Algorithm Design</TechItem>
      <TechItem>Service Oriented Architecture</TechItem>
      <TechItem>REST APIs</TechItem>
      <TechItem>OOP</TechItem>
      <TechItem>Deployment</TechItem>
    </Skill>
    <Skill title="Frontend Development">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/react.svg" {...iconProps} />
        </TechItemIcon>
        React
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/redux.svg" {...iconProps} />
        </TechItemIcon>
        Redux
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/vue.svg" {...iconProps} />
        </TechItemIcon>
        Vue
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/vue.svg" {...iconProps} />
        </TechItemIcon>
        Vuex
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/xamarin.svg" {...iconProps} />
        </TechItemIcon>
        Xamarin
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/pwa.svg" {...iconProps} />
        </TechItemIcon>
        Progressive Web Apps
      </TechItem>
    </Skill>
    <Skill title="Backend Development">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/express.svg" {...iconProps} />
        </TechItemIcon>
        ExpressJS
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/mongodb.svg" {...iconProps} />
        </TechItemIcon>
        MongoDB
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dotnet.svg" {...iconProps} />
        </TechItemIcon>
        ASP.NET
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/database.svg" {...iconProps} />
        </TechItemIcon>
        SQLServer
      </TechItem>
    </Skill>
    <Skill title="UI Design & Wireframing">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/figma.svg" {...iconProps} />
        </TechItemIcon>
        Figma
      </TechItem>
    </Skill>{' '}
    <Skill title="Languages">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/javascript.svg" {...iconProps} />
        </TechItemIcon>
        Javascript
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/typescript.svg" {...iconProps} />
        </TechItemIcon>
        Typescript
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/python.svg" {...iconProps} />
        </TechItemIcon>
        Python
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/csharp.svg" {...iconProps} />
        </TechItemIcon>
        C#
      </TechItem>
    </Skill>
  </section>
);

export default SkillsSection;
