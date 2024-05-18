import { createBrowserRouter } from 'react-router-dom';
import PortalPage from './pages/PortalPage';
import MakingOf from './pages/MakingOf';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PortalPage />,
  },
  {
    path: 'making-of',
    element: <MakingOf />,
  },
]);

export default routes;
