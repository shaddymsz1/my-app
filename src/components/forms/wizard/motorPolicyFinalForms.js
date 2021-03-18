import React from "react";
import {Field, Form, Formik} from "formik";
import '../../../assets/css/custom-form.css'

const MotorPolicyFinalForms = () => {
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
            <div className="row" id="finalForm">
                <div className="col-md-7">
                    <div className="package-grid-block">
                        <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">

                                <div className="col-md-12">
                                    <h5 className="col-md-12 final-form-heading">Confirm Your Details</h5>
                                </div>

                                <div className="col-md-6 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Existing Policy Insurer</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Bajaj Allianz</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Car Registration Date</label>
                                        <Field name="reg_date" type="date"
                                               className="form-control">
                                        </Field>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-3 mt-2 borderCircle">
                                    <label className="f-w-600">Existing Policy</label>
                                   <br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="existPolicy"
                                                   name="third" value="third"/>
                                            <label className="form-check-label"
                                                   htmlFor="third">Third Party </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="package"
                                                   name="existPolicy" value="no"/>
                                            <label className="form-check-label"
                                                   htmlFor="package">Comprehensive/Package</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-3 mt-2 borderCircle">
                                    <label className="f-w-600">Did Car Ownership changed in last 12 months?</label>
                                   <br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpace"
                                                   name="carOwnership" value="0"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpace">Yes</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="carOwnership" value="1"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">No</label>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-12 mb-3 mt-2 borderCircle">
                                    <label className="f-w-600">Car is owned by</label>
                                   <br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="carOwner1"
                                                   name="carOwner" value="company"/>
                                            <label className="form-check-label"
                                                   htmlFor="carOwner1">A company</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="carOwner2"
                                                   name="carOwner" value="individual"/>
                                            <label className="form-check-label"
                                                   htmlFor="carOwner2">A Individual</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-3 mt-2 borderCircle">
                                    <label className="f-w-600">Do you want to include Owner-Driver Personal Accident
                                        Cover?</label>
                                   <br/>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="accident1"
                                                   name="accident" value="company"/>
                                            <label className="form-check-label"
                                                   htmlFor="accident1">Yes</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="accident2"
                                                   name="accident" value="individual"/>
                                            <label className="form-check-label"
                                                   htmlFor="accident2">No</label>
                                        </div>
                                    </div>
                                </div>


                                <p className="terms-text text-left">
                                    As Mandate by IRDAI, It is compolusary for Owner Driver to possess a personal
                                    accident cover
                                    of minimum Rs15 Lakhs,except in certain conditions. By selecting No you confirm that
                                    you hold an existing
                                    PA Cover or you do not posses a valid driving license.
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-md-5  m-t-45">
                    <div className="package-grid-item">
                        <div className="col-md-12">
                            <h1 className="health-provider-name mt-0">
                                Your Plan Summary
                            </h1>
                            <hr/>

                            <div className="row">
                                <div className="col-md-8">
                                    <p className="pull-left price-key">Base Plan</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 2884 </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="pull-left price-key">Cover Amount</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 1584 </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="pull-left price-key">Policy Period</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 2544 </p>
                                </div>
                            </div>
                            <div className="row m-t-25">
                                <div className="col-md-8">
                                    <p className="pull-left price-key"><b>Total Premium</b></p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 258404 </p>
                                </div>
                            </div>

                            <div className="row m-t-25">
                                <div className="col-md-12">
                                    <button className="btn btn-block btn-primary paymentbtn">Pay Securely</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MotorPolicyFinalForms;