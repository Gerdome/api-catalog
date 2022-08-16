import { CatalogSuspense } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { CatalogLayouts } from './index';

const CatalogLayout = (props) => {
  const { settings } = useSettings();
  const Layout = CatalogLayouts[settings.activeLayout];

  return (
    <CatalogSuspense>
      <Layout {...props} />
    </CatalogSuspense>
  );
};

export default CatalogLayout;
