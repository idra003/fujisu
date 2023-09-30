import * as React from 'react';
import { Card, Stack, TextField, Typography } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import { ApplicantContext } from '../../App';
import * as _ from 'lodash';
import { IApplicantInfo } from '../../models/IApplicantInfo';
import { stdnum } from 'stdnum';
import { Gender } from '../../models/Gender';
import { g_getMaleFromEstCode, g_getPersionBirthDay } from '../../helpers/generalHelpers';


/**
 * Renders out the applicant info input form
 */
export function ApplicantInfo(props:{}) {
    const _translations = React.useContext(TranslationsContext);
    const _applicant = React.useContext(ApplicantContext);

    const _nationalCode:string = _applicant?.value?.applicant.nationalIdentityNumber || '';
    const _isNationalCodeInError = (
        isNaN(_nationalCode as any)
        || (
            !isNaN(_nationalCode as any) 
            && (_nationalCode.trim()).length >= 11
            && !stdnum.EE.ik.validate(_nationalCode).isValid
        )
    );

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

                            if(stdnum.EE.ik.validate(newValue).isValid) {
                                newData.applicant.gender = g_getMaleFromEstCode(newValue);
                                newData.applicant.dateOfBirth = g_getPersionBirthDay(newValue)?.toISOString() || '';
                            }

                            _applicant?.set(newData);
                        }
                    }}
                    error={_isNationalCodeInError}
                    helperText={_isNationalCodeInError ? _translations?.phrases.notEstNationalCodeErrorMessage : ''}
                />
            </Stack>
        </Card>
    );
}