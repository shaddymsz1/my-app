import React, {Fragment} from 'react';
import "../../assets/css/health-screens.css"
import {Field, Form, Formik} from "formik";

const HealthOfferSingle = (props) => {
    const submitFun = () => {
        alert("successfully updated")
    }
    return (
        <Fragment>
            <div className="row m-t-45">

                <div className="col-md-8">
                    <div className="package-grid-block">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://www.yourloanadvisors.com/wp-content/uploads/2016/07/hdfc.png"
                                     className="check-img" alt="logo"/>
                            </div>
                            <div className="col-md-9">
                                <h1 className="health-provider-name">
                                    Care Advantage with discount riders
                                </h1>
                                <p className="btn-link">
                                    <a href="" className="font600 m-r-25"> See All Features</a>
                                    <a href="" className="font600"> 69 Cashless Projects</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="package-grid-item">
                        <div className="col-md-12">
                            <h1 className="health-provider-name mt-0">
                                Cover Amount
                            </h1>
                            <p className="">
                                Medical treatment are getting costlier every year. Higher the cover better it is
                            </p>
                            <div className="col-md-6">
                                <Formik initialValues={{}} validationSchema={{}}
                                        onSubmit={values => console.log(values)}>
                                    <Form>
                                        <Field name="marital_status" as="select"
                                               className="form-control">
                                            <option value="single">₹ 1Cr</option>
                                            <option value="married">₹ 10 Lakh</option>
                                        </Field>
                                    </Form>
                                </Formik>
                            </div>

                        </div>
                    </div>
                    <div className="package-grid-item">
                        <div className="col-md-12">
                            <h1 className="health-provider-name mt-0">
                                Policy Period
                            </h1>
                            <p className="">
                                Choosing a multiYear Plan saves your money and trouble of remembering yearly renewals
                            </p>
                            <div className="col-md-12">
                                <Formik initialValues={{}} validationSchema={{}}
                                        onSubmit={values => console.log(values)}>
                                    <Form className="row">
                                        <div className="col-md-4">
                                            <div className="border-radio">
                                                <Field className="form-check-input" type="radio" id="first"
                                                       name="gender" value="male"/>
                                                <label className="form-check-label" htmlFor="first">
                                                    <b>1 Year</b> <br/> Premium <b>₹ 10,936</b>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className="border-radio">
                                                <Field className="form-check-input" type="radio" id="second"
                                                       name="gender" value="female"/>
                                                <label className="form-check-label" htmlFor="second">
                                                    <b>2 Year</b> <br/> Premium <b>₹ 19,756</b>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="border-radio">
                                                <Field className="form-check-input" type="radio" id="third"
                                                       name="gender" value="nogender"/>
                                                <label className="form-check-label" htmlFor="third">
                                                    <b>3 Year</b> <br/> Premium <b>₹ 25,935</b>
                                                </label>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>

                            <div className="col-md-12">
                                <p className="m-t-25">Or, Pay @ <b>₹959/Month</b></p>
                            </div>

                        </div>
                    </div>

                    <div className="package-grid-item">
                        <div className="col-md-12">
                            <h1 className="health-provider-name mt-0">
                                Members Covered
                            </h1>

                            <p className="fs15"> Dinesh Kartik</p>
                        </div>
                    </div>


                </div>

                <div className="col-md-4 m-t-45">
                    <div className="package-grid-item">
                        <div className="col-md-12">
                            <h1 className="health-provider-name mt-0">
                                Summary
                            </h1>
                            <hr/>

                            <div className="row">
                                <div className="col-md-8">
                                    <p className="pull-left price-key">Base Plan</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 2884 </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="pull-left price-key">Cover Amount</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 1584 </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="pull-left price-key">Policy Period</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 2544 </p>
                                </div>
                            </div>
                            <div className="row m-t-25">
                                <div className="col-md-8">
                                    <p className="pull-left price-key"><b>Total Premium</b></p>
                                </div>
                                <div className="col-md-4">
                                    <p className="pull-right price-value">₹ 258404 </p>
                                </div>
                            </div>

                            <div className="row m-t-25">
                                <div className="col-md-12">
                                    <button className="btn btn-block btn-primary paymentbtn">Proceed to proposal</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default HealthOfferSingle;