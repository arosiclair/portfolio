import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Timestamp from './timestamp';

const ExperienceItem = styled.div``;

const ExperienceItemTitle = styled.h3`
  margin-top: 0;
`;

const ExperienceItemSummary = styled.p`
  margin-top: 0;
  margin-bottom: ${theme.spacing(1)};
`;

const ExperienceItemDetails = styled.ul`
  margin-top: 0;
  padding-left: ${theme.spacing(3)};
`;

const ExperienceItemDetail = styled.li`
  margin-bottom: ${theme.spacing(1)};
`;

const ExperienceSection = () => (
  <section>
    <h2>Experience</h2>
    <ExperienceItem>
      <Timestamp>2017 - Present</Timestamp>
      <ExperienceItemTitle>
        Software Engineer @ Applied Visions
      </ExperienceItemTitle>
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
          Android and iOS apps for a national gym serving millions of users.
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
