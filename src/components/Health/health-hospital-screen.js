import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const HospitalScreenHealth = () => {

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
                        Your parent's preferred hospitals?
                    </h2>
                    <p>
                        We will look for plans that have your preferred hospitals in their cashless network.
                    </p>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthThirdScreenInitialSchema}
                            validationSchema={healthThirdScreenValidationSchema}
                            onSubmit={healthThirdScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-6">
                                <div className="col-md-12 mb-3 mt50">

                                    <div className="col-md-8 mb-3">
                                        <Field name="policy_holder_dob" placeholder="Search Hospital Near 211012" type="text"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_holder_dob"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src='https://d5ng0zjhhq362.cloudfront.net/images/hospital-7bc7843eb8.svg'
                                     className="health-right-image" alt="first-screen"/>
                            </div>
                        </Form>
                    </Formik>
                </div>


            </div>


        </React.Fragment>
    )
}

export default HospitalScreenHealth