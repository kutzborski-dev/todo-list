import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ThemeContextProvider from 'context/themeContext';
import {NextUIProvider} from "@nextui-org/react";

// Page wrapper
import { Page } from 'components/index';

// Pages
import {
  TodoFormPage,
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
    path: "/list/new",
    element: <Page><TodoFormPage /></Page>
  },
  {
    path: "/settings",
    element: <Page><SettingsPage /></Page>
  }
]);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NextUIProvider>
        <main className="purple">
            <RouterProvider router={router} />
        </main>
      </NextUIProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
