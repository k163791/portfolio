import { Container } from './container';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 py-10">
      <Container>
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Uzair Hussain. Built with React,
          TypeScript & Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
};
