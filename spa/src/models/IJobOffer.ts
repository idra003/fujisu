import { IContract } from "./IContract";
import { IPageInfo } from "./IPageInfo";
import { IPersonBase } from "./IPersonBase";

/**
 * Describes a single job offer for an applicant as gotten from the DB
 */
export interface IJobOffer extends IPageInfo {
    /**
     * The name of the business who gave the offer
     */
    businessName:string;
    /**
     * Holds the personal info of the applicant
     */
    applicant:IPersonBase;
    /**
     * The welcome text to be shown to the applicant
     */
    welcomeText:string;
    /**
     * The info regarding the job/contract
     */
    contract:IContract;
    /**
     * Holds all the extra benifits the job has
     */
    benefits:string[];
}