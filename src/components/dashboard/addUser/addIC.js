import React, { Fragment } from "react";
import GridTable from "./companyTable";

function AddIC() {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <GridTable />
        </div>
      </div>
    </Fragment>
  );
}

export default AddIC;
