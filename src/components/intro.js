import * as React from 'react';
import styled from 'styled-components';

const IntroText = styled.p`
  font-size: 1.2em;
`;

const IntroSection = () => (
  <section>
    <h1>Welcome,</h1>
    <IntroText>
      I&apos;m a Software Engineer with 5 years of experience focusing on
      Full-stack development of modern web and mobile applications.
    </IntroText>
  </section>
);

export default IntroSection;
