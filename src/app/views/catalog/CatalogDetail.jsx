import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { AppBar } from '@mui/material';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import PropTypes from "prop-types";
import { Breadcrumb } from 'app/components';
import SwaggerGUI from './SwaggerUI';

const BreadcrumbContainer = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
}

const CatalogDetail = () => {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Fragment>
            <BreadcrumbContainer>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Catalog", path: "/catalog/default" }, { name: "Petstore" }]} />
                </Box>
            </BreadcrumbContainer>
            <ContentBox>
                <Card>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="OpenAPI" {...a11yProps(1)} />
                        <Tab label="OpenShift" {...a11yProps(2)} />
                        <Tab label="APIM" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    Overview
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SwaggerGUI></SwaggerGUI>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    OpenShift
                </TabPanel>
                <TabPanel value={value} index={3}>
                    APIM
                </TabPanel>
                </Card>
            </ContentBox>
        </Fragment>
    );
};

export default CatalogDetail;
