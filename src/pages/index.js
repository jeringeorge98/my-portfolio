import React from 'react';
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal';
import HeroBanner from '../components/ui/HeroBanner';

const IndexPage = () => {
  return (
    <>
      <Seo title="Portfolio of Jerin George" />
      <Page useSplashScreenAnimation>
        <HeroBanner />
        {/* <HeroSection sectionId="hero" /> */}
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
};
export default IndexPage;
