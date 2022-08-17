import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Catalog = Loadable(lazy(() => import('./Catalog')));
const CatalogDetail = Loadable(lazy(() => import('./CatalogDetail')));

const catalogRoutes = [
  { path: '/catalog/default', element: <Catalog />, auth: authRoles.admin },
  { path: '/catalog/default/api/:apiName', element: <CatalogDetail />, auth: authRoles.admin },
];

export default catalogRoutes;
