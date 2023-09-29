/**
 * Describes all the phrases available to the application
 */
export interface ITranslations {
    IPerson_firstName:string;
    IPerson_lastName:string;
    offerRecipient:string;

    contract:string;
    IContract_contractType:string;
    IContract_positionName:string;
    IContract_structureTreeFullPath:string;
    IContract_startDate:string;
    IContract_endDate:string;
    IContract_fteWorkload:string;
    IContract_remunerationType:string;
    IContract_remunerationGrossAmount:string;
    IContract_remunerationCurrency:string;
    IContract_probationaryPeriodStartDate:string;
    IContract_probationaryPeriodEndDate:string;

    ContractType_Employment:string;
    ContractType_AuthorizationAgreement:string;
    ContractType_ContractForServices:string;
    ContractType_Replacement:string;

    RemunerationType_HourlyWage:string;
    RemunerationType_MothlyWage:string;
    RemunerationType_AnnualSalary:string;
    
    benefits:string;
    
    termsCheckboxLabel:string;
    acceptBtnLabel:string;
}