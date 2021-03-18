import React from "react";
import {Field, Form, Formik} from "formik";
import '../../../assets/css/custom-form.css'

const PolicyQuestion2 = () => {
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
                        <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">
                                <img src="https://www.yourloanadvisors.com/wp-content/uploads/2016/07/hdfc.png"
                                     className="check-img-new" alt="logo"/>

                                <div className="col-md-12 mb-3 mt-2 borderCircle">
                                    <label className="f-w-600">Did You make a claim in your existing policy</label>
                                    <br/><br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpace"
                                                   name="officeSpace" value="self"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpace">Yes</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="no"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 m-t-45 borderCircle">
                                    <label className="f-w-600">Select your existing . No claim Bonus (NCB)</label>
                                    <br/><br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpace"
                                                   name="officeSpace" value="0"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpace">0</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="20"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">20</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="25"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">25</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="35"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">35</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="45"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">45</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="55"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">55</label>
                                        </div>
                                    </div>
                                </div>

                                <p className="btn-link fs15 ncbLink">I don't know my previous NCB</p>

                                <p className="terms-text">Please confirm that No Claim Bonus (NCB%) provided by you is
                                    accurate. If found incorrect, the insurance company may reject any claim made by you.
                                    Your current NCB is mentioned in your existing policy.


                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PolicyQuestion2;