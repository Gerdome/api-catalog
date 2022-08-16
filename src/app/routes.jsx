import AuthGuard from 'app/auth/AuthGuard';
import catalogRoutes from 'app/views/catalog/CatalogRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import CatalogLayout from './components/CatalogLayout/CatalogLayout';

const routes = [
  {
    element: (
      <AuthGuard>
        <CatalogLayout />
      </AuthGuard>
    ),
    children: [...catalogRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="catalog/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
