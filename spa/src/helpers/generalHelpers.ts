/**
 * Returns an array of all the enum values in question
 * @param enumToBeParsed The enum that is to be parsed into value (Works only with numberic enums!)
 */
export function g_getEnumValues<T>(enumToBeParsed:any):T[] {
    const ret:T[] = Object.values(enumToBeParsed as any).filter(v => !isNaN(Number(v))) as T[];
    return ret;;
}