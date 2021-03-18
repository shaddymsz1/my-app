import React from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Breadcrumb from "../common/breadcrumb";

const PersonalInformation = (props) => {

    const personalInfoInitialSchema = {
        full_name: '',
        email: '',
        mobile: '',
        alt_mobile: '',
        address: '',
        pin_code: '',
        city: '',
        state: '',
        gender: '',
        marital_status: ''

    }

    const personalInfoValidationSchema = Yup.object({
        full_name: Yup.string().required('full_name is required'),
        email: Yup.string().required('email is required'),
        mobile: Yup.string().required('mobile is required'),
        alt_mobile: Yup.string().required('alternate mobile is required'),
        address: Yup.string().required('address is required'),
        pin_code: Yup.string().required('pin code is required'),
        city: Yup.string().required('city is required'),
        state: Yup.string().required('state is required'),
        gender: Yup.string().required('gender is required'),
        marital_status: Yup.string().required('Marital status is required'),
    })

    const personalInfoSubmit = (values) => {
        console.log(values)
    }

    const educationInitialSchema = {
        education_qualification: '',
        educationFile: ''
    }
    const educationValidationSchema = Yup.object().shape({
        education_qualification: Yup.string().required('Required'),
        educationFile: Yup.mixed().required(),
    })

    const educationSubmit = (values) => {
        alert(
            JSON.stringify(
                {
                    fileName: values.file.name,
                    type: values.file.type,
                    size: `${values.file.size} bytes`
                },
                null,
                2
            )
        );
    }

    const documentInitialSchema = {
        pan_card: '',
        panCardFile: '',
        aadhar_card:'',
        aadharCardFrontFile:'',
        aadharCardBackFile:'',
        profileFile:''
    }
    const documentValidationSchema = Yup.object().shape({
        pan_card:Yup.string().required('Required'),
        panCardFile:  Yup.mixed().required(),
        aadhar_card: Yup.string().required('Required'),
        aadharCardFrontFile: Yup.mixed().required(),
        aadharCardBackFile: Yup.mixed().required(),
        profileFile: Yup.mixed().required(),
    })

    const documentSubmit = (values) => {
        alert(
            JSON.stringify(
                {
                    fileName: values.file.name,
                    type: values.file.type,
                    size: `${values.file.size} bytes`
                },
                null,
                2
            )
        );
    }

    return (
        <React.Fragment>

            <Breadcrumb title="Basic Information" parent="Form"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-xl-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Personal Information</h5>
                                    </div>
                                    <div className="card-body">
                                        <Formik initialValues={personalInfoInitialSchema}
                                                validationSchema={personalInfoValidationSchema}
                                                onSubmit={(values) => personalInfoSubmit(values)}>
                                            <Form className="theme-form">
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <label htmlFor="full_name">Full Name</label>
                                                        <Field name="full_name" placeholder="Full Name"
                                                               className="form-control"/>
                                                        <div className="text-danger">
                                                            <ErrorMessage name="full_name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
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

                                                    <div className="col-md-6 mb-3">
                                                        <label>Marital Status</label>
                                                        <Field name="marital_status" as="select"
                                                               className="form-control">
                                                            <option value="single">Single</option>
                                                            <option value="married">Married</option>
                                                        </Field>
                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label>Educational Qualification</label>
                                                        <Field name="marital_status" as="select"
                                                               className="form-control">
                                                            <option value="single">Graduate</option>
                                                            <option value="married">Post Graduate</option>
                                                        </Field>
                                                    </div>

                                                    <div className="col-md-12 mb-3">
                                                        <button className="btn btn-primary mr-1 mt-2"
                                                                type="submit">Submit
                                                        </button>
                                                    </div>
                                                </div>

                                            </Form>
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Upload Documents</h5>
                                    </div>
                                    <div className="card-body">
                                        <Formik initialValues={documentInitialSchema}
                                                validationSchema={documentValidationSchema}
                                                onSubmit={(values) => documentSubmit(values)}>
                                            {({setFieldValue}) => {
                                                return (
                                                    <Form className="theme-form">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <label htmlFor="pan_card">Pan Card Number</label>
                                                                <Field name="pan_card" placeholder="Pan Card Number"
                                                                       className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="pan_card"/>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <label>Upload Pan Card</label>
                                                                <input id="panCard" name="file" type="file"
                                                                       onChange={(event) => {
                                                                           setFieldValue("panCardFile", event.currentTarget.files[0]);
                                                                       }} className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="panCardFile"/>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <label htmlFor="pan_card">Aadhar Card Number</label>
                                                                <Field name="aadhar_card" placeholder="Aadhar Card Number"
                                                                       className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="aadhar_card"/>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <label>Upload Aadhar Card Front</label>
                                                                <input id="aadharCard" name="file" type="file"
                                                                       onChange={(event) => {
                                                                           setFieldValue("aadharCardFrontFile", event.currentTarget.files[0]);
                                                                       }} className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="aadharCardFrontFile"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <label>Upload Aadhar Card Back</label>
                                                                <input id="aadharCardFront" name="file" type="file"
                                                                       onChange={(event) => {
                                                                           setFieldValue("aadharCardBackFile", event.currentTarget.files[0]);
                                                                       }} className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="aadharCardBackFile"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <label>Upload Profile Image</label>
                                                                <input id="aadharCardBack" name="file" type="file"
                                                                       onChange={(event) => {
                                                                           setFieldValue("profileFile", event.currentTarget.files[0]);
                                                                       }} className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="profileFile"/>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <button type="submit"
                                                                        className="btn btn-primary mr-1 mt-2">Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )
                                            }}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Educational Information</h5>
                                    </div>
                                    <div className="card-body">
                                        <Formik initialValues={educationInitialSchema}
                                                validationSchema={educationValidationSchema}
                                                onSubmit={(values) => educationSubmit(values)}>
                                            {({setFieldValue}) => {
                                                return (
                                                    <Form className="theme-form">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <label>Educational Qualification</label>
                                                                <Field name="education_qualification" as="select"
                                                                       className="form-control">
                                                                    <option value="Graduate">Graduate</option>
                                                                    <option value="Post">Post Graduate</option>
                                                                </Field>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <label>Upload Certificate</label>
                                                                <input id="file" name="file" type="file"
                                                                       onChange={(event) => {
                                                                           setFieldValue("educationFile", event.currentTarget.files[0]);
                                                                       }} className="form-control"/>
                                                                <div className="text-danger">
                                                                    <ErrorMessage name="educationFile"/>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <button type="submit"
                                                                        className="btn btn-primary mr-1 mt-2">Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )
                                            }}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Update Business Information</h5>
                                    </div>
                                    <div className="card-body">
                                        <Formik initialValues={documentInitialSchema}
                                                validationSchema={documentValidationSchema}
                                                onSubmit={(values) => documentSubmit(values)}>
                                            {({setFieldValue}) => {
                                                return (
                                                    <Form className="theme-form">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <label>Primary Source Of Income</label>
                                                                <Field name="income_source" as="select"
                                                                       className="form-control">
                                                                    <option value="salaried">Salaried</option>
                                                                    <option value="married">Other options</option>
                                                                </Field>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <label>Years of experience in Insurance</label>
                                                                <Field name="insurance_experience" as="select"
                                                                       className="form-control">
                                                                    <option value="freshar">Fresher</option>
                                                                    <option value="married">Other options</option>
                                                                </Field>
                                                            </div>

                                                            <div className="col-md-12 mb-3 mt-2">
                                                                <label>Do you have a dedicated office space for handling insurance business ?</label>
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

                                                            <div className="col-md-12 mb-3">
                                                                <label>Motor Premium</label>
                                                                <Field name="motor_premium" as="select"
                                                                       className="form-control">
                                                                    <option value="freshar">Fresher</option>
                                                                    <option value="married">Other options</option>
                                                                </Field>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <label>Health Premium</label>
                                                                <Field name="health_premium" as="select"
                                                                       className="form-control">
                                                                    <option value="freshar">Fresher</option>
                                                                    <option value="married">Other options</option>
                                                                </Field>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <label>Life Premium</label>
                                                                <Field name="life_premium" as="select"
                                                                       className="form-control">
                                                                    <option value="freshar">Fresher</option>
                                                                    <option value="married">Other options</option>
                                                                </Field>
                                                            </div>



                                                            <div className="col-md-12 mb-3">
                                                                <button type="submit"
                                                                        className="btn btn-primary mr-1 mt-2">Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )
                                            }}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )

}

export default PersonalInformation