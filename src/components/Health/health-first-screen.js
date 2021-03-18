import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

const FirstHealthScreen = () => {

    const healthFirstScreenInitialSchema = {
        policy_type: ''
    }

    const healthFirstScreenValidationSchema = Yup.object({
        policy_type: Yup.string().required('Required')
    })

    const healthFirstScreenSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <div className="row mt50 mb50">
                <div className="col-md-12">
                    <h2 className="health-heading m-b-25">
                        Find the "best match" health insurance for you.
                    </h2>
                </div>

                <div className="col-md-12">
                    <Formik initialValues={healthFirstScreenInitialSchema}
                            validationSchema={healthFirstScreenValidationSchema}
                            onSubmit={healthFirstScreenSubmit}>
                        <Form className="row theme-form">
                            <div className="col-md-6">
                                <div className="col-md-12 mb-3 mt-2">
                                    <div className="form-check">
                                        <Field className="form-check-input" type="radio"
                                               id="policy_typeNew"
                                               name="policy_type" value="new"/>
                                        <label className="form-check-label"
                                               htmlFor="policy_typeNew">Buy New Policy</label>
                                    </div>
                                    <div className="form-check mt-2">
                                        <Field className="form-check-input" type="radio"
                                               id="policy_typeExist"
                                               name="policy_type" value="exist"/>
                                        <label className="form-check-label"
                                               htmlFor="policy_typeExist">Existing Policy</label>
                                    </div>

                                    <div className="form-check mt-2">
                                        <Field className="form-check-input" type="radio"
                                               id="policy_typeSmall"
                                               name="policy_type" value="small"/>
                                        <label className="form-check-label"
                                               htmlFor="policy_typeSmall">Sachet Policy</label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={require('../../assets/images/Health/first-screen.svg')}
                                     className="health-right-image" alt="first-screen"/>
                            </div>
                        </Form>
                    </Formik>
                </div>



            </div>


        </React.Fragment>
    )
}

export default FirstHealthScreen