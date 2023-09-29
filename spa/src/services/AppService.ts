import { Format } from "../helpers/Format";
import { IApplicantInfo } from "../models/IApplicantInfo";
import { IJobOffer } from "../models/IJobOffer";
import { IAppService } from "./IAppService";

const GET_JOB_ENDPOINT:string = process.env.REACT_APP_GET_JOB_ENDPOINT as string;
const GET_APPLICANT_ENDPOINT:string = process.env.REACT_APP_GET_APPLICANT_ENDPOINT as string;
const SAVE_APPLICANT_ENDPOINT:string = process.env.REACT_APP_SAVE_APPLICANT_ENDPOINT as string;

/**
 * The live app API service
 */
export class AppService implements IAppService {
    /**
     * Returns the response object from the fetch result
     * @param res The fetch result
     */
    private async _getResponse<T>(res:Response):Promise<T> {

        const responseText:string = await res.text();

        //parses the request
        try {
            const response:T = JSON.parse(responseText);                

            //for error
            if(!res.ok) {              
                throw response;
            } 
            //for success
            else {
                return response;
            }
        } catch(e) {          
            throw `Could not parse respone: ${responseText}`;
        }
    }

    public getJobOffer = async (token:string):Promise<IJobOffer> => {

        let options = {
            method: 'get',
            headers: new Headers(),
            body: null,
        };

        const fetchResult:Response = await fetch(Format.text(GET_JOB_ENDPOINT, token), options);
        return await this._getResponse<IJobOffer>(fetchResult);
    }
    public getApplicantInfo = async (token:string):Promise<IApplicantInfo> => {

        let options = {
            method: 'get',
            headers: new Headers(),
            body: null,
        };

        const fetchResult:Response = await fetch(Format.text(GET_APPLICANT_ENDPOINT, token), options);
        return await this._getResponse<IApplicantInfo>(fetchResult);
    }
    public saveApplicantInfo = async (info:IApplicantInfo, token:string):Promise<IApplicantInfo> => {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = {
            method: 'put',
            headers,
            body: JSON.stringify(info),
        };

        const fetchResult:Response = await fetch(Format.text(SAVE_APPLICANT_ENDPOINT, token), options);
        const ret:IApplicantInfo = await this._getResponse<IApplicantInfo>(fetchResult);
        console.log(`SAVED-DATA: `, ret);
        return ret;
    }
}
/**
 * A global interface to use the service.
 * Is the access point the app uses
 */
export const g_service:IAppService = new AppService();