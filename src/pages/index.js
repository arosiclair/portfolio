import * as React from 'react';
import Layout from '../components/layout';
import IntroSection from '../components/intro';
import SkillsSection from '../components/skills';
import ExperienceSection from '../components/experience';
import ProjectsSection from '../components/projects';
import EducationSection from '../components/education';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <IntroSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
