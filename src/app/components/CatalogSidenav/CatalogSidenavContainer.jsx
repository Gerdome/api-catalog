import { styled } from '@mui/material';

const Container = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
}));

const CatalogSidenavContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CatalogSidenavContainer;
