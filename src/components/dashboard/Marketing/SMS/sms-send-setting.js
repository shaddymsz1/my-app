import React,{Fragment} from 'react'
import '../../../../assets/css/custom-form.css'
import {Field, Form, Formik} from "formik";

const SmsSendSetting = (props) => {
    return (
        <Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-7">
                    <div className="card">
                        <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">

                                <div className="col-md-10">
                                    <h5 className="col-md-12 card-header">Create SMS Template</h5>
                                </div>

                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">TEAMPLATE NAME</label>
                                        <Field name="insurance_experience" placeholder="Enter Template Name"
                                               className="form-control">
                                        </Field>
                                    </div>
                                </div>
                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">SENDER ID</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Codeglen</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>

                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">INSERT MERGE FIELD</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Select Merge Field</option>
                                            <option value="married">Phone Number</option>
                                            <option value="married">Email Address</option>
                                            <option value="married">User Name</option>
                                            <option value="married">Company</option>
                                            <option value="married">First Name</option>
                                            <option value="married">Last Name</option>
                                        </Field>
                                    </div>
                                </div>
                                
                                <div className="col-md-9 mb-3 mt-2">
                                    <div className="col-md-10 mb-3">
                                        <label className="f-w-600">Preview Text</label>
                                        <div className="row">
                                        <div className="col-md-11">
                                        <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="col-md-1">
                                        <button
                                            className="btn  btn-primary"
                                            type="link"
                                            onClick={() => props.history.push("/dashboard/editor")}
                                        >
                                            Personalise
                                        </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="card-footer">
                                    <button className="btn btn-primary float-right mb-3" type="link">
                                        Save Settings
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default SmsSendSetting
