import * as React from 'react';
import { Card, Stack, TextField, Typography } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import * as _ from 'lodash';
import { IApplicantInfo } from '../../models/IApplicantInfo';
import { ApplicantContext } from '../../contexts/ApplicantProvider';

/**
 * Renders out the applicant banking info input form
 */
export function ApplicantBankingInfo(props:{}) {
    const _translations = React.useContext(TranslationsContext);
    const _applicant = React.useContext(ApplicantContext);
    
    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                { _translations?.phrases.bankAccountHeading }
            </Typography>
            <Stack spacing={1}>
                <TextField 
                    label={_translations?.phrases.IBankAccount_recipientName} 
                    variant="standard"
                    value={_applicant?.value?.bankAccount.recipientName || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.bankAccount.recipientName = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IBankAccount_iban} 
                    variant="standard"
                    value={_applicant?.value?.bankAccount.iban || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.bankAccount.iban = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
            </Stack>
        </Card>
    );
}