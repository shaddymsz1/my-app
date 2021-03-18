import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../assets/css/travel.css'

const TravelSecondInsurance = () => {
    return (
        <React.Fragment>
            <div className="col-md-12 mt50 mb50">

                <Formik initialValues={{}}
                        validationSchema={{}}
                        onSubmit={(values) => console.log(values)}>
                    <Form className="col-md-6 offset-3 theme-form package-grid-item">
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
                            <div className="col-md-12 mb-3">
                                <label htmlFor="mobile">Mobile</label>
                                <Field name="mobile" placeholder="Mobile"
                                       className="form-control"/>
                                <div className="text-danger">
                                    <ErrorMessage name="mobile"/>
                                </div>
                            </div>

                        </div>
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default TravelSecondInsurance;