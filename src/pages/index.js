import * as React from 'react';
import IntroSection from '../components/intro';
import Layout from '../components/layout';
import SkillsSection from '../components/skills';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <IntroSection />
      <SkillsSection />
    </Layout>
  );
};

export default IndexPage;
