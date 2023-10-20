import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Index from "./components/Index";
import Proceso from "./components/Proceso";
import Postulaciones from "./components/Postulaciones";

const router = createBrowserRouter(
  createRoutesFromElements(
    <><Route path="/" element={<Index />} /><Route path="iniciar-proceso" element={<Proceso />} /><Route path="postulaciones/:id" element={<Postulaciones />} /></>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);