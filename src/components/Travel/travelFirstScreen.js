import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../assets/css/travel.css'

const TravelFirstInsurance = () => {
    return (
        <React.Fragment>
            <div className="col-md-12 mt50 mb50">
                <div className="col-md-12">
                    <h2 className="travel-heading m-b-25 mt50 pt-5">
                        Travel Insurance covers all kind of a situations...
                    </h2>
                </div>
                <Formik initialValues={{}}
                        validationSchema={{}}
                        onSubmit={(values) => console.log(values)}>
                    <Form className="col-md-6 offset-3 theme-form package-grid-item">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="Destination">Destination</label>
                                <Field name="Destination" placeholder="Destination"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="Destination"/>
                                </div>
                            </div>


                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Select Traveller</label>
                                <Field name="marital_status" as="select"
                                       className="form-control">
                                    <option value="single">Self</option>
                                    <option value="married">Spouse</option>
                                    <option value="married">Child 1</option>
                                    <option value="married">Child 2</option>
                                </Field>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Age of Traveller</label>
                                <Field name="policy_holder_dob" placeholder="Trip Start Date" type="date"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="policy_holder_dob"/>
                                </div>
                            </div>

                            <div className="col-md-12 mb-3 mt-2">

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email">Travel Start Date</label>
                                        <Field name="policy_holder_dob" placeholder="Trip Start Date" type="date"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_holder_dob"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email">Travel End Date</label>
                                        <Field name="policy_holder_dob" placeholder="Trip End Date" type="date"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_holder_dob"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mb-3 mt-2">
                                <label>Any Medical Conditions</label>
                                <div className="form-check-inline ml-3">
                                    <Field className="form-check-input" type="radio"
                                           id="officeSpace"
                                           name="officeSpace" value="yes"/>
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
                            <div className="col-md-12 mb-3 mt-2">
                                <label>Travelling multiple times in a year</label>
                                <div className="form-check-inline ml-3">
                                    <Field className="form-check-input" type="radio"
                                           id="multi"
                                           name="multiTravel" value="yes"/>
                                    <label className="form-check-label"
                                           htmlFor="officeSpace">Yes</label>
                                </div>
                                <div className="form-check-inline">
                                    <Field className="form-check-input" type="radio"
                                           id="officeSpaceNo"
                                           name="multiTravel" value="no"/>
                                    <label className="form-check-label"
                                           htmlFor="officeSpaceNo">No</label>
                                </div>
                            </div>


                        </div>
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default TravelFirstInsurance;