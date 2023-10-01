/**
 * Descibes the banking info of a person
 */
export interface IBankAccount {
    /**
     * The bank account holders name
     */
    recipientName:string;
    /**
     * The IBAN of the account
     */
    iban:string|null;
}