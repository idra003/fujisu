import { Route, Routes } from "react-router-dom";
import { JobOffer } from "./JobOffer/JobOffer";
import { Home } from "./Home/Home";
import { NewEmployeeForm } from "./NewEmployeeForm/NewEmployeeForm";
import { Review } from "./Review/Review";

/**
 * The route to the job offer
 */
export const JOB_OFFER_URI:string = '/job-offers/:token';
/**
 * The new employee form page i.e. the page on with the applicant fills in their details
 */
export const NEW_EMPLOYEE_FORM_URI:string = '/new-employee-form/:token';
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
            <Route path={JOB_OFFER_URI} element={<JobOffer />} />
            <Route path={NEW_EMPLOYEE_FORM_URI} element={<NewEmployeeForm />} />
            <Route path={REVIEW_URI} element={<Review />} />
        </Routes>
    );
}