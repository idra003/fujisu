import * as React from 'react';
import { Card, Typography } from '@mui/material';
import { JobOfferContext } from '../../contexts/JobOfferProvider';

/**
 * Renders out the company welcome on the offers page
 */
export function CompanyWelcome(props:{}) {
    const _offer = React.useContext(JobOfferContext);

    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                { _offer?.value?.businessName }
            </Typography>
            <Typography
                variant={'body2'}
            >
                { _offer?.value?.welcomeText }
            </Typography>
        </Card>
    );
}