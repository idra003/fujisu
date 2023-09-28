import { IContactInfo } from "./IContactInfo";

/**
 * Describes the contact info needed for the applicant
 */
export interface IApplicantContactInfo extends IContactInfo {
    /**
     * The address of the person
     */
    postalAddress:string;
}