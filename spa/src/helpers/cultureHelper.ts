import * as React from "react";
import { IState } from "../react-hooks/useState";

/**
 * The culture context of the application i.e. you can query this to see what the language culture is
 */
export const CultureContext = React.createContext<IState<string>|null>(null);
/**
 * The language query string param name (in lower case)
 */
export const LANGUAGE_PARAM_NAME:string = 'lang';
/**
 * The culture used for estonian
 */
export const EE_CULTURE:string = 'et-EE';
/**
 * The culture used for English
 */
export const EN_CULTURE:string = 'en-GB';

/**
 * Sets the culture on the language param on the query string
 * @param culture The new culture to be set
 */
export function g_setLanguageParam(culture:string):void {
    var searchParams = new URLSearchParams(window.location.search)        
    searchParams.set(LANGUAGE_PARAM_NAME, culture);
    var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    window.history.pushState(null, '', newRelativePathQuery);
}
/**
 * Returns the current culture based off the current URL settings
 */
export function g_getCurrentCulture():string {
    let ret:string = 'et-EE'; //default

    const params:URLSearchParams = new URLSearchParams(window.location.search.toLocaleLowerCase());
    if(params.has(LANGUAGE_PARAM_NAME)) {
        switch(params.get(LANGUAGE_PARAM_NAME)) {
            case 'en':
            case 'en-gb':
            case 'en-us':
                ret = 'en-GB';
                break;            
            default:
            case 'et-ee':
                ret = 'et-EE';                
                break;
        }
    }

    return ret;
}