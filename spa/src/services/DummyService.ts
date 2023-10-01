import { g_delay } from "../helpers/generalHelpers";
import { ContractType } from "../models/ContractType";
import { Gender } from "../models/Gender";
import { IApplicantInfo } from "../models/IApplicantInfo";
import { IJobOffer } from "../models/IJobOffer";
import { RelationshipType } from "../models/RelationshipType";
import { RemunerationCurrency } from "../models/RemunerationCurrency";
import { RemunerationType } from "../models/RemunerationType";
import { IAppService } from "./IAppService";
import * as _ from 'lodash';

export const DUMMY_OFFER:IJobOffer = {
    "pageTitle": "Tööpakkumine",
    "businessName": "Marienthali Pruulikoda OÜ",
    "applicant": {
        "firstName": "Mari",
        "lastName": "Maasikas"
    },
    "welcomeText": "Ettevõte Marienthali Pruulikoda OÜ on Teile teinud tööpakkumise. Pakkumise tingimustega saate tutvuda allpool. Tööpakkumise vastuvõtmiseks vajutage vormi lõpus olevat nuppu 'Kinnita tööpakkumine'. Peale seda suunatakse teid uue töötaja isikuandmete ankeeti täitma",
    "contract": {
        "contractType": ContractType.Employment,
        "positionName": "Turundusjuht",
        "structureTreeFullPath": "Marienthali Pruulikoda OÜ / Müük / Turundu",
        "startDate": "2023-05-29T00:00:00",
        "endDate": null,
        "fteWorkload": 1,
        "remunerationType": RemunerationType.MothlyWage,
        "remunerationGrossAmount": 2750,
        "remunerationCurrency": RemunerationCurrency.EUR,
        "probationaryPeriodStartDate": "2023-05-29T00:00:00",
        "probationaryPeriodEndDate": "2023-09-28T00:00:00"
    },
    "benefits": [
        "7 kalendripäeva lisapuhkust aastas",
        "Kaugtöö võimalus",
        "Sporditoetus 33 eurot kuus",
        "Confido terviselahenduss",
        "Iga-aastased kogupereüritused ja koosviibimised",
        "Isikliku mobiiltelefoni kasutamise kompensatsioon"
    ]
};
export const DUMMY_APPLICANT_EMPTY:IApplicantInfo = {
    "pageTitle": "Uue töötaja isikuandmete ankeet",
    "applicant": {
        "firstName": "Mari",
        "lastName": "Maasikas",
        "nationalIdentityNumber": null,
        "dateOfBirth": null,
        "gender": null
    },
    "contactDetails": {
        "postalAddress": null,
        "phoneNumber": null,
        "emailAddress": "mari.maasikas@supermailer.com"
    },
    "bankAccount": {
        "recipientName": "Mari Maasikas",
        "iban": null
    },
    "emergencyContact": {
        "firstName": null,
        "lastName": null,
        "relationshipType": null,
        "phoneNumber": null,
        "emailAddress": null
    }
}
export const DUMMY_SAVED_APPLICANT:IApplicantInfo = {
    "pageTitle": "Uue töötaja isikuandmete ankeet",
    "applicant": {
        "firstName": "Mari",
        "lastName": "Maasikas",
        "nationalIdentityNumber": "60809252290",
        "dateOfBirth": "2108-09-24T21:00:00.000Z",
        "gender": Gender.Female
    },
    "contactDetails": {
        "postalAddress": "Pärna tee, Tallinn",
        "phoneNumber": "+372 555-5555",
        "emailAddress": "mari.maasikas@supermailer.com"
    },
    "bankAccount": {
        "recipientName": "Mari Maasikas",
        "iban": "EE00000123456"
    },
    "emergencyContact": {
        "firstName": "Muri",
        "lastName": "Maasikas",
        "relationshipType": RelationshipType.Grandmother,
        "phoneNumber": "+372 555 5551",
        "emailAddress": ""
    }
};

export class DummyService implements IAppService {
    public getJobOffer = async (token:string):Promise<IJobOffer> => {
        await g_delay(300);
        return _.cloneDeep(DUMMY_OFFER);
    }
    public getApplicantInfo = async (token:string):Promise<IApplicantInfo> => {
        await g_delay(300);
        return _.cloneDeep(DUMMY_APPLICANT_EMPTY);
    }
    public saveApplicantInfo = async (info:IApplicantInfo, token:string):Promise<IApplicantInfo> => {
        await g_delay(300);
        return _.cloneDeep(info);
    }
}