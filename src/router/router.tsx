import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../layouts/app-layout';
import NotFound from '../pages/not-found';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
import Articles from '../pages/articles';
import Contact from '../pages/contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
