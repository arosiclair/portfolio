import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Timestamp from './timestamp';

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.spacing(4)};

  @media ${theme.mediaQueries.tablet} {
    flex-direction: row;
    align-items: start;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  margin: ${theme.spacing(0, 0, 2)};

  @media ${theme.mediaQueries.tablet} {
    margin: ${theme.spacing(0, 2, 0, 0)};
  }
`;

const ProjectDetails = styled.div`
  flex: 3;

  & > p {
    margin-bottom: 0;
  }
`;

const ProjectsSection = () => (
  <section>
    <h2>Projects</h2>
    <Project>
      <ProjectImage>
        <StaticImage
          src="../images/projects/page-limiter.png"
          alt="Page Limiter logo"
          imgStyle={{
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </ProjectImage>
      <ProjectDetails>
        <Timestamp>2025</Timestamp>
        <h3>Page Limiter</h3>
        <p>
          A Chrome extension for blocking and setting timelimits on websites. It
          has powerful filtering via regular expressions, a strict mode and
          syncing across devices.
          <br />
          <a href="https://www.althacker.news" target="_blank" rel="noreferrer">
            App
          </a>
          {' · '}
          <a
            href="https://github.com/arosiclair/alt-hacker-news"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </p>
        <p></p>
      </ProjectDetails>
    </Project>
    <Project>
      <ProjectImage>
        <StaticImage
          src="../images/projects/alt-hacker-news.png"
          alt="alt Hacker News logo"
          imgStyle={{
            borderRadius: theme.shape.borderRadius,
          }}
        />
      </ProjectImage>
      <ProjectDetails>
        <Timestamp>2024</Timestamp>
        <h3>
          <i>alt</i> Hacker News
        </h3>
        <p>
          An alternative frontend for Hacker News with much improved readability
          and typography.
          <br />
          <a href="https://www.althacker.news" target="_blank" rel="noreferrer">
            App
          </a>
          {' · '}
          <a
            href="https://github.com/arosiclair/alt-hacker-news"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </p>
        <p></p>
      </ProjectDetails>
    </Project>
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
        <Timestamp>2019 - 2024</Timestamp>
        <h3>Sooner</h3>
        <p>
          The <i>anti</i> reading list app. All list items are ephemeral,
          forcing users to keep a tidy list and read entries in a timely manner.
          It features a pleasant UI, installable PWA, Chrome extension, and push
          notifications for reminders.
          <br />
          <a href="https://www.sooner.app" target="_blank" rel="noreferrer">
            App
          </a>
          {' · '}
          <a
            href="https://github.com/arosiclair/sooner"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </p>
      </ProjectDetails>
    </Project>
    <Project>
      <ProjectImage>
        <StaticImage
          src="../images/projects/fwitter.png"
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
          A project on using cloud infrastructure to replicate Twitter&apos;s
          functionality and support thousands of requests per second. Its
          infrastructure featured a horizontally scaled REST API and a sharded
          MongoDB database.
          <br />
          <a
            href="https://github.com/arosiclair/fwitter"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </p>
      </ProjectDetails>
    </Project>
  </section>
);

export default ProjectsSection;
