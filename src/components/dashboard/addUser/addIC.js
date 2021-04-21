import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

function AddIC() {
  const [data, setData] = useState({
    company_name: "",
    company_registrationid: "",
    company_url: "",
    contact: "",
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/bankManagement/addInsuranceCompany",
        data
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("File Successfully Uploaded !");
        }, 10);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };
  return (
    <Fragment>
      <Breadcrumb parent="Insurance Companay " title="Add IC" />
      <div className="card col-sm-8 mx-auto">
        <div className="card-header">
          <h3>Add Insurance Company</h3>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Company Name</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="company_name"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Company Registration ID
            </label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="company_registrationid"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Company URL</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="company_url"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Contact Number</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="contact"
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="col-md-4 pull-right">
            <button
              type="button"
              className="btn pull-right btn-block btn-primary text-center"
              onClick={handleSubmit}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddIC;
