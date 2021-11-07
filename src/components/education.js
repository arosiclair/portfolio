import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Timestamp from './timestamp';
const EducationDetailsIcon = styled.span`
  margin-right: ${theme.spacing(1)};
`;

const EducationSection = () => {
  return (
    <section>
      <h2>Education</h2>

      <Timestamp>2013 - 2017</Timestamp>
      <h3>Bachelor of Science, Computer Science</h3>
      <p>
        <EducationDetailsIcon>
          <StaticImage
            src="../images/icons/sbu.svg"
            alt=""
            width={25}
            height={25}
            objectFit="contain"
            as="span"
          />
        </EducationDetailsIcon>
        Stony Brook University
      </p>
    </section>
  );
};

export default EducationSection;
