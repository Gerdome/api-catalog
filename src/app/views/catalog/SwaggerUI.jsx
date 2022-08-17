import { Grid } from '@mui/material';
import React from 'react';

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerGUI = () => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SwaggerUI url="https://raw.githubusercontent.com/Gerdome/api-catalog/main/catalog_oas.json" />
            </Grid>
        </Grid>

    );
};

export default SwaggerGUI;
