import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const FourthHealthScreen = () => {

    const healthThirdScreenInitialSchema = {
        policy_type: ''
    }

    const healthThirdScreenValidationSchema = Yup.object({
        policy_type: Yup.string().required('Required')
    })

    const healthThirdScreenSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <div className="row mt50 mb50">
                <div className="col-md-12">
                    <h2 className="health-heading m-b-25">
                        What is their age?
                    </h2>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthThirdScreenInitialSchema}
                            validationSchema={healthThirdScreenValidationSchema}
                            onSubmit={healthThirdScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-6">
                                <div className="col-md-12 mb-3 mt-2">

                                    <div className="col-md-6 mb-3">
                                        <Field name="policy_holder_dob" placeholder="Date of Birth" type="date"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_holder_dob"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src='https://d5ng0zjhhq362.cloudfront.net/images/family-0300b6f168.svg'
                                     className="health-right-image" alt="first-screen"/>
                            </div>
                        </Form>
                    </Formik>
                </div>


            </div>


        </React.Fragment>
    )
}

export default FourthHealthScreen