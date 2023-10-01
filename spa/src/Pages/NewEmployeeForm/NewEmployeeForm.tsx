import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { g_service } from '../../services/AppService';
import { IApplicantInfo } from '../../models/IApplicantInfo';
import { Box } from '@mui/material';
import { ApplicantInfo } from '../../components/ApplicantInfo/ApplicantInfo';
import { ApplicantContactInfo } from '../../components/ApplicantContactInfo/ApplicantContactInfo';
import { ApplicantBankingInfo } from '../../components/ApplicantBankingInfo/ApplicantBankingInfo';
import { ApplicantEmergencyContactInfo } from '../../components/ApplicantEmergencyContactInfo/ApplicantEmergencyContactInfo';
import { ApplicantInfoConfirmation } from '../../components/ApplicantInfoConfirmation/ApplicantInfoConfirmation';
import { REVIEW_URI } from '../Pages';
import { ApplicantContext } from '../../contexts/ApplicantProvider';
import { IsLoadingContext } from '../../contexts/IsLoadingProvider';
import { TitleContext } from '../../contexts/PageTitleProvider';

/**
 * Holds all the available URL params of the page
 */
type NewEmployeeFormParams = {
    /**
     * The token by with the offer is retrived
     */
    token:string;
}

let g_token:string;

/**
 * Renders out the new employee form
 */
export function NewEmployeeForm(props:{}) {
    const _params = useParams<NewEmployeeFormParams>();
    
    const _applicant = React.useContext(ApplicantContext);
    const _isLoading = React.useContext(IsLoadingContext);
    const _title = React.useContext(TitleContext);

    const _navigate = useNavigate();

    React.useEffect(() => {
        if(g_token === _params.token) {
            return;
        }

        g_token = _params.token || '';

        _isLoading?.set(true); 
        g_service.getApplicantInfo(_params.token || '').then((info:IApplicantInfo) => {
            _applicant?.set(info);
            _title?.set(info.pageTitle);
            _isLoading?.set(false);
        }).catch((e) => {
            _isLoading?.set(false);
            throw e;
        });
    }, [_params.token]);

    return (
        <Box>
            <ApplicantInfo />
            <ApplicantContactInfo />
            <ApplicantBankingInfo />
            <ApplicantEmergencyContactInfo />
            <ApplicantInfoConfirmation 
                onSave={() => {
                    if(_applicant?.value) {
                        _isLoading?.set(true); 
                        g_service.saveApplicantInfo(_applicant?.value, _params.token || '').then((info:IApplicantInfo) => {
                            _applicant?.set(info);
                            _isLoading?.set(false);
                            _navigate(REVIEW_URI);                            
                        }).catch((e) => {
                            _isLoading?.set(false);
                            throw e;
                        });
                    }
                }}
            />
        </Box>
    );
}