import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PortalPage from './pages/PortalPage';
import AboutUs from './pages/AboutUs';
import MakingOf from './pages/MakingOf';
import FairytalePage from './pages/FairytalePage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <PortalPage /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'making-of', element: <MakingOf /> },
      { path: 'fairytale/:name', element: <FairytalePage /> }
    ]
  }
]);

export default routes;




