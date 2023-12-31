import { Gender } from "./Gender";
import { IPersonBase } from "./IPersonBase";

/**
 * Holds the full info regarding a person
 */
export interface IPerson extends IPersonBase {
    /**
     * The national ID of the person
     */
    nationalIdentityNumber:string|null;
    /**
     * The date of birth of the applicant in ISO form
     */
    dateOfBirth:string|null;
    /**
     * The gender of the applicant
     */
    gender:Gender|null;
}