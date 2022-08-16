import AuthGuard from 'app/auth/AuthGuard';
import catalogRoutes from 'app/views/catalog/CatalogRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...catalogRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="catalog/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
