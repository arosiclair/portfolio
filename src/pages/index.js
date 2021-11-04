import * as React from 'react';
import Layout from '../components/layout';
import IntroSection from '../components/intro';
import SkillsSection from '../components/skills';
import ExperienceSection from '../components/experience';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <IntroSection />
      <SkillsSection />
      <ExperienceSection />
    </Layout>
  );
};

export default IndexPage;
