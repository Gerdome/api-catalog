import { Box, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { Breadcrumb } from 'app/components';
import ApiTable from './shared/ApiTable';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const BreadcrumbContainer = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Catalog = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <BreadcrumbContainer>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Catalog" }]} />
      </Box>
      </BreadcrumbContainer>
      <ContentBox className="catalog">
        <Grid container spacing = {3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ApiTable></ApiTable>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Catalog;
