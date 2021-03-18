import React, {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import Switch from "../../../custom-components/switch/switch";


const ownershipTransferInitialSchema = {
    policy_holder_national_id: '',
    policy_holder_dob: '',
    phone: '',
    main_driver: '',
    driver_national_id: '',
    driver_dob: ''

}

const ownershipTransferValidationSchema = Yup.object({
    policy_holder_national_id: Yup.string().required('Required'),
    policy_holder_dob: Yup.string().required('Required'),
    main_driver: Yup.string().required('Required'),
    driver_national_id: Yup.string().required('Required'),
    driver_dob: Yup.string().required('Required')
})

const ownershipTransferSubmit = (values) => {
    console.log(values)
}

const OwnershipTransfer = (props) => {
    const [value, setValue] = useState(false);
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <Formik initialValues={ownershipTransferInitialSchema}
                            validationSchema={ownershipTransferValidationSchema}
                            onSubmit={(values) => ownershipTransferSubmit(values)}>
                        <form className="needs-validation m-t-45">

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

                                        <Switch
                                            name="main_driver"
                                            isOn={value}
                                            onColor="#EF476F"
                                            handleToggle={() => setValue(!value)}
                                        />

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

export default OwnershipTransfer;