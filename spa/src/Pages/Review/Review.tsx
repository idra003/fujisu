import * as React from 'react';
import { TitleContext } from '../../App';

/**
 * Renders out the applicant review page
 */
export function Review(props:{}) {
    const _title = React.useContext(TitleContext);

    React.useEffect(() => {
        _title?.set("Review");
    }, []);

    return (
        <div>
            Review
        </div>
    );
}