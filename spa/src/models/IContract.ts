import { ContractType } from "./ContractType";
import { RemunerationCurrency } from "./RemunerationCurrency";
import { RemunerationType } from "./RemunerationType";

/**
 * Describes a single contract/job
 */
export interface IContract {
    /**
     * The type of contract this is
     */
    contractType:ContractType;
    /**
     * The position within the company
     */
    positionName:string;
    /**
     * The position of the job in the compani structure
     */
    structureTreeFullPath:string;
    /**
     * The start date of the job in ISO form
     */
    startDate:string;
    /**
     * The end date of the job in ISO form
     */
    endDate:string|null;
    /**
     * A number from 0 - 1, indicating if this is a full time position or not
     */
    fteWorkload:number;
    /**
     * Shows how the position pays out the salary
     */
    remunerationType:RemunerationType;
    /**
     * The salary of the position
     */
    remunerationGrossAmount:number;
    /**
     * The curreny in with the salary will be payed
     */
    remunerationCurrency:RemunerationCurrency;
    /**
     * The start date of the probationary period in ISO form
     */
    probationaryPeriodStartDate:string;
    /**
     * The end date of the probationary period in ISO form
     */
    probationaryPeriodEndDate:string;
}