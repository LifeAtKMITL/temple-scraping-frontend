import { Navigate, createBrowserRouter } from 'react-router-dom';

import About from '@/pages/About';
import Document from '@/pages/Document';
import Home from '@/pages/Home';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/document', element: <Document /> },
  { path: '*', element: <Navigate to='/' /> },
]);
