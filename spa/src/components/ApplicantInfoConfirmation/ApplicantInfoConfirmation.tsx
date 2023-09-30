import * as React from 'react';
import { Box, Button } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import { ApplicantContext } from '../../App';
import { IApplicantInfoConfirmationProps } from './IApplicantInfoConfirmationProps';
import { g_isApplicanInfoComplete } from '../../helpers/generalHelpers';

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
                disabled={!g_isApplicanInfoComplete(_applicant?.value)}
            >
                { _translations?.phrases.saveInformation }
            </Button>
        </Box>
    )
}