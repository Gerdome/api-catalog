import { Card } from '@mui/material';
import { Fragment } from 'react';
import React from 'react';
import { Box } from '@mui/material';
import { Breadcrumb } from 'app/components';
import { ContentBox, BreadcrumbContainer } from '../shared/styles/ViewStyles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TeamView = () => {
    const { teamId } = useParams();
    const { objectOwnerList } = useSelector((state) => state.catalog);
    const teamName = (objectOwnerList !== null) && (objectOwnerList.length > 0) ? objectOwnerList.find(({id}) => id === teamId).name : '';

    return (
        <Fragment>
            <BreadcrumbContainer>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Catalog", path: "/catalog/default" }, { name: "Team", path: "/catalog/default/team" }, { name: teamName }]} />
                </Box>
            </BreadcrumbContainer>
            <ContentBox>
                <Card>
                    {teamName}
                </Card>
            </ContentBox>
        </Fragment>
    );
};

export default TeamView;
