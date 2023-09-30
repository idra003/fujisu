import { stdnum } from "stdnum";
import { Gender } from "../models/Gender";
import { IApplicantInfo } from "../models/IApplicantInfo";

/**
 * Returns TRUE if all the applicant info required fields are filled
 * @param info The info to be checked
 */
export function g_isApplicanInfoComplete(info:IApplicantInfo|null|undefined):boolean {    
    if(info) {
        const natonalCode:string = info.applicant.nationalIdentityNumber || '';
        const ret:boolean = !!(
            (info.applicant.firstName || '').trim()
            && (info.applicant.lastName || '').trim()
            && (info.applicant.nationalIdentityNumber || '').trim()
            && stdnum.EE.ik.validate(natonalCode).isValid
            && info.applicant.gender
            && (info.applicant.dateOfBirth || '').trim()
    
            && (info.contactDetails.postalAddress || '').trim()
            && (info.contactDetails.phoneNumber || '').trim()
            && (info.contactDetails.emailAddress || '').trim()
    
            && (info.bankAccount.recipientName || '').trim()
            && (info.bankAccount.iban || '').trim()
    
            && (info.emergencyContact.firstName || '').trim()
            && (info.emergencyContact.lastName || '').trim()
            && info.emergencyContact.relationshipType
            && (info.emergencyContact.phoneNumber || '').trim()
            && (info.emergencyContact.emailAddress || '').trim()
        );
        return ret;
    }
    else {
        return false;
    }
}
/**
 * Returns the gender of the persion from their personal code
 * @param code The EST personal code in question
 * @returns Either the gender or NULL of not a national code of est
 */
export function g_getMaleFromEstCode(code:string):Gender|null {
    code = code.trim();
    if(!stdnum.EE.ik.validate(code).isValid) {
        return null;
    }    
    const genderMarker:number = Number(code[0]);
    return genderMarker % 2 ? Gender.Male : Gender.Female;
}
/**
 * Returns the birthday of the persion from their personal code
 * @param code The EST personal code in question
 * @returns Either the birdat as a Date or NULL of not a national code of est
 */
export function g_getPersionBirthDay(code:string):Date|null {
    code = code.trim();
    if(!stdnum.EE.ik.validate(code).isValid) {
        return null;
    }
    const genderMarker:number = Number(code[0]);    
    const year:number = Number(code[1] + code[2]);
    const thousand:number = 1800 * ((Math.floor(genderMarker / 2) - (genderMarker % 2)) * 100);
    const month:number = Number(code[3] + code[4]);
    const day:number = Number(code[5] + code[6]);
    return new Date(thousand + year, month - 1, day);
}