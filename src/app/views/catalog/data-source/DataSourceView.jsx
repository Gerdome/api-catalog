import { Card } from '@mui/material';
import { Fragment } from 'react';
import React from 'react';
import { Box } from '@mui/material';
import { Breadcrumb } from 'app/components';
import { ContentBox, BreadcrumbContainer } from '../shared/styles/ViewStyles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DataSourceView = () => {
    const { dataSourceId } = useParams();
    const { dataSourceList } = useSelector((state) => state.catalog);
    const dataSourceName = (dataSourceList !== null) && (dataSourceList.length > 0) ? dataSourceList.find(({id}) => id === dataSourceId).name : '';

    return (
        <Fragment>
            <BreadcrumbContainer>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Catalog", path: "/catalog/default" }, { name: "Data Source", path: "/catalog/default/data-source" }, { name: dataSourceName }]} />
                </Box>
            </BreadcrumbContainer>
            <ContentBox>
                <Card>
                    {dataSourceName}
                </Card>
            </ContentBox>
        </Fragment>
    );
};

export default DataSourceView;
