import React from 'react';
import { IRefState, useRefState } from '../react-hooks/useRefState';

/**
 * If TRUE the page will be loading
 */
export const IsLoadingContext = React.createContext<IRefState<boolean>|null>(null);

export interface IIsLoadingProps {
    defaultValue?:boolean
}

export function IsLoadingProvider(props:React.PropsWithChildren<IIsLoadingProps>) {
    const _isLoading:IRefState<boolean> = useRefState<boolean>(props.defaultValue || false);
    
    return (
        <IsLoadingContext.Provider value={_isLoading}>
            { props.children }
        </IsLoadingContext.Provider>
    );
}