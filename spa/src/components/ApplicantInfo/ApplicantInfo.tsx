import * as React from 'react';
import { Card, Stack, TextField, Typography } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import { ApplicantContext } from '../../App';
import * as _ from 'lodash';
import { IApplicantInfo } from '../../models/IApplicantInfo';

/**
 * Renders out the applicant info input form
 */
export function ApplicantInfo(props:{}) {
    const _translations = React.useContext(TranslationsContext);
    const _applicant = React.useContext(ApplicantContext);
    
    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                { _translations?.phrases.personalData }
            </Typography>
            <Stack spacing={1}>
                <TextField 
                    label={_translations?.phrases.IPersonBase_firstName} 
                    variant="standard"
                    value={_applicant?.value?.applicant.firstName || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.applicant.firstName = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IPersonBase_lastName} 
                    variant="standard"
                    value={_applicant?.value?.applicant.lastName || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.applicant.lastName = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IPerson_nationalIdentityNumber} 
                    variant="standard"
                    value={_applicant?.value?.applicant.nationalIdentityNumber || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.applicant.nationalIdentityNumber = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
            </Stack>
        </Card>
    );
}