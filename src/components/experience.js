import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Timestamp from './timestamp';

const ExperienceItem = styled.div``;

const ExperienceItemTitle = styled.h3``;

const ExperienceItemSubtitle = styled.p`
  margin-bottom: 0.6em;
`;

const ExperienceLink = styled.a`
  &:not(:hover) {
    color: inherit;
    text-decoration: inherit;
  }
`;

const ExperienceItemSummary = styled.p`
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const ExperienceItemDetails = styled.ul`
  margin-top: 0;
  padding-left: ${theme.spacing(4)};
`;

const ExperienceItemDetail = styled.li`
  margin-bottom: 0.4em;
`;

const ExperienceSection = () => (
  <section>
    <h2>Experience</h2>
    <ExperienceItem>
      <Timestamp>2022 - Present</Timestamp>
      <ExperienceItemTitle>Full Stack Engineer</ExperienceItemTitle>
      <ExperienceItemSubtitle>
        <ExperienceLink href="https://www.expensify.com">
          <StaticImage
            src="../images/icons/expensify.svg"
            width={30}
            height={30}
            objectFit="contain"
            as="span"
            style={{
              verticalAlign: 'middle',
              marginRight: theme.spacing(1),
            }}
          />
          Expensify, Inc
        </ExperienceLink>
      </ExperienceItemSubtitle>
      <ExperienceItemSummary>
        Building and maintaing expense management and chat apps for millions of
        users. Some of this work is{' '}
        <a
          href="https://github.com/Expensify/App/pulls?page=1&q=is%3Apr+author%3Aarosiclair"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>
        . Projects include:
      </ExperienceItemSummary>
      <ExperienceItemDetails>
        <ExperienceItemDetail>
          Rebuilding push notifications for reliability and implementing
          background refresh for our React Native app.
        </ExperienceItemDetail>
        <ExperienceItemDetail>
          Technical design and implementation for our distance expense tracking
          feature.
        </ExperienceItemDetail>
        <ExperienceItemDetail>Refactoring our PHP web API</ExperienceItemDetail>
        <ExperienceItemDetail>
          Collaborating with vendors and managing external engineers
        </ExperienceItemDetail>
      </ExperienceItemDetails>
    </ExperienceItem>
    <ExperienceItem>
      <Timestamp>2017 - 2022</Timestamp>
      <ExperienceItemTitle>
        Software Engineer ⭢ Senior Software Engineer
      </ExperienceItemTitle>
      <ExperienceItemSubtitle>
        <ExperienceLink href="https://www.avi.com">
          <StaticImage
            src="../images/icons/avi.svg"
            width={30}
            height={30}
            objectFit="contain"
            as="span"
            style={{
              verticalAlign: 'middle',
              marginRight: theme.spacing(1),
            }}
          />
          Applied Visions, Inc.
        </ExperienceLink>
      </ExperienceItemSubtitle>

      <ExperienceItemSummary>
        Building and maintaining a wide variety of products as part of large and
        small agile teams to deliver on product goals for clients. Projects
        include:
      </ExperienceItemSummary>
      <ExperienceItemDetails>
        <ExperienceItemDetail>
          Android, iOS, Angular and .NET applications and services in a suite of
          software used to manage and triage public transportation in real time
          that is used worldwide.
        </ExperienceItemDetail>
        <ExperienceItemDetail>
          Android and iOS apps for Planet Fitness.
        </ExperienceItemDetail>
        <ExperienceItemDetail>
          Python and React apps for benchmarking and comparing static code
          analyzers.
        </ExperienceItemDetail>
        <ExperienceItemDetail>
          React app, Express API, deployment and system architecture for a large
          research effort on visualizing and expediting assurance of mission
          critical software.
        </ExperienceItemDetail>
      </ExperienceItemDetails>
    </ExperienceItem>
  </section>
);

export default ExperienceSection;
