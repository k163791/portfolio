import { Container } from '../../components/container';
import { Section } from '../../components/section';
import { SectionIntro } from '../../components/ui/section-intro';
import { contactDetails } from '../../content/contact';
import { ContactDetail } from './contact-detail';

export const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Container className="space-y-4">
        <SectionIntro
          eyebrow="Contact"
          title="Let's build something together."
          description="Whether you have a project in mind, an exciting opportunity, or just want to connect, I'd love to hear from you."
        />
        {contactDetails.map((detail) => (
          <ContactDetail key={detail?.title} {...detail} />
        ))}
      </Container>
    </Section>
  );
};
