import * as React from 'react';
import { Box, Button } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import { ApplicantContext } from '../../App';
import { IApplicantInfoConfirmationProps } from './IApplicantInfoConfirmationProps';

/**
 * Renders out the applicant info save button
 */
export function ApplicantInfoConfirmation(props:IApplicantInfoConfirmationProps) {
    const _translations = React.useContext(TranslationsContext);
    const _applicant = React.useContext(ApplicantContext);

    return (
        <Box 
            sx={{
                textAlign: 'right'
            }}
        >
            <Button 
                variant="outlined"
                onClick={() => {
                    props.onSave?.();
                }}
            >
                { _translations?.phrases.saveInformation }
            </Button>
        </Box>
    )
}