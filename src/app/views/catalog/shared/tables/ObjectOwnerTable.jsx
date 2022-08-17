import {
    Box,
    Card,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  import { useDispatch, useSelector } from 'react-redux';
  import { getObjectOwnerList } from 'app/redux/actions/CatalogActions';
  import { CardHeader, Title, CatalogTable } from './TableStyles';
  
  
  let objectOwnerListLoaded = false;
  
  const ObjectOwnerTable = () => {
    const dispatch = useDispatch();
    const { objectOwnerList } = useSelector((state) => state.catalog);

    if (!objectOwnerListLoaded) {
      dispatch(getObjectOwnerList());
      objectOwnerListLoaded = true;
    }

    return (
      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
        <CardHeader>
          <Title>Object Owner</Title>
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
              {objectOwnerList.map((owner, index) => (
                <TableRow key={index} hover style ={ index % 2? { background : "#f6f6f6" }:{ background : "white" }}>
                  <TableCell sx={{ px: 3 }} colSpan={1}>
                    {owner.name}
                  </TableCell>
                  <TableCell sx={{ px: 0 }} colSpan={1}>
                    {owner.id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </CatalogTable>
        </Box>
      </Card>
    );
  };
  
  export default ObjectOwnerTable;
  