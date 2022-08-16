import {CatalogLoading } from 'app/components';
import { Suspense } from 'react';

const MatxSuspense = ({ children }) => {
  return <Suspense fallback={<CatalogLoading />}>{children}</Suspense>;
};

export default MatxSuspense;
