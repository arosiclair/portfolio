import * as React from 'react';
import styled from 'styled-components';

const IntroText = styled.p`
  font-size: 1.2em;
`;

const getYearsOfExperience = () => {
  const msSinceBegin = new Date() - new Date(2017, 4, 0);
  const msInYear = 31536000730;
  return (msSinceBegin / msInYear).toFixed(1);
};

const IntroSection = () => (
  <section>
    <h1>Welcome,</h1>
    <IntroText>
      I&apos;m a Software Engineer with {getYearsOfExperience()} years of
      experience focusing on Full-stack development of modern web and mobile
      applications.
    </IntroText>
  </section>
);

export default IntroSection;
