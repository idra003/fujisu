import * as React from 'react';
import { Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { TranslationsContext } from '../../translations/TranslationsContext';
import * as _ from 'lodash';
import { IApplicantInfo } from '../../models/IApplicantInfo';
import { RelationshipType } from '../../models/RelationshipType';
import { ITranslations } from '../../translations/ITranslations';
import { ApplicantContext } from '../../contexts/ApplicantProvider';

const RELATIONSHIP_TYPE_ID:string = '505957bb-7934-441f-b978-9ed829531f53';

/**
 * Renders out the applicant Emergency Contact info input form
 */
export function ApplicantEmergencyContactInfo(props:{}) {
    const _translations = React.useContext(TranslationsContext);
    const _applicant = React.useContext(ApplicantContext);
    
    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                { _translations?.phrases.emergencyContactHeading }
            </Typography>
            <Stack spacing={1}>
                <TextField 
                    label={_translations?.phrases.IPersonBase_firstName} 
                    variant="standard"
                    value={_applicant?.value?.emergencyContact.firstName || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.emergencyContact.firstName = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IPersonBase_lastName} 
                    variant="standard"
                    value={_applicant?.value?.emergencyContact.lastName || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.emergencyContact.lastName = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <FormControl fullWidth>
                    <InputLabel id={RELATIONSHIP_TYPE_ID} required>{_translations?.phrases.IEmergencyContact_relationshipType}</InputLabel>
                    <Select
                        labelId={RELATIONSHIP_TYPE_ID}                        
                        value={(_applicant?.value?.emergencyContact.relationshipType || '') as string}    
                        label={_translations?.phrases.IEmergencyContact_relationshipType}                    
                        onChange={(e:SelectChangeEvent) => {
                            const newEnum:RelationshipType  = e.target.value as RelationshipType;
                            const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                            if(newData) {
                                newData.emergencyContact.relationshipType = newEnum;
                                _applicant?.set(newData);
                            }
                        }}
                    >
                        {
                            Object.values(RelationshipType as object).map((key:string) => (
                                <MenuItem key={key} value={key}>{ _translations?.phrases[`RelationshipType_${key}` as keyof ITranslations] || key }</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <TextField 
                    label={_translations?.phrases.IContactInfo_phoneNumber} 
                    variant="standard"
                    value={_applicant?.value?.emergencyContact.phoneNumber || ''}
                    required
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.emergencyContact.phoneNumber = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
                <TextField 
                    label={_translations?.phrases.IContactInfo_emailAddress} 
                    variant="standard"
                    value={_applicant?.value?.emergencyContact.emailAddress || ''}
                    onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const newValue:string = e.target.value;
                        const newData:IApplicantInfo|null = _.cloneDeep(_applicant?.value || null);
                        if(newData) {
                            newData.emergencyContact.emailAddress = newValue;
                            _applicant?.set(newData);
                        }
                    }}
                />
            </Stack>
        </Card>
    );
}