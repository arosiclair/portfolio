import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Skill = ({ title, children }) => {
  return (
    <SkillContainer>
      <h3>{title}</h3>
      <SkillItemContainer>{children}</SkillItemContainer>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  margin-bottom: ${theme.spacing(1)};
`;

const SkillItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9em;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${theme.spacing(0, 1, 1, 0)};
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5em;

  @media ${theme.mediaQueries.darkMode} {
    background-color: rgba(255, 255, 255, 0.075);
  }
`;

const SkillItemIcon = styled.span`
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
      <SkillItem>Software Design</SkillItem>
      <SkillItem>Algorithm Design</SkillItem>
      <SkillItem>Service-oriented Architecture</SkillItem>
      <SkillItem>REST APIs</SkillItem>
      <SkillItem>OOP</SkillItem>
      <SkillItem>Deployment</SkillItem>
      <SkillItem>Scalability</SkillItem>
    </Skill>
    <Skill title="Frontend Development">
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/react.svg" {...iconProps} />
        </SkillItemIcon>
        React
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/react.svg" {...iconProps} />
        </SkillItemIcon>
        React Native
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/vue.svg" {...iconProps} />
        </SkillItemIcon>
        Vue
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/pwa.svg" {...iconProps} />
        </SkillItemIcon>
        Progressive Web Apps
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/xamarin.svg" {...iconProps} />
        </SkillItemIcon>
        Xamarin
      </SkillItem>
    </Skill>
    <Skill title="Backend Development">
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/express.svg" {...iconProps} />
        </SkillItemIcon>
        ExpressJS
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/mongodb.svg" {...iconProps} />
        </SkillItemIcon>
        MongoDB
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/dotnet.svg" {...iconProps} />
        </SkillItemIcon>
        ASP.NET
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/database.svg" {...iconProps} />
        </SkillItemIcon>
        SQL
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/rabbitmq.svg" {...iconProps} />
        </SkillItemIcon>
        RabbitMQ
      </SkillItem>
    </Skill>
    <Skill title="Languages">
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/javascript.svg" {...iconProps} />
        </SkillItemIcon>
        Javascript
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/typescript.svg" {...iconProps} />
        </SkillItemIcon>
        Typescript
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/php.svg" {...iconProps} />
        </SkillItemIcon>
        PHP
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/csharp.svg" {...iconProps} />
        </SkillItemIcon>
        C#
      </SkillItem>
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/python.svg" {...iconProps} />
        </SkillItemIcon>
        Python
      </SkillItem>
    </Skill>
    <Skill title="UI Design & Wireframing">
      <SkillItem>
        <SkillItemIcon>
          <StaticImage src="../images/icons/figma.svg" {...iconProps} />
        </SkillItemIcon>
        Figma
      </SkillItem>
    </Skill>
  </section>
);

export default SkillsSection;
