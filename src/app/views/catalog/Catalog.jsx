import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import Campaigns from './shared/examples/Campaigns';
import DoughnutChart from './shared/examples/Doughnut';
import RowCards from './shared/examples/RowCards';
import StatCards from './shared/examples/StatCards';
import StatCards2 from './shared/examples/StatCards2';
import TopSellingTable from './shared/examples/TopSellingTable';
import UpgradeCard from './shared/examples/UpgradeCard';
import ApiTable from './shared/ApiTable';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Catalog = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
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
