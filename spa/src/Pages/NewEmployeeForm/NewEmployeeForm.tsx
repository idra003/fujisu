import * as React from 'react';
import { useParams } from "react-router-dom";
import { ApplicantContext, IsLoadingContext, TitleContext } from '../../App';
import { g_service } from '../../services/AppService';
import { IApplicantInfo } from '../../models/IApplicantInfo';

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
    
    const _offer = React.useContext(ApplicantContext);
    const _isLoading = React.useContext(IsLoadingContext);
    const _title = React.useContext(TitleContext);

    React.useEffect(() => {
        if(g_token === _params.token) {
            return;
        }

        g_token = _params.token || '';

        _isLoading?.set(true); 
        g_service.getApplicantInfo(_params.token || '').then((info:IApplicantInfo) => {
            _offer?.set(info);
            _title?.set(info.pageTitle);
            _isLoading?.set(false);
        }).catch((e) => {
            _isLoading?.set(false);
            throw e;
        });
    }, [_params.token]);

    return (
        <div>
            Employee form: { _params.token }
        </div>
    );
}