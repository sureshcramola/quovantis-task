import React from "react";
import { Spinner } from "react-bootstrap";
import "./loader.scss";

const Loader = ({isShowLoader}) => {
  return (
    <>
      {isShowLoader ? (
        <div className="loader-overlay">
          <div className="spinner-wrapper">
            <Spinner animation="border" role="status" variant="primary" size="md">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Loader;
