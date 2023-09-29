import * as React from 'react';
import { Card, Stack, TextField, Typography } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import { ApplicantContext } from '../../App';
import * as _ from 'lodash';
import { IApplicantInfo } from '../../models/IApplicantInfo';

/**
 * Renders out the applicant contact info input form
 */
export function ApplicantContactInfo(props:{}) {
    const _translations = React.useContext(TranslationsContext);
    const _applicant = React.useContext(ApplicantContext);
    
    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                { _translations?.phrases.contactInfo }
            </Typography>
            <Stack spacing={1}>
                <TextField 
                    label={_translations?.phrases.IApplicantContactInfo_postalAddress} 
                    variant="standard"
                    value={_applicant?.value?.contactDetails.postalAddress || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.contactDetails.postalAddress = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IContactInfo_phoneNumber} 
                    variant="standard"
                    value={_applicant?.value?.contactDetails.phoneNumber || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.contactDetails.phoneNumber = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IContactInfo_emailAddress} 
                    variant="standard"
                    value={_applicant?.value?.contactDetails.emailAddress || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.contactDetails.emailAddress = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
            </Stack>
        </Card>
    );
}