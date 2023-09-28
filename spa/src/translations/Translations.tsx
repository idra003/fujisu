import * as React from 'react';
import { ITranslations } from './ITranslations';
import { g_etEE } from './et-EE';
import { g_enGB } from './en-GB';
import { TranslationsContext, ITranslationsContext } from './TranslationsContext';
import { IState, useState } from '../react-hooks/useState';
import { MuiThemeContext, g_defaultAppTheme, g_enGBAppTheme } from '../helpers/muiHelper';
import { Theme } from '@mui/material';
import { CultureContext, EE_CULTURE, EN_CULTURE, g_getCurrentCulture, g_setLanguageParam } from '../helpers/cultureHelper';
import { Format } from '../helpers/Format';

/**
 * Holds the current locale phrases 
 */
export let g_parses:ITranslations = g_etEE;
/**
 * The culture used to indicate that the culture should come from the URL is set to be an empyt string 
 * i.e. when FALSEY the culture is taken from the URL
 */
const URL_CULTURE:string = '';

/**
 * A wrapper component to initialize the translations context
 */
export function Translations(props:React.PropsWithChildren<{}>) {
    /**
     * The phrases used by the app
     */
    const _phrases:IState<ITranslations> = useState<ITranslations>(g_etEE);
    /**
     * The value used by the context
     */
    const _contextValue:ITranslationsContext = {
        phrases: _phrases.value,
        set: _phrases.set
    };
    /**
     * Holds (allows to set) the MUI theme of the application.
     * Needed to change the language of the application.
     */
    const _theme:IState<Theme>|null = React.useContext(MuiThemeContext);
    /**
     * Holds the current culture of the app.
     * Is also the CultureContext value
     */
    const _culture:IState<string>|null = useState<string>(URL_CULTURE); 

    //selects the correct language based off the query string
    React.useEffect(() => {
        const culture:string = _culture.value ||  g_getCurrentCulture();

        if(culture !== _culture.value) {            
            _culture.set(culture);
            //the languages will switch on the next 
            return;
        }

        switch(culture) {
            case EN_CULTURE:
                _phrases.set(g_enGB);
                _theme?.set(g_enGBAppTheme);
                g_parses = g_enGB;  
                g_setLanguageParam(culture);
                break;
            default:
            case EE_CULTURE:
                //nothing to do because it is already in estonian
                _theme?.set(g_defaultAppTheme);
                _phrases.set(g_etEE);
                g_parses = g_etEE;                
                g_setLanguageParam(culture);
                break;
        }

        Format.locale = culture;        
    }, [_culture.value]);

    return (
        <TranslationsContext.Provider value={_contextValue}>
            <CultureContext.Provider value={_culture}>
                {props.children}
            </CultureContext.Provider>
        </TranslationsContext.Provider>
    )
}