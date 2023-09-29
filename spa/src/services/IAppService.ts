import { IApplicantInfo } from "../models/IApplicantInfo";
import { IJobOffer } from "../models/IJobOffer";

/**
 * Describes the app API service
 */
export interface IAppService {
    /**
     * Returns the job offer of the applicant from the API
     * @param token The offer security token
     * @returns A promise to the offer
     */
    getJobOffer:(token:string) => Promise<IJobOffer>;
    /**
     * Returns the applicant info of a job offer from the API
     * @param token The offer security token
     * @returns A promise to the offer
     */
    getApplicantInfo:(token:string) => Promise<IApplicantInfo>;
    /**
     * Saves the applicant info into the DB
     * @param info The new applicant info to be saved
     * @param token The offer security token
     * @returns The saved info as stored in the DB
     */
    saveApplicantInfo:(info:IApplicantInfo, token:string) => Promise<IApplicantInfo>;
}