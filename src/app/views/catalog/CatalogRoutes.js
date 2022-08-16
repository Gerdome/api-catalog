import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Catalog = Loadable(lazy(() => import('./Catalog')));

const catalogRoutes = [
  { path: '/catalog/default', element: <Catalog />, auth: authRoles.admin },
];

export default catalogRoutes;
