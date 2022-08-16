import { MatxSuspense } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { CatalogLayouts } from './index';

const CatalogLayout = (props) => {
  const { settings } = useSettings();
  const Layout = CatalogLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default CatalogLayout;
