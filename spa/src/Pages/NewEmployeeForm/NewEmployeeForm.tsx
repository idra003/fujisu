import { useParams } from "react-router-dom";

/**
 * Holds all the available URL params of the page
 */
type NewEmployeeFormParams = {
    /**
     * The token by with the offer is retrived
     */
    token:string;
}

/**
 * Renders out the new employee form
 */
export function NewEmployeeForm(props:{}) {
    const _params = useParams<NewEmployeeFormParams>();

    return (
        <div>
            Employee form: { _params.token }
        </div>
    );
}