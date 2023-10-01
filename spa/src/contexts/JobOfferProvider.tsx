import React from 'react';
import { IRefState, useRefState } from '../react-hooks/useRefState';
import { IJobOffer } from '../models/IJobOffer';

/**
 * Holds the job offer loaded into the app
 */
export const JobOfferContext = React.createContext<IRefState<IJobOffer|null>|null>(null);

export interface IJobOfferProps {
    defaultValue?:IJobOffer
}

export function JobOfferProvider(props:React.PropsWithChildren<IJobOfferProps>) {
    const _offer:IRefState<IJobOffer|null> = useRefState<IJobOffer|null>(props.defaultValue || null);
    
    return (
        <JobOfferContext.Provider value={_offer}>
            { props.children }
        </JobOfferContext.Provider>
    );
}