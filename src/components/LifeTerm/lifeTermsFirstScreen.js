import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const LifeTermsFirstScreen = () => {

    const healthFirstScreenInitialSchema = {
        policy_type: ''
    }

    const healthFirstScreenValidationSchema = Yup.object({
        policy_type: Yup.string().required('Required')
    })

    const healthFirstScreenSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <div className="row mt50 mb50">
                <div className="col-md-12">
                    <h2 className="health-heading m-b-25">
                        Tell Us About Yourself...
                    </h2>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthFirstScreenInitialSchema}
                            validationSchema={healthFirstScreenValidationSchema}
                            onSubmit={healthFirstScreenSubmit}>
                        <Form className="row theme-form">

                            <div className="col-md-4">
                                <div className="col-md-12 mb-3 mt-2">
                                    <label>Gender</label>
                                    <div className="form-check-inline ml-3">
                                        <Field className="form-check-input" type="radio"
                                               id="MaleRadio"
                                               name="gender" value="male"/>
                                        <label className="form-check-label"
                                               htmlFor="MaleRadio">Male</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <Field className="form-check-input" type="radio"
                                               id="FemaleRadio"
                                               name="gender" value="female"/>
                                        <label className="form-check-label"
                                               htmlFor="FemaleRadio">Female</label>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label>Date Of Birth</label>
                                    <Field name="policy_holder_dob" placeholder="Date of Birth" type="date"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="policy_holder_dob"/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label>Approx Annual Income</label>
                                    <Field name="policy_holder_dob" placeholder="Approx Annual Income" type="text"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="policy_holder_dob"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-6">
                                    <img src={require('../../assets/images/Health/first-screen.svg')}
                                         className="pull-right" alt="first-screen"/>
                                </div>
                            </div>

                        </Form>
                    </Formik>
                </div>


            </div>


        </React.Fragment>
    )
}

export default LifeTermsFirstScreen