import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import "./pagenotfound.scss";

const PageNotFound = () => {
    return (
        <div className="page-not-found-wrapper">
            <div className="page-not-found-icon">
                <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <span>OOPS!! Page not found</span>
        </div>
    )
}

export default PageNotFound;
