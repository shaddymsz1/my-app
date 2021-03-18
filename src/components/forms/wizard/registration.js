import React, {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import '../../../assets/css/custom-form.css'
import OwnershipTransfer from "./OwnershipTransfer";
import NewVehicle from "./newvehicle";


const welcomeInitialSchema = {
    company_name: '',
    company_registration_number: '',
    purpose_of_insurance: '',
    sequence_number: '',
    usage_type: '',
    policy_start_date: '',
    policy_holder_national_id: '',
    policy_holder_dob: '',
    phone: '',

}

const welcomeValidationSchema = Yup.object({
    company_name: Yup.string().required('Company name is required'),
    company_registration_number: Yup.string().required('Registartion number is required'),
    purpose_of_insurance: Yup.string().required('purpose is required'),
    sequence_number: Yup.string().required('Sequence Number is required'),
    usage_type: Yup.string().required('usage type is required'),
    policy_start_date: Yup.string().required('Policy start date is required'),
    policy_holder_national_id: Yup.string().required('National Id is required'),
    policy_holder_dob: Yup.string().required('Date of birth is required'),
    phone: Yup.string().required('Mobile number is required')
})

const welcomeFormSubmit = (values) => {
    console.log(values)
    JSON.stringify(values)
}

// And now we can use these
const Registration = () => {

    const [type, setType] = useState('')

    const onChangeType = (value) => {
        setType(value)
    }

    return (
        <React.Fragment>
            <div className="row">
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon"><i className="icon-shopping-cart" aria-hidden="true"></i></div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl  col-4">
                    <div className="u-pearl-icon"><i className="icon-write" aria-hidden="true"></i></div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl col-4">
                    <div className="u-pearl-icon"><i className="icon-check" aria-hidden="false"></i></div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </div>
            <div className="row">
                <div className="col-md-12">
                    <Formik initialValues={welcomeInitialSchema}
                            validationSchema={welcomeValidationSchema}
                            onSubmit={(values) => welcomeFormSubmit(values)}>
                        <Form>

                            <div className="field-with-label">
                                <h5> Company Information</h5>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="company_name">Company Name</label>
                                        <Field name="company_name" placeholder="company name" className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="company_name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="company_registration_number">Company registration number</label>
                                        <Field name="company_registration_number"
                                               placeholder="company registration number"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="company_registration_number"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="purpose_of_insurance">Purpose Of Insurance</label>
                                        <Field name="purpose_of_insurance" placeholder="purpose of insurance"
                                               className="form-control" as="select" value={type}
                                               onChange={(e) => onChangeType(e.target.value)}>
                                            <option value="" disabled selected/>
                                            <option value="Renewal">Renewal</option>
                                            <option value="Ownership_Transfer">Ownership Transfer</option>
                                            <option value="Register_New_Vehicle">Register New Vehicle</option>
                                        </Field>
                                        <div className="text-danger">
                                            <ErrorMessage name="purpose_of_insurance"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="sequence_number">Sequence Number</label>
                                        <Field name="sequence_number" placeholder="Sequence number"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="sequence_number"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="usage_type">usage type</label>
                                        <Field name="usage_type" placeholder="usage type" className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="usage_type"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="policy_start_date">policy start date</label>
                                        <Field name="policy_start_date" placeholder="company name"
                                               className="form-control"
                                               type="date"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_start_date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Form>
                    </Formik>

                    {type === 'Register_New_Vehicle' &&
                    <NewVehicle/>
                    }
                    {type === 'Ownership_Transfer' &&
                    <OwnershipTransfer/>
                    }

                </div>
            </div>
        </React.Fragment>
    )
};

export default Registration
