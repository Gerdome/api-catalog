import {
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
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

const Small = styled('small')(({ bgcolor }) => ({
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

const ApiTable = () => {
  const { palette } = useTheme();
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

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
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={2}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Owner
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
              <TableRow key={index} hover style ={ index % 2? { background : "#f6f6f6" }:{ background : "white" }}>
                <TableCell sx={{ px: 3 }} colSpan={2}>
                  {api.name}
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  {api.owner}
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
                <IconButton onClick={() => console.log("Do sth with Api")}>
                    <Icon 
                    color="primary"
                    >edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const apiList = [
  {
    name: 'petstore',
    owner: 'Gerrit',
    type: 'openapi',
    description: 'This is a description.',
  },
  {
    name: 'star-wars',
    owner: 'Joachim',
    type: 'graphql',
    description: 'This is a description.',
  },
  {
    name: 'some-grpc',
    owner: 'Conradin',
    type: 'grpc',
    description: 'This is a description.',
  },
  {
    name: 'some-async',
    owner: 'Some Dude',
    type: 'asyncapi',
    description: 'This is a description.',
  },
  {
    name: 'another-openapi',
    owner: 'Another Dude',
    type: 'openapi',
    description:'This is a description.',
  },
];

export default ApiTable;
