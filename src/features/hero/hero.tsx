import { Container } from '../../components/container';
import { Section } from '../../components/section';
import { Badge } from '../../components/ui/badge';
import { HERO_TECH } from '../../content/constants';
import { HERO_CONTENT } from '../../content/hero';

export const Hero: React.FC = () => {
  return (
    <Section id="hero" className="relative overflow-hidden py-32">
      <div className="bg-primary/20 absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-text-muted mb-4 text-sm tracking-[0.3em] uppercase">
            {HERO_CONTENT.occupation}
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {HERO_CONTENT.name}
          </h1>

          <p className="text-text-muted mx-auto mt-8 max-w-2xl text-lg leading-8 md:text-xl">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {HERO_TECH.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
