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

function getEntityTable(kind) {
  let apiTable = <Grid item lg={12} md={12} sm={12} xs={12}><ApiTable/></Grid>
  let dataSourceTable = <Grid item lg={5} md={5} sm={5} xs={5}><DataSourceTable/></Grid>
  let objectOwnerTable = <Grid item lg={5} md={5} sm={5} xs={5}><ObjectOwnerTable/></Grid>

  switch(kind) {
    case 'api':
      return apiTable;
    case 'data-source':
      return dataSourceTable;
    case 'object-owner':
      return objectOwnerTable;
    default:
      return [apiTable, dataSourceTable, objectOwnerTable]
  }
};

function getBreadCrumbRoutes(kind) {
  switch(kind) {
    case 'api':
      return [{ name: "Catalog", path: "/catalog/default"}, {name: 'API'}];
    case 'data-source':
      return [{ name: "Catalog", path: "/catalog/default" }, {name: 'Data Source'}];;
    case 'object-owner':
      return [{ name: "Catalog", path: "/catalog/default" }, {name: 'Object Owner'}];;
    default:
      return [{ name: "Catalog" }]
  }
}

const Catalog = ({entity}) => {

  return (
    <Fragment>
      <BreadcrumbContainer>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={getBreadCrumbRoutes(entity)} />
        </Box>
      </BreadcrumbContainer>
      <ContentBox className="catalog">
        <Grid container spacing={3}>
          {getEntityTable(entity)}
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Catalog;
