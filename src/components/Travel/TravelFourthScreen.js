import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../assets/css/travel.css'

const TravelFourthInsurance = () => {
    return (
        <React.Fragment>
            <div className="col-md-12 mt50 mb50">

                <Formik initialValues={{}}
                        validationSchema={{}}
                        onSubmit={(values) => console.log(values)}>
                    <Form className="col-md-12 theme-form package-grid-item">
                        <div className="row">

                            <p className="alert alert-custom">
                                Trip Details
                            </p>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Visa Type</label>
                                <Field name="marital_status" as="select"
                                       className="form-control">
                                    <option value="single">Self</option>
                                    <option value="married">Spouse</option>
                                    <option value="married">Child 1</option>
                                    <option value="married">Child 2</option>
                                </Field>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Purpose of Travel</label>
                                <Field name="marital_status" as="select"
                                       className="form-control">
                                    <option value="single">Self</option>
                                    <option value="married">Spouse</option>
                                    <option value="married">Child 1</option>
                                    <option value="married">Child 2</option>
                                </Field>
                            </div>

                            <p className="alert alert-custom">
                                Insured Members - Details (Self 25 Years)
                            </p>

                            <div className="col-md-12 mb-3">
                                <label htmlFor="full_name">Full Name</label>
                                <Field name="full_name" placeholder="Full Name"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="full_name"/>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Date Of Birth</label>
                                <Field name="policy_holder_dob" placeholder="Date of Birth" type="date"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="policy_holder_dob"/>
                                </div>
                            </div>


                            <div className="col-md-6 mb-3">
                                <label>Marital Status</label>
                                <Field name="marital_status" as="select"
                                       className="form-control">
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </Field>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Do you have Indian passport</label>
                                <Field name="marital_status" as="select"
                                       className="form-control">
                                    <option value="single">Yes</option>
                                    <option value="married">No</option>

                                </Field>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="full_name">Passport Number</label>
                                <Field name="full_name" placeholder="Passport Number "
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="full_name"/>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="full_name">Nominee Name</label>
                                <Field name="full_name" placeholder="Nominee Name"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="full_name"/>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Nominee Relationship</label>
                                <Field name="marital_status" as="select"
                                       className="form-control">
                                    <option value="single">Father</option>
                                    <option value="married">Mother</option>
                                    <option value="single">Brother</option>
                                    <option value="married">Sister</option>

                                </Field>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="full_name">Occupation (Insured)</label>
                                <Field name="full_name" placeholder="Occupation"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="full_name"/>
                                </div>
                            </div>

                            <div className="col-md-12 mb-3 mt-2 alert alert-custom">
                                <label>Inward Credit against GST required?</label>
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

                            <p className="alert alert-custom">
                                Additional Questions Details
                            </p>

                            <div className="col-md-12 mb-3 mt-2 dottedBorderRadio">
                                <label>Are any of the above travellers professional/ semi professional sportspeople
                                    ?</label>
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
                            <div className="col-md-12 mb-3 mt-2 dottedBorderRadio">
                                <label>Do any of the above travellers engage in adventure sports?</label>
                                <div className="form-check-inline ml-3">
                                    <Field className="form-check-input" type="radio"
                                           id="adventure1"
                                           name="adventure" value="yes"/>
                                    <label className="form-check-label"
                                           htmlFor="adventure1">Yes</label>
                                </div>
                                <div className="form-check-inline">
                                    <Field className="form-check-input" type="radio"
                                           id="adventure2"
                                           name="adventure" value="no"/>
                                    <label className="form-check-label"
                                           htmlFor="adventure2">No</label>
                                </div>
                            </div>

                            <div className="col-md-12 mb-3 mt-2 dottedBorderRadio">
                                <label>Are any of the above travellers presently suffering from any pre-existing
                                    ailments or suffering from any of the following illness/conditions/disorders:
                                    Diabetes, High blood pressure, Heart condition, Circulatory Disorder, hematological
                                    (blood) disorder, Disorders of the stomach/Large or small intestine, Hernia of any
                                    kind, hemorrhoids, Urinary disorder, Cancer of any Kind ,Bone Muscle Disorder,
                                    Mental illness?</label>
                                <div className="form-check-inline ml-3">
                                    <Field className="form-check-input" type="radio"
                                           id="healthIssue1"
                                           name="healthIssue" value="yes"/>
                                    <label className="form-check-label"
                                           htmlFor="healthIssue1">Yes</label>
                                </div>
                                <div className="form-check-inline">
                                    <Field className="form-check-input" type="radio"
                                           id="healthIssue2"
                                           name="healthIssue" value="no"/>
                                    <label className="form-check-label"
                                           htmlFor="healthIssue2">No</label>
                                </div>
                            </div>

                            <p className="alert alert-custom">
                                Contact Details Of Proposer
                            </p>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="full_name">Full Name</label>
                                <Field name="full_name" placeholder="Full Name"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="full_name"/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Email</label>
                                <Field name="email" placeholder="Email"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="email"/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="mobile">Mobile</label>
                                <Field name="mobile" placeholder="Mobile"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="mobile"/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="mobile">Alternate Mobile</label>
                                <Field name="alt_mobile" placeholder="Alternate Mobile"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="alt_mobile"/>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="address">Address</label>
                                <Field name="address" placeholder="Address"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="address"/>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="pin_code">Pin Code</label>
                                <Field name="pin_code" placeholder="Pin Code"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="pin_code"/>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="city">City</label>
                                <Field name="city" placeholder="City"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="city"/>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <Field name="state" placeholder="State"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="state"/>
                                </div>
                            </div>

                            <p className="alert alert-custom">
                                Disclaimer
                            </p>

                            <label>
                                <Field type="checkbox" name="checked" value="One" className="mr-2"/>
                                I have read and understood the Policy Wording of Bharti Axa - SmartTraveller Schengen
                                Platinum
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Two" className="mr-2"/>
                                Insured Member(s) journey will commence from within India during the Insured Period

                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="three" className="mr-2"/>
                                Insured Member(s) is not travelling outside India for obtaining medical treatment nor
                                against the advice of a medical practitioner and nor waitlisted for any kind of medical
                                treatment.Insured Member(s) has not received a terminal prognosis for a medical
                                condition.

                            </label>


                        </div>
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default TravelFourthInsurance;