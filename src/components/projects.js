import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Timestamp from './timestamp';

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${theme.mediaQueries.tablet} {
    flex-direction: row;
    align-items: start;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  margin: ${theme.spacing(0, 2, 2)};

  @media ${theme.mediaQueries.tablet} {
    margin: ${theme.spacing(2, 2, 0, 0)};
  }
`;

const ProjectDetails = styled.div`
  flex: 3;
`;

const ProjectsSection = () => (
  <section>
    <h2>Projects</h2>
    <Project>
      <ProjectImage>
        <StaticImage
          src="../images/projects/sooner.png"
          alt="Sooner app logo"
          imgStyle={{
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </ProjectImage>
      <ProjectDetails>
        <Timestamp>2019 - Present</Timestamp>
        <h3>Sooner</h3>
        <p>
          Sooner is an <i>anti</i> reading list app. It provides a reading list
          where all additions are ephemeral, forcing users to keep a tidy list
          and read entries in a timely manner. It features a pleasant UI,
          installable PWA, Chrome extension, and push notifications.
        </p>
      </ProjectDetails>
    </Project>
    <Project>
      <ProjectImage>
        <StaticImage
          src="https://via.placeholder.com/1024"
          alt=""
          imgStyle={{
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </ProjectImage>
      <ProjectDetails>
        <Timestamp>2017</Timestamp>
        <h3>Fwitter</h3>
        <p>
          Fwitter was a project on using cloud infrastructure to replicate
          Twitter&apos;s functionality and support thousands of requests per
          second. Its infrastructure featured a horizontally scaled REST API and
          a sharded MongoDB database.
        </p>
      </ProjectDetails>
    </Project>
  </section>
);

export default ProjectsSection;
