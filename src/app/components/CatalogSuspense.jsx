import {CatalogLoading } from 'app/components';
import { Suspense } from 'react';

const CatalogSuspense = ({ children }) => {
  return <Suspense fallback={<CatalogLoading />}>{children}</Suspense>;
};

export default CatalogSuspense;
