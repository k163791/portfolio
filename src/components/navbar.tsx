import { NavLink } from 'react-router-dom';
import { Container } from './container';
import { INITIALS } from '../content/navbar';
import { scrollToSection } from '../utils/scroll-to-section';

const links = [
  { to: 'hero', label: 'Home' },
  { to: 'experience-highlights', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const onClick = (to: string) => {
    scrollToSection(to);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          {INITIALS}
        </NavLink>

        <nav className="flex gap-8">
          {links.map((link) => (
            <button
              key={link.to}
              className="hover:text-text-muted text-white hover:cursor-pointer"
              onClick={() => onClick(link?.to)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  );
};
