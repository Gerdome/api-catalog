import {
    Box,
    styled,
    Table,
  } from '@mui/material';

export const CardHeader = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
  }));
  
  export const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
  }));
  
  export const CatalogTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
      width: 50,
      height: 15,
      borderRadius: 500,
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': { borderBottom: 'none' },
    '& td:first-of-type': { paddingLeft: '16px !important' },
  }));
  
  export const Small = styled('small')(({ bgcolor }) => ({
    width: 50,
    height: 15,
    color: '#fff',
    padding: '2px 8px',
    margin: '4px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  }));