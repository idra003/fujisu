import { Route, Routes } from "react-router-dom";
import { JobOffer } from "./JobOffer/JobOffer";
import { Home } from "./Home/Home";
import { NewEmployeeForm } from "./NewEmployeeForm/NewEmployeeForm";
import { Saved } from "./Saved/Saved";
import { Format } from "../helpers/Format";

/**
 * The route to the job offer
 * @remarks The {0} needs to be replaced by the ":token" for the route and the token in the path
 */
export const JOB_OFFER_URI:string = '/job-offers/{0}';
/**
 * The new employee form page i.e. the page on with the applicant fills in their details
 * @remarks The {0} needs to be replaced by the ":token" for the route and the token in the path
 */
export const NEW_EMPLOYEE_FORM_URI:string = '/new-employee-form/{0}';
/**
 * The applicant review page
 */
export const REVIEW_URI:string = '/review';

/**
 * Renders out the react pages as needed
 */
export function Pages() {
    return (
        <Routes>            
            <Route path={'/'} element={<Home />} />
            <Route path={Format.text(JOB_OFFER_URI, ':token')} element={<JobOffer />} />
            <Route path={Format.text(NEW_EMPLOYEE_FORM_URI, ':token')} element={<NewEmployeeForm />} />
            <Route path={REVIEW_URI} element={<Saved />} />
        </Routes>
    );
}