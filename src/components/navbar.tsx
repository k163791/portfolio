import { NavLink } from 'react-router-dom';
import { Container } from './container';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/articles', label: 'Articles' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          UH
        </NavLink>

        <nav className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-slate-400 hover:text-white'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
};
