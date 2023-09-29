import * as React from 'react';
import { Card, Grid, Typography } from "@mui/material";
import { IPersonDisplayProps } from "./IPersonDisplayProps";
import { TranslationsContext } from "../../translations/TranslationsContext";

/**
 * Renders out the person object as a display object
 */
export function PersonDisplay(props:IPersonDisplayProps) {
    const _translations = React.useContext(TranslationsContext);

    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                {_translations?.phrases.offerRecipient}
            </Typography>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IPersonBase_firstName}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ props.info?.firstName }</Typography>
                    
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IPersonBase_lastName}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ props.info?.lastName }</Typography>
                </Grid>
            </Grid>
        </Card>
    );
}