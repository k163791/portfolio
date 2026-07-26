import { Contact } from '../features/contact';
import { Hero } from '../features/hero/hero';
import { Highlights } from '../features/highlights';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Contact />
    </>
  );
}
