import {
  Box,
  Card,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataSourceList } from 'app/redux/actions/CatalogActions';
import { CardHeader, Title, CatalogTable } from './TableStyles';


let dataSourceListLoaded = false;

const DataSourceTable = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { dataSourceList } = useSelector((state) => state.catalog);

  if (!dataSourceListLoaded) {
    dispatch(getDataSourceList());
    dataSourceListLoaded = true;
  }

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Data Sources</Title>
      </CardHeader>

      <Box overflow="auto">
        <CatalogTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={1}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                ID
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataSourceList.map((source, index) => (
              <TableRow key={index} hover style={index % 2 ? { background: "#f6f6f6" } : { background: "white" }}>
                <TableCell sx={{ px: 3 }} colSpan={1}>
                  <Link to={`data-source/${source.id}`} style={{ 'color': palette.primary.main, 'textDecoration': 'underline' }}>
                    {source.name}
                  </Link>
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={1}>
                  {source.id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CatalogTable>
      </Box>
    </Card>
  );
};

export default DataSourceTable;
