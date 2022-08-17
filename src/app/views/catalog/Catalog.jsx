import { Box, Grid, styled } from '@mui/material';
import { Fragment } from 'react';
import { Breadcrumb } from 'app/components';
import ApiTable from './shared/tables/ApiTable';
import DataSourceTable from './shared/tables/DataSourceTable';
import ObjectOwnerTable from './shared/tables/ObjectOwnerTable';

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

  return (
    <Fragment>
      <BreadcrumbContainer>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Catalog" }]} />
        </Box>
      </BreadcrumbContainer>
      <ContentBox className="catalog">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ApiTable></ApiTable>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={5}>
            <DataSourceTable></DataSourceTable>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={5}>
            <ObjectOwnerTable></ObjectOwnerTable>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Catalog;
