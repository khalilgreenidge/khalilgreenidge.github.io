import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from './routes/routes.tsx';
import LogRocket from 'logrocket';
import Root from './components/root/root.tsx';

LogRocket.init('zobopl/portfolio');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
