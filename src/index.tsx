import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Page wrapper
import { Page } from 'components/index';

// Pages
import {
  TodosPage,
  TodoPage,
  SettingsPage
} from 'pages/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page><TodosPage /></Page>
  },
  {
    path: "/list/:id",
    element: <Page><TodoPage /></Page>
  },
  {
    path: "/settings",
    element: <Page><SettingsPage /></Page>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
