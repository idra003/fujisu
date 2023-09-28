import { IApplicantContactInfo } from "./IApplicantContactInfo";
import { IBankAccount } from "./IBankAccount";
import { IEmergencyContact } from "./IEmergencyContact";
import { IPageInfo } from "./IPageInfo";
import { IPerson } from "./IPerson";

/**
 * Describes the applicant information
 */
export interface IApplicantInfo extends IPageInfo {
    /**
     * The personal info of the applicant
     */
    applicant:IPerson;
    /**
     * Holds the applicant contact info
     */
    contactDetails:IApplicantContactInfo;
    /**
     * Holds the banking info of the persion who will recive the salary
     */
    bankAccount:IBankAccount;
    /**
     * The emergency contact person info
     */
    emergencyContact:IEmergencyContact;
}