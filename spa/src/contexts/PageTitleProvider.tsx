import React from 'react';
import { IState, useState } from '../react-hooks/useState';

/**
 * Holds the title of the page
 */
export const TitleContext = React.createContext<IState<string>|null>(null);

export interface IPageTitleProps {
    defaultValue?:string
}

export function PageTitleProvider(props:React.PropsWithChildren<IPageTitleProps>) {
    const _title:IState<string> = useState<string>(props.defaultValue || '');
    
    return (
        <TitleContext.Provider value={_title}>
            { props.children }
        </TitleContext.Provider>
    );
}