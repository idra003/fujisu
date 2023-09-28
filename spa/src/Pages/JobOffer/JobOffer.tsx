import { useParams } from "react-router-dom";

/**
 * Holds all the available URL params of the page
 */
type JobOffersParams = {
    /**
     * The token by with the offer is retrived
     */
    token:string;
}

/**
 * Renders out the job offers form
 */
export function JobOffer(props:{}) {
    const _params = useParams<JobOffersParams>();

    return (
        <div>
            Job offers: { _params.token }
        </div>
    );
}