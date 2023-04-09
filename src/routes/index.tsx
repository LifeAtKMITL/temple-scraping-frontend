import { Navigate, Route, Routes as Router } from 'react-router-dom';

import About from '@/pages/About';
import Document from '@/pages/Document';
import Home from '@/pages/Home';

const config = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/document', element: <Document /> },
  { path: '*', element: <Navigate to='/' /> },
];

export default function Routes() {
  return (
    <Router>
      {config.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Router>
  );
}
