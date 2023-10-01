import React from 'react';
import { IState, useState } from '../react-hooks/useState';
import { IApplicantInfo } from '../models/IApplicantInfo';

/**
 * Holds the applicant info loaded into the app
 */
export const ApplicantContext = React.createContext<IState<IApplicantInfo|null>|null>(null);

export interface IGetApplicantInfo {
    getValue?:() => IApplicantInfo|null;
}

export interface IApplicantProps {
    defaultValue?:IApplicantInfo,
    getInfo?:IGetApplicantInfo
}

export function ApplicantProvider(props:React.PropsWithChildren<IApplicantProps>) {
    const _applicant:IState<IApplicantInfo|null> = useState<IApplicantInfo|null>(props.defaultValue || null);
    
    if(props.getInfo) {
        props.getInfo.getValue = () => {
            return _applicant.value;
        }
    }

    return (
        <ApplicantContext.Provider value={_applicant}>
            { props.children }
        </ApplicantContext.Provider>
    );
}