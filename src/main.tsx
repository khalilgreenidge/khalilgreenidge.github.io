import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.tsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import routes from './routes/routes.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
