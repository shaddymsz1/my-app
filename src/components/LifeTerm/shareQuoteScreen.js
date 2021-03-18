import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const ShareQuoteScreen = () => {

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
                        Save Your Quote Now
                    </h2>
                    <p>Create a lead for quick and easy quotes. you can manage them from Dashboard</p>
                </div>

                <div className="col-md-12 mt50">
                    <Formik initialValues={healthFirstScreenInitialSchema}
                            validationSchema={healthFirstScreenValidationSchema}
                            onSubmit={healthFirstScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-5">
                                <div className="col-md-12 mb-3">
                                    <label>Lead Name</label>
                                    <Field name="policy_holder_dob" placeholder="Lead Name" type="text"
                                           className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="policy_holder_dob"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
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

export default ShareQuoteScreen