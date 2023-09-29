/**
 * Describes all the phrases available to the application
 */
export interface ITranslations {
    IPersonBase_firstName:string;
    IPersonBase_lastName:string;
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

    IPerson_nationalIdentityNumber:string;
    IPerson_dateOfBirth:string;
    IPerson_gender:string;

    personalData:string;
    contactInfo:string;

    IApplicantContactInfo_postalAddress:string;
    IContactInfo_phoneNumber:string;
    IContactInfo_emailAddress:string;
    IEmergencyContact_relationshipType:string;

    IBankAccount_recipientName:string;
    IBankAccount_iban:string;

    RelationshipType_Child:string;
    RelationshipType_Spouse:string;
    RelationshipType_LifePartner:string;
    RelationshipType_Father:string;
    RelationshipType_Mother:string;
    RelationshipType_Grandfather:string;
    RelationshipType_Grandmother:string;
    RelationshipType_Brother:string;
    RelationshipType_Sister:string;
    RelationshipType_Uncle:string;
    RelationshipType_Aunt:string;
    RelationshipType_Nephew:string;
    RelationshipType_Niece:string;
    RelationshipType_Friend:string;
    RelationshipType_Other:string;

    bankAccountHeading:string;
    emergencyContactHeading:string;

    saveInformation:string;
}