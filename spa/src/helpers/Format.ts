import { EE_CULTURE } from "./cultureHelper";

export class Format {
    /**
     * The locale of the format object
     */
    public static locale:string = EE_CULTURE;
    /**
     * Returns a string with the values replaced in the input using the {0} wildcards
     * @param input The input string with the wildcards
     * @param values The values to be inserted using the  {0} syntex
     */
    public static text(input:string|null|undefined, ...values:any[]):string {
        let ret:string = input || '';
        
        let index:number = values.length;
        while(index--) {
            let value:any = values[index];
            if(value === null) {
                value = '';
            }
            ret = ret.replaceAll(`{${index}}`, value);
        }

        return ret;
    }
    /**
     * Formats the given ISO date into dd/MM/yyyy
     * @param isoDate The ISO date to be formatted
     * @returns The date as a formated string
     */
    public static isoDate(isoDate:string|undefined|null):string {
        if(!isoDate) {
            return '';
        }

        const date:Date = new Date(isoDate);
        return date.toLocaleDateString(this.locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    /**
     * Formats the given ISO date into dd/MM/yyyy
     * @param isoDate The ISO date to be formatted
     * @returns The date as a formated string
     */
    public static isoDateTime(isoDate:string|undefined|null):string {
        if(!isoDate) {
            return '';
        }

        const date:Date = new Date(isoDate);
        return date.toLocaleDateString(this.locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: "2-digit",
            minute: "2-digit"
        });
    }
    /**
     * Returns a formatted number in the set locale
     * @param nr The number to be formatted
     * @param decimals The number of decimals allowed 
     * @remarks If desimals are negative then sets maximum allowed decimals
     */
    public static number(nr:number|any, decimals:number = -2):string {
        let ret:string;
        
        if(typeof nr === 'number') {
            const maximumFractionDigits:number = Math.abs(decimals);
            const minimumFractionDigits:number = decimals < 0 ? 0 : decimals;
            const formatter = new Intl.NumberFormat(this.locale, { 
                maximumFractionDigits,
                minimumFractionDigits
            });
            ret = formatter.format(nr);
        } 
        else {
            ret = NaN.toString();
        }
        
        return ret; 
    }
}