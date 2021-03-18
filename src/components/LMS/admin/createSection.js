import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const CreateLMSSection = () => {

    const healthThirdScreenInitialSchema = {
        name: ''
    }

    const healthThirdScreenValidationSchema = Yup.object({
        name: Yup.string().required('Section name is Required')
    })

    const healthThirdScreenSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <br/>
            <br/>
            <br/>

            <div className="row card justify-content-center text-center mt50 mb50 ptb50">
                <div className="col-md-12">
                    <h2 className="health-heading mt100">
                        Create Section
                    </h2>
                    <p>
                        Create Section for LMS
                    </p>
                </div>

                <div className="col-md-12 justify-content-center text-center">
                    <Formik initialValues={healthThirdScreenInitialSchema}
                            validationSchema={healthThirdScreenValidationSchema}
                            onSubmit={healthThirdScreenSubmit}>
                        <Form className="row text-center theme-form">
                            <div className="col-md-6 offset-3">
                                <div className="col-md-12 mb-3 mt50">

                                    <div className="col-md-12 mb-3">
                                        <Field name="policy_holder_dob" placeholder="Enter new section name" type="text"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="name"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Create Section
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>


            </div>


        </React.Fragment>
    )
}

export default CreateLMSSection