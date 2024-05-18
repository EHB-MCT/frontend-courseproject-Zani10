import { createBrowserRouter } from 'react-router-dom';
import PortalPage from './pages/PortalPage';
import MakingOf from './pages/MakingOf';
import FairytalePage from './pages/FairytalePage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PortalPage />,
  },
  {
    path: 'making-of',
    element: <MakingOf />,
  },
  {
    path: 'fairytale/:name',
    element: <FairytalePage />,
  },
]);

export default routes;

