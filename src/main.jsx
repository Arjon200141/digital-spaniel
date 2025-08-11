import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
