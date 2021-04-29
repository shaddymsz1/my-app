import React, { Fragment } from "react";
import logo from "../assets/images/other-images/coming-soon-Logo.png";
import CountdownComponent from "../components/common/countdownComponent";

const ComingSoon = ({ history }) => {
  return (
    <Fragment>
      <div className="page-wrapper">
        {/* <!-- Page Body Start--> */}
        <div className="container-fluid p-0">
          <div className="comingsoon">
            <div className="comingsoon-inner text-center">
              <img src={logo} alt="" />
              <h5>Welcome, Let's setup account!</h5>
              <div className="row">
                <div className="col-md-12 pull-right">
                  <button
                    type="button"
                    onClick={() => {
                      history.push(`${process.env.PUBLIC_URL}/dashboard/de`);
                    }}
                    className="btn pull-right btn-block btn-primary text-center"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 mx-auto">
                  <button
                    type="button"
                    onClick={() => {
                      history.push(
                        `${process.env.PUBLIC_URL}/dashboard/default`
                      );
                    }}
                    className="btn pull-right btn-block  text-center"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ComingSoon;
