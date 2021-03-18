import React from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";

const ThirdHealthScreen = () => {

    const healthThirdScreenInitialSchema = {
        policy_type: ''
    }

    const healthThirdScreenValidationSchema = Yup.object({
        policy_type: Yup.string().required('Required')
    })

    const healthThirdScreenSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <div className="row mt50 mb50">
                <div className="col-md-12">
                    <h2 className="health-heading m-b-25">
                        Who would you like to get insured?
                    </h2>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthThirdScreenInitialSchema}
                            validationSchema={healthThirdScreenValidationSchema}
                            onSubmit={healthThirdScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-6">
                                <div className="col-md-12 mb-3 mt-2">
                                    <div className="checkbox">
                                        <input id="SELF" type="checkbox"/>
                                        <label htmlFor="SELF">SELF</label>
                                    </div>
                                    <div className="checkbox">
                                        <input id="WIFE" type="checkbox"/>
                                        <label htmlFor="WIFE">WIFE</label>
                                    </div>
                                    <div className="checkbox">
                                        <input id="MOTHER" type="checkbox"/>
                                        <label htmlFor="MOTHER">MOTHER</label>
                                    </div>
                                    <div className="checkbox">
                                        <input id="FATHER" type="checkbox"/>
                                        <label htmlFor="FATHER">FATHER</label>
                                    </div>
                                    <div className="checkbox">
                                        <input id="SON" type="checkbox"/>
                                        <label htmlFor="SON">SON</label>
                                    </div>
                                    <div className="checkbox">
                                        <input id="DAUGHTER" type="checkbox"/>
                                        <label htmlFor="DAUGHTER">DAUGHTER</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src='https://d5ng0zjhhq362.cloudfront.net/images/family-0300b6f168.svg'
                                     className="health-right-image" alt="first-screen"/>
                            </div>
                        </Form>
                    </Formik>
                </div>


            </div>


        </React.Fragment>
    )
}

export default ThirdHealthScreen