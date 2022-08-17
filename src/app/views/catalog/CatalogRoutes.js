import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Catalog = Loadable(lazy(() => import('./Catalog')));
const ApiView = Loadable(lazy(() => import('./api/ApiView')));
const TeamView = Loadable(lazy(() => import('./team/TeamView')));
const DataSourceView = Loadable(lazy(() => import('./data-source/DataSourceView')));


const catalogRoutes = [
  { path: '/catalog/default', element: <Catalog />, auth: authRoles.admin },
  { path: '/catalog/default/api/:apiId', element: <ApiView />, auth: authRoles.admin },
  { path: '/catalog/default/team/:teamId', element: <TeamView />, auth: authRoles.admin },
  { path: '/catalog/default/data-source/:dataSourceId', element: <DataSourceView />, auth: authRoles.admin },

];

export default catalogRoutes;
