import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Auth from './pages/Auth/Auth.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/Auth',
    element: <Auth />,
  },
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
