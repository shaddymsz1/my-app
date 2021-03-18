import React from "react";
import {Field, Form, Formik} from "formik";
import '../../../assets/css/custom-form.css'

const PolicyReview = () => {
    return (
        <React.Fragment>
            <div className="row">
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon"><i className="icon-shopping-cart" aria-hidden="true"></i></div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl  col-4">
                    <div className="u-pearl-icon"><i className="icon-write" aria-hidden="true"></i></div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl col-4">
                    <div className="u-pearl-icon"><i className="icon-check" aria-hidden="false"></i></div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="package-grid-block text-center">
                        <p className="fs15">
                            As Per your declared <b>No Claim Bonus (NCB) of 20%</b>, here is your revised premimum...
                        </p>

                        <div className="col-md-4 offset-4">
                            <div className="border-dotted">
                                <img src="https://www.yourloanadvisors.com/wp-content/uploads/2016/07/hdfc.png"
                                     className="check-img-new" alt="logo"/>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="pull-left price-key">Old Premium </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="pull-right price-value">₹ 2884 </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="pull-left price-key">Revised Premium</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="pull-right price-value">₹ 2884 </p>
                                    </div>
                                </div>
                                <p className="alert alert-success alert-p2">You are still saving ₹ 2884  </p>
                            </div>

                            <div className="row m-t-25 mb50">
                                <div className="col-md-6">
                                    <p className="pull-left btn-link">Compare Again</p>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn pull-right btn-block btn-primary text-center">Proceed</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PolicyReview;