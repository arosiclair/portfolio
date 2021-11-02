import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Skill = ({ title, children }) => {
  return (
    <div>
      <SkillTitle>{title}</SkillTitle>
      <TechContainer>{children}</TechContainer>
    </div>
  );
};

const SkillTitle = styled.span`
  font-size: 1.2em;
`;

const TechContainer = styled.div`
  display: flex;
  padding: ${theme.spacing(1, 0, 0, 1)};
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${theme.spacing(0, 1, 1, 0)};
`;

const TechItemIcon = styled.span`
  width: 1.5em;
  margin-right: ${theme.spacing(0.5)};
`;

const SkillsSection = () => (
  <section>
    <h2>Skills</h2>
    <Skill title="Software Engineering">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dot.svg" />
        </TechItemIcon>
        Algorithm Design
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dot.svg" />
        </TechItemIcon>
        Service Oriented Architecture
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dot.svg" />
        </TechItemIcon>
        REST APIs
      </TechItem>
    </Skill>
    <Skill title="Frontend Development">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/react.svg" />
        </TechItemIcon>
        React
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/redux.svg" />
        </TechItemIcon>
        Redux
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/vue.svg" />
        </TechItemIcon>
        Vue
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/vue.svg" />
        </TechItemIcon>
        Vuex
      </TechItem>
    </Skill>
    <Skill title="Backend Development">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/express.svg" />
        </TechItemIcon>
        ExpressJS
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/mongodb.svg" />
        </TechItemIcon>
        MongoDB
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dotnet.svg" />
        </TechItemIcon>
        ASP.NET
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/database.svg" />
        </TechItemIcon>
        SQLServer
      </TechItem>
    </Skill>
    <Skill title="PWA Development"></Skill>
    <Skill title="UI Design & Wireframing">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/figma.svg" />
        </TechItemIcon>
        Figma
      </TechItem>
    </Skill>{' '}
    <Skill title="Languages">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/javascript.svg" />
        </TechItemIcon>
        Javascript
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/typescript.svg" />
        </TechItemIcon>
        Typescript
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/python.svg" />
        </TechItemIcon>
        Python
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/csharp.svg" />
        </TechItemIcon>
        C#
      </TechItem>
    </Skill>
  </section>
);

export default SkillsSection;
