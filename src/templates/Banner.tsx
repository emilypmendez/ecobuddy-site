import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to launch your career?"
      subtitle="Start your journey today."
      button={
        <Link href="https://emily103.typeform.com/to/m3VMtvKD">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
