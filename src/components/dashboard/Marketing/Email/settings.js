import React,{Fragment} from 'react'
import '../../../../assets/css/custom-form.css'
import {Field, Form, Formik} from "formik";

const Settings = (props) => {
    return (
        <Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-12">
                    <div className="card">
                        <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">

                                <div className="col-md-12">
                                    <h5 className="col-md-12 card-header">Email Settings</h5>
                                </div>

                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">From Name *</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Abhishek Sinha</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">From Address *</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">hi@xpcover.com</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="col-md-9 mb-3 mt-2">
                                    <div className="col-md-10 mb-3">
                                        <label className="f-w-600">Subject Line *</label>
                                        <div className="row">
                                        <div className="col-md-11">
                                        <Field
                                            name="date_of_birth"
                                            placeholder="Subject"
                                            className="form-control"
                                        />
                                        </div>
                                        <div className="col-md-1">
                                        <button
                                            className="btn btn-lg btn-primary"
                                            type="link"
                                            onClick={() => props.history.push("/dashboard/editor")}
                                        >
                                            Personalise
                                        </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-9 mb-3 mt-2">
                                    <div className="col-md-10 mb-3">
                                        <label className="f-w-600">Preview Text</label>
                                        <div className="row">
                                        <div className="col-md-11">
                                        <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                        <div className="col-md-1">
                                        <button
                                            className="btn btn-lg btn-primary"
                                            type="link"
                                            onClick={() => props.history.push("/dashboard/editor")}
                                        >
                                            Personalise
                                        </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Internal Email name *</label>
                                        <Field name="insurance_experience" placeholder="New Email"
                                               className="form-control">
                                        </Field>
                                    </div>
                                </div>

                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Language</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">English</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>

                                <div className="col-md-10 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Subscription type *</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Marketing Information</option>
                                            <option value="married">Other options</option>
                                        </Field>
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

export default Settings
