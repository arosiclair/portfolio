import * as React from 'react';
import Layout from '../components/layout';
import IntroSection from '../components/intro';
import SkillsSection from '../components/skills';
import ExperienceSection from '../components/experience';
import ProjectsSection from '../components/projects';
import EducationSection from '../components/education';
import { Helmet } from 'react-helmet';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Andrew Rosiclair&apos;s Portfolio</title>
      </Helmet>
      <IntroSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
