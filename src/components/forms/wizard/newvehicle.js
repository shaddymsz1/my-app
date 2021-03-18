import React, {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


const newVehicleInitialSchema = {
    policy_holder_national_id: '',
    policy_holder_dob: '',
    phone: '',
    main_driver: '',
    driver_national_id: '',
    driver_dob: '',
    vehicle_purpose_of_insurance: '',
    custom_number: '',
    vehicle_production_year: '',
    policy_date: ''

}

const newVehicleValidationSchema = Yup.object({
    policy_holder_national_id: Yup.string().required('Required'),
    policy_holder_dob: Yup.string().required('Required'),
    main_driver: Yup.string().required('Required'),
    driver_national_id: Yup.string().required('Required'),
    driver_dob: Yup.string().required('Required'),
    vehicle_purpose_of_insurance: Yup.string().required('Required'),
    custom_number: Yup.string().required('Required'),
    vehicle_production_year: Yup.string().required('Required'),
    policy_date: Yup.string().required('Required'),
})

const newVehicleSubmit = (values) => {
    console.log(values)
}

const NewVehicle = (props) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <Formik initialValues={newVehicleInitialSchema}
                            validationSchema={newVehicleValidationSchema}
                            onSubmit={(values) => newVehicleSubmit(values)}>
                        <form className="needs-validation m-t-45">

                            <div className="field-with-label">
                                <h5> New Vehicle Details</h5>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="vehicle_purpose_of_insurance">Purpose Of Insurance</label>
                                        <Field name="vehicle_purpose_of_insurance" placeholder="purpose of insurance"
                                               className="form-control" as="select">
                                            <option value="" disabled selected/>
                                            <option value="Renewal">Renewal</option>
                                            <option value="Ownership_Transfer">Ownership Transfer</option>
                                            <option value="Register_New_Vehicle">Register New Vehicle</option>
                                        </Field>
                                        <div className="text-danger">
                                            <ErrorMessage name="vehicle_purpose_of_insurance"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="custom_number">Custom Number</label>
                                        <Field name="custom_number" placeholder="Custom number"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="custom_number"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="vehicle_production_year">Production year</label>
                                        <Field name="vehicle_production_year" placeholder="Production year"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="vehicle_production_year"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="policy_date">Policy Start Date</label>
                                        <Field name="policy_date" placeholder="Policy Date" type="date"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field-with-label">
                                <h5> Policy Holder Details</h5>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="policy_holder_national_id">National Id Number</label>
                                        <Field name="policy_holder_national_id" placeholder="company name"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_holder_national_id"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="policy_holder_dob">Date of Birth</label>
                                        <Field name="policy_holder_dob" placeholder="Date of Birth" type="date"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="policy_holder_dob"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phone">Mobile Number</label>
                                        <Field name="phone" placeholder="Mobile Number" className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="phone"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field-with-label">
                                <h5> Driver Details</h5>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="main_driver">Are you the main driver ?</label>
                                        <Field name="main_driver" placeholder="company name" className="form-control"
                                               as="select">
                                            <option value="" disabled selected/>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Field>

                                        <div className="text-danger">
                                            <ErrorMessage name="main_driver"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="driver_national_id">Driver National Id</label>
                                        <Field name="driver_national_id" placeholder="company name"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="driver_national_id"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="driver_dob">Date of Birth</label>
                                        <Field name="driver_dob" placeholder="Date Of birth" type="date"
                                               className="form-control"/>
                                        <div className="text-danger">
                                            <ErrorMessage name="driver_dob"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </Formik>
                </div>
            </div>
        </Fragment>
    );
};

export default NewVehicle;