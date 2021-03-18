import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const LifeTermsSecondScreen = () => {

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
                        How much would you like to invest?
                    </h2>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthFirstScreenInitialSchema}
                            validationSchema={healthFirstScreenValidationSchema}
                            onSubmit={healthFirstScreenSubmit}>
                        <Form className="row theme-form">

                            <div className="col-md-4">
                                <div className="col-md-12 mb-3">
                                    <label>Payment Frequency</label>
                                    <Field name="marital_status" as="select"
                                           className="form-control">
                                        <option value="single">Monthly</option>
                                        <option value="married">Quarterly</option>
                                        <option value="yearly">Yearly</option>
                                    </Field>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label>Amount</label>
                                    <Field name="policy_holder_dob" placeholder="Amount" type="text"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="policy_holder_dob"/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label>Invest for i.e Premium Paying Terms (P.P.T.) </label>
                                    <Field name="marital_status" as="select"
                                           className="form-control">
                                        <option value="single">1 Year</option>
                                        <option value="married">2 Year</option>
                                        <option value="yearly">3 Year</option>
                                    </Field>
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

export default LifeTermsSecondScreen