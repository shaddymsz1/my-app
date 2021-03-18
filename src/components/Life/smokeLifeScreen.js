import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

const SmokeLifeScreen = () => {

    const healthSecondScreenInitialSchema = {
        gender: ''
    }

    const healthSecondScreenValidationSchema = Yup.object({
        gender: Yup.string().required('Required')
    })

    const healthFirstScreenSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <div className="row mt50 mb50">
                <div className="col-md-12">
                    <h2 className="health-heading m-b-25">
                        Do you smoke?
                    </h2>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthSecondScreenInitialSchema}
                            validationSchema={healthSecondScreenValidationSchema}
                            onSubmit={healthFirstScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-12">
                                <div className="col-md-12 mb-3 mt-2">
                                    <div className="row mb-3 mt-2 ">
                                        <div className="with-image">
                                            <img src={require('../../assets/images/Health/smoke.jpg')} />
                                            <div className="form-check-inline ml-3">
                                                <Field className="form-check-input" type="radio"
                                                       id="MaleRadio"
                                                       name="gender" value="male"/>
                                                <label className="form-check-label"
                                                       htmlFor="MaleRadio">YES</label>
                                            </div>
                                        </div>
                                        <div className="with-image">
                                            <img src={require('../../assets/images/Health/do-not-smoke.jpg')} />
                                            <div className="form-check-inline">
                                                <Field className="form-check-input" type="radio"
                                                       id="FemaleRadio"
                                                       name="gender" value="female"/>
                                                <label className="form-check-label"
                                                       htmlFor="FemaleRadio">NO</label>
                                            </div>
                                        </div>
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

export default SmokeLifeScreen