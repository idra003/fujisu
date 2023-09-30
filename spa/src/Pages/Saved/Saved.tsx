import * as React from 'react';
import { TitleContext } from '../../App';
import { TranslationsContext } from '../../translations/TranslationsContext';
import { Box, Typography } from '@mui/material';

/**
 * Renders out the applicant review page i.e. shows the successfuly saved page
 */
export function Saved(props:{}) {
    const _translations = React.useContext(TranslationsContext);
    const _title = React.useContext(TitleContext);

    React.useEffect(() => {
        _title?.set(_translations?.phrases.successHeading || '');
    }, [_translations?.phrases]);

    return (
        <Box>
            <Typography variant='body2'>
                {_translations?.phrases.successMessage}
            </Typography>            
        </Box>
    );
}