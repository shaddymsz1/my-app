import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const EditLMSVideoForm = () => {

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

            <div className="row card mt50 mb50 ptb50">
                <div className="col-md-12 text-center">
                    <h2 className="health-heading mt100">
                        Edit Video Form
                    </h2>
                    <p>
                        Edit Video for LMS
                    </p>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthThirdScreenInitialSchema}
                            validationSchema={healthThirdScreenValidationSchema}
                            onSubmit={healthThirdScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-6 offset-3">
                                <div className="col-md-12 mb-3 mt50">

                                    <div className="col-md-12 mb-3">
                                        <Field name="policy_holder_dob" placeholder="Select Section name"
                                               as="select"
                                               className="form-control">
                                            <option value="section1">Section1</option>
                                            <option value="section2">Section2</option>
                                            <option value="section3">Section3</option>
                                            <option value="section4">Section4</option>
                                        </Field>
                                        <div className="text-danger">
                                            <ErrorMessage name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <Field name="video_name" placeholder="Enter Video name"
                                               type="text"
                                               className="form-control"/>

                                        <div className="text-danger">
                                            <ErrorMessage name="video_name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <Field name="video_desc" placeholder="Enter Video Description text"
                                               type="text"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="video_desc"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="text-left">Video Thumbnail Image</label>
                                        <Field name="video_thumb" placeholder="Enter Video Description text"
                                               type="file"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="video_thumb"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="text-left">Upload Video</label>
                                        <Field name="video" placeholder="Upload Video"
                                               type="file"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="video"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Update Video Info
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

export default EditLMSVideoForm