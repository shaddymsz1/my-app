import React from "react";
import { Fragment } from "react";
import { withRouter } from "react-router";

function UserDashboard() {
  return (
    <Fragment>
      <div className="card mt-10">
        <div className="card-header"></div>
        <div className="card-body">
          <h3>Hi, Welcome To My Acoount Section.</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(UserDashboard);
