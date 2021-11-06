import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'React';

const EducationSection = () => {
  return (
    <section>
      <h2>Education</h2>
      <h3>Bachelor of Science, Computer Science (2013-2017)</h3>
      <p>
        <StaticImage
          src="../images/icons/sbu.svg"
          alt=""
          width={25}
          height={25}
          objectFit="contain"
          as="span"
        />
        Stony Brook University
      </p>
    </section>
  );
};

export default EducationSection;
