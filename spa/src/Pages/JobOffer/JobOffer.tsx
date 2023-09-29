import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { g_service } from '../../services/AppService';
import { IJobOffer } from '../../models/IJobOffer';
import { IsLoadingContext, JobOfferContext, TitleContext } from '../../App';
import { CompanyWelcome } from '../../components/CompanyWelcome/CompanyWelcome';
import { PersonDisplay } from '../../components/PersonDisplay/PersonDisplay';
import { OfferContract } from '../../components/OfferContract/OfferContract';
import { Box } from '@mui/material';
import { Confirmation } from '../../components/Confirmation/Confirmation';
import { Format } from '../../helpers/Format';
import { NEW_EMPLOYEE_FORM_URI } from '../Pages';

/**
 * Holds all the available URL params of the page
 */
type JobOffersParams = {
    /**
     * The token by with the offer is retrived
     */
    token:string;
}

let g_token:string;

/**
 * Renders out the job offers form
 */
export function JobOffer(props:{}) {
    const _params = useParams<JobOffersParams>();
    const _offer = React.useContext(JobOfferContext);
    const _isLoading = React.useContext(IsLoadingContext);
    const _title = React.useContext(TitleContext);

    const _navigate = useNavigate();

    React.useEffect(() => {
        if(g_token === _params.token) {
            return;
        }

        g_token = _params.token || '';

        _isLoading?.set(true); 
        g_service.getJobOffer(_params.token || '').then((info:IJobOffer) => {
            _offer?.set(info);
            _title?.set(info.pageTitle);
            _isLoading?.set(false);
        }).catch((e) => {
            _isLoading?.set(false);
            throw e;
        });
    }, [_params.token]);

    return (
        <Box>
            <CompanyWelcome />
            <PersonDisplay 
                info={_offer?.value?.applicant}
            />
            <OfferContract />
            <Confirmation 
                onConfirm={() => {
                    _navigate(Format.text(NEW_EMPLOYEE_FORM_URI, _params.token));                    
                }}
            />
        </Box>
    );
}