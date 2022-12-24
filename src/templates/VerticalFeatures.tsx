import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="The best tool for your education & career."
    description="EcoBuddy is a tool for students and professionals to grow and enhance their reputation within a social network by sharing their achievements and connecting with local resources."
  >
    <VerticalFeatureRow
      title="See what's happening 👀"
      description="Get access to your local communities at your college so that you can make a difference today."
      image="/assets/images/feature.svg"
      imageAlt="See what's happening in your local communities"
    />
    <VerticalFeatureRow
      title="Understand where you are 👍"
      description="Get access to a dashboard that shows you exactly how far you've come and where you could go."
      image="/assets/images/feature2.svg"
      imageAlt="Get access to a unique dashboard"
      reverse
    />
    <VerticalFeatureRow
      title="Grow your reputation 📊"
      description="Use your points to apply for scholarships, jobs, or other relevant opportunities for growth."
      image="/assets/images/feature3.svg"
      imageAlt="Use your points to apply for scholarships, jobs, or other relevent opportunities"
    />
  </Section>
);

export { VerticalFeatures };
