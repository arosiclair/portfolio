import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const IntroText = styled.p`
  font-size: 1.2em;
`;

const IntroSection = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState('...');
  useEffect(() => {
    const msSinceBegin = new Date() - new Date(2017, 4, 0);
    const msInYear = 31536000730;
    const result = (msSinceBegin / msInYear).toFixed(1);
    setYearsOfExperience(result);
  }, []);

  return (
    <section>
      <h1>Hey there,</h1>
      <IntroText>
        I&apos;m a Software Engineer based in Norwalk, CT with{' '}
        {yearsOfExperience} years of experience focusing on full stack
        development of web and mobile applications.
      </IntroText>
    </section>
  );
};

export default IntroSection;
