import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ContactDetailProps {
  icon: IconDefinition;
  title: string;
  cta: string;
}

export const ContactDetail: React.FC<ContactDetailProps> = ({
  icon,
  title,
  cta,
}: ContactDetailProps) => {
  return (
    <div className="flex gap-3">
      <FontAwesomeIcon icon={icon} />
      <a
        href={cta}
        className="text-lg text-white underline underline-offset-4"
        target="_blank"
      >
        {title}
      </a>
    </div>
  );
};
