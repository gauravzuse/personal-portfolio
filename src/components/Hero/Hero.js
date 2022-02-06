import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello,<br />
        My name is Gaurav Agrawal.
      </SectionTitle>
      <SectionText>
      A growing engineer who has the technical knowledge of how things work in the world of zero's and one's.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;