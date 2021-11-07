import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Skill = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <TechContainer>{children}</TechContainer>
    </div>
  );
};

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${theme.spacing(1, 0, 0, 1)};
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${theme.spacing(0, 1, 1, 0)};
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5em;
`;

const TechItemIcon = styled.span`
  margin-right: 0.4em;
`;

const iconProps = {
  alt: '',
  width: 30,
  height: 30,
  objectFit: 'contain',
};

const SkillsSection = () => (
  <section>
    <h2>Skills</h2>
    <Skill title="Software Engineering">
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dot.svg" {...iconProps} />
        </TechItemIcon>
        Algorithm Design
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dot.svg" {...iconProps} />
        </TechItemIcon>
        Service Oriented Architecture
      </TechItem>
      <TechItem>
        <TechItemIcon>
          <StaticImage src="../images/icons/dot.svg" {...iconProps} />
        </TechItemIcon>
        REST APIs
      </TechItem>
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
    <Skill title="PWA Development"></Skill>
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
