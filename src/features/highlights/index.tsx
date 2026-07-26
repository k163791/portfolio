import { Container } from '../../components/container';
import { Section } from '../../components/section';
import { Heading } from '../../components/ui/heading';
import { SectionIntro } from '../../components/ui/section-intro';
import { capabilities } from '../../content/highlights';
import { CapabilityItem } from './capability-item';

export const Highlights: React.FC = () => {
  return (
    <Section id="experience-highlights">
      <Container className="space-y-4">
        <SectionIntro
          eyebrow="Experience"
          title="Building products that solve real problems."
          description="From frontend architecture to secure backend APIs, I enjoy turning ideas into reliable software."
        />

        <div className="space-y-2">
          <Heading variant={2}>Github Streak</Heading>
          <img
            alt="github_streaks"
            src="https://streak-stats.demolab.com?user=k163791&theme=github-dark-blue&hide_border=true"
          />
        </div>
        <div className="space-y-2">
          <Heading variant={2}>Expertise</Heading>
          {capabilities.map((ability) => (
            <CapabilityItem key={ability}>{ability}</CapabilityItem>
          ))}
        </div>
      </Container>
    </Section>
  );
};
