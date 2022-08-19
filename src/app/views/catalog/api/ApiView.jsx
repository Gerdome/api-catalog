import { Card } from '@mui/material';
import { Fragment } from 'react';
import { AppBar } from '@mui/material';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';
import { Breadcrumb } from 'app/components';
// import SwaggerGUI from './SwaggerUI';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ContentBox, BreadcrumbContainer } from '../shared/styles/ViewStyles';
import { TabPanel, a11yProps } from '../shared/Tab';

const ApiView = () => {
    const [value, setValue] = React.useState(0);
    const { apiId } = useParams();
    const { apiList } = useSelector((state) => state.catalog);
    const apiName = (apiList !== null) && (apiList.length > 0) ? apiList.find(({id}) => id === apiId).name : '';


    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Fragment>
            <BreadcrumbContainer>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Catalog", path: "/catalog/default" }, { name: "API", path: "/catalog/default/api" }, { name: apiName }]} />
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
                    Overview {apiName}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* <SwaggerGUI openApiSpec={(apiList !== null) && (apiList.length > 0) ? apiList.find(({id}) => id === apiId).openapi : '' } ></SwaggerGUI> */}
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

export default ApiView;
