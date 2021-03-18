import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../assets/css/custom-form.css";

const insuranceInitialSchema = {
  insurance_type: "",
  phone: "",
  bank_account: "",
};

const insuranceValidationSchema = Yup.object({
  insurance_type: Yup.string(),
  phone: Yup.string().required("Phone number is required"),
  bank_account: Yup.string().required("Bank Account is required"),
});

const insuranceFormSubmit = (values) => {
  console.log(values);
  JSON.stringify(values);
};

// And now we can use these
const InsuranceInfo = () => {
  const [insuranceType, setInsuranceType] = useState("");
  const changeInsuranceType = (value) => {
    setInsuranceType(value);
    console.log("insu", value);
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="u-pearl current col-4">
          <div className="u-pearl-icon">
            <i className="icon-shopping-cart" aria-hidden="true"></i>
          </div>
          <span className="u-pearl-title">Account Info</span>
        </div>
        <div className="u-pearl  col-4">
          <div className="u-pearl-icon">
            <i className="icon-write" aria-hidden="true"></i>
          </div>
          <span className="u-pearl-title">Billing Info</span>
        </div>
        <div className="u-pearl col-4">
          <div className="u-pearl-icon">
            <i className="icon-check" aria-hidden="false"></i>
          </div>
          <span className="u-pearl-title">Confirmation</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Formik
            initialValues={insuranceInitialSchema}
            validationSchema={insuranceValidationSchema}
            onSubmit={(values) => insuranceFormSubmit(values)}
          >
            <Form>
              <div className="field-with-label">
                <div className="row">
                  <div className="col-md-6 mb-3 offset-3">
                    <label htmlFor="insurance_type">Insurance Type</label>
                    <Field
                      name="insurance_type"
                      placeholder="purpose of insurance"
                      className="form-control"
                      as="select"
                      value={insuranceType}
                      onChange={(e) => changeInsuranceType(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select an Insurance Type
                      </option>
                      <option value="Individual">Individual</option>
                      <option value="Company">Company</option>
                    </Field>
                    <div className="text-danger">
                      <ErrorMessage name="insurance_type" />
                    </div>
                  </div>

                  {insuranceType === "Company" && (
                    <React.Fragment>
                      <div className="col-md-6 mb-3 offset-3">
                        <label htmlFor="phone">Mobile Number</label>
                        <Field
                          name="phone"
                          placeholder="Mobile Number"
                          className="form-control"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="phone" />
                        </div>
                      </div>

                      <div className="col-md-6 mb-3 offset-3">
                        <label htmlFor="bank_account">Bank Account</label>
                        <Field
                          name="bank_account"
                          placeholder="Sequence number"
                          className="form-control"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="bank_account" />
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsuranceInfo;
