import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";


const HealthProposalForm = () => {
    return (
        <React.Fragment>
            <div className="card-body">


                <div className="package-grid-block">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="fs15">Self</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="fs15">Health Insurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="https://www.yourloanadvisors.com/wp-content/uploads/2016/07/hdfc.png"
                                             className="check-img" alt="logo"/>
                                    </div>
                                    <div className="col-md-8">
                                        <h1 className="health-provider-name mt-0">
                                            Care Advantage with discount riders
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="fs15">Sum Assured <span className="btn-link ">₹1 Cr</span> </p>

                                    </div>
                                    <div className="col-md-6">
                                        <p className="fs15 btn-link">₹10936</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Formik initialValues={{}}
                        validationSchema={{}}
                        onSubmit={(values) => console.log(values)}>
                    <Form className="theme-form">
                        <div className="package-grid-block">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="email">Email Address</label>
                                    <Field name="email" placeholder="Email"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="email"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="package-grid-block">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="form-heading">Self (27 Years)</h5>
                                    <hr/>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="salutation"> Salutation</label>
                                    <Field name="salutation" placeholder="Mr."
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="salutation"/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="full_name"> Name</label>
                                    <Field name="full_name" placeholder=" Name"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="full_name"/>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="mobile">Date Of Birth</label>
                                    <Field name="dob" placeholder="Date Of Birth" type="date"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="mobile"/>
                                    </div>
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label>Height</label>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name="marital_status" as="select"
                                                   className="form-control">
                                                <option value="7">7 ft</option>
                                                <option value="6">6 ft</option>
                                                <option value="5">5 ft</option>
                                                <option value="4">4 ft</option>
                                                <option value="3">3 ft</option>
                                                <option value="2">2 ft</option>

                                            </Field>
                                        </div>
                                        <div className="col-md-6">
                                            <Field name="inches" as="select"
                                                   className="form-control">
                                                <option value="11">11 Inch</option>
                                                <option value="10">10 Inch</option>
                                                <option value="9">9 Inch</option>
                                                <option value="8">8 Inch</option>
                                                <option value="7">7 Inch</option>
                                                <option value="6">6 Inch</option>
                                                <option value="5">5 Inch</option>
                                                <option value="4">4 Inch</option>
                                                <option value="3">3 Inch</option>
                                                <option value="2">2 Inch</option>
                                                <option value="1">1 Inch</option>
                                            </Field>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="weight"> Weight</label>
                                    <Field name="weight" placeholder=" Weight In KG."
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="full_name"/>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Occupation</label>
                                    <Field name="marital_status" as="select"
                                           className="form-control">
                                        <option value="single">Private Job</option>
                                        <option value="married">Government Job</option>
                                    </Field>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <button className="btn btn-primary mr-1 mt-2"
                                            type="submit">Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="package-grid-block">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="form-heading">Basic Medical History</h5>
                                    <hr/>
                                </div>

                                <div className="col-md-12 mb-3 mt-2">
                                    <label>Do you wish to port your existing policy?</label>
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="officeSpaceNo"
                                                   name="officeSpace" value="no"/>
                                            <label className="form-check-label"
                                                   htmlFor="officeSpaceNo">No</label>
                                        </div>

                                        <Field className="form-check-input" type="radio"
                                               id="officeSpace"
                                               name="officeSpace" value="self"/>
                                        <label className="form-check-label"
                                               htmlFor="officeSpace">Self</label>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default HealthProposalForm