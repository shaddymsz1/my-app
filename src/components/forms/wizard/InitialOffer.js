import React, {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


const initialOfferInitialSchema = {
    make: '',
    modal: '',
    chasis_no: '',
    plate_no: ''
}

const initialOfferValidationSchema = Yup.object({
    make: Yup.string().required('Make is required'),
    modal: Yup.string().required('Modal is required'),
    chasis_no: Yup.string().required('Chasis No is required'),
    plate_no: Yup.string().required('Plate Number is required'),
})

const initialOfferSubmit = (values) => {
    console.log(values)
}

const InitialOffer = (props) => {
    return (
        <Fragment>
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
                    <Formik initialValues={initialOfferInitialSchema} validationSchema={initialOfferValidationSchema}
                            onSubmit={(values) => initialOfferSubmit(values)}>
                        <form className="needs-validation m-t-45">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="make">Make</label>
                                    <Field name="make" placeholder="Make" className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="make"/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="modal">Modal</label>
                                    <Field name="modal" placeholder="Modal" className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="modal"/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="chasis_no">Chasis Number</label>
                                    <Field name="chasis_no" placeholder="Chasis Number" className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="chasis_no"/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="plate_no">Plate Number</label>
                                    <Field name="plate_no" placeholder="Plate Number" className="form-control"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="plate_no"/>
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

export default InitialOffer;