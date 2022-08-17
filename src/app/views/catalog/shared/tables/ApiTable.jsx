import {
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApiList } from 'app/redux/actions/CatalogActions';
import { CardHeader, Title, CatalogTable, Small } from './TableStyles';


let apiCatalogLoaded = false;

const ApiTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { apiList, objectOwnerList, dataSourceList } = useSelector((state) => state.catalog);
  const { palette } = useTheme();
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  if (!apiCatalogLoaded) {
    dispatch(getApiList());
    apiCatalogLoaded = true;
  }

  const handleOpenApi = () => {
    navigate('/catalog/default/api/petstore');
  }

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>APIs</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">Team A</MenuItem>
          <MenuItem value="last_month">Team B</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <CatalogTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={2}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Owner
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Data Source
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Type
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2} align="left">
                Description
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Tags
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {apiList.map((api, index) => (
              <TableRow key={index} hover style={index % 2 ? { background: "#f6f6f6" } : { background: "white" }}>
                <TableCell sx={{ px: 3 }} colSpan={2}>
                  <Link to={`api/${api.id}`} style={{ 'color': palette.primary.main, 'textDecoration': 'underline' }}>{api.name}</Link>
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  <Link to={`team/${api.ownerObjectId}`} style={{ 'color': palette.primary.main, 'textDecoration': 'underline' }}>
                    {(objectOwnerList !== null) && (objectOwnerList.length > 0) ? objectOwnerList.find(({ id }) => id === api.ownerObjectId).name : ''}
                  </Link>
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  <Link to={`data-source/${api.dataSourceId}`} style={{ 'color': palette.primary.main, 'textDecoration': 'underline' }}>
                    {(dataSourceList !== null) && (dataSourceList.length > 0) ? dataSourceList.find(({ id }) => id === api.dataSourceId).name : ''}
                  </Link>
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={1}>
                  {api.type}
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2} align="left">
                  {api.description}
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <Small bgcolor={bgPrimary}>Tag</Small>
                  <Small bgcolor={bgSecondary}>Tag</Small>
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton onClick={handleOpenApi}>
                    <Icon
                      color="primary"
                    >edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CatalogTable>
      </Box>
    </Card>
  );
};

export default ApiTable;
