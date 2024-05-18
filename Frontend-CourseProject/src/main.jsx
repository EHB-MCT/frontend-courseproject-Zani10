import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './App';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ParallaxProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ParallaxProvider>
  </React.StrictMode>
);
