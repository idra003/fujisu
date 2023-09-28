import * as React from 'react';

import { ITranslations } from "./ITranslations";

/**
 * Describes the translations context object
 */
export interface ITranslationsContext {
    /**
     * Allows you to set (switch) the translations in the context
     * @param phrases The new phrases to be stored
     */
    set:(phrases:ITranslations) => void;
    /**
     * The phrases currently in the context
     */
    phrases:ITranslations;
}
/**
 * The translations context for the phrases on the app
 */
export const TranslationsContext = React.createContext<ITranslationsContext|null>(null);