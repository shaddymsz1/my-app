import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

function AddIP() {
  const [data, setData] = useState({
    name: "",
    category: "",
    type: "",
    policy_producer_code: "",
    policy_number: "",
    product_metadata: "",
    tags: "",
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/bankManagement/addInsuranceProduct/60657804da2385227059b5b4",
        data
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("Product Successfully Uploaded !");
          setData({
            name: "",
            category: "",
            type: "",
            policy_producer_code: "",
            policy_number: "",
            product_metadata: "",
            tags: "",
          });
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
          <h3>Add Insurance Product</h3>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label"> Name</label>
            <div className="col-sm-8">
              <input
                value={data.name}
                className="form-control"
                name="name"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Category</label>
            <div className="col-sm-8">
              <input
                value={data.category}
                className="form-control"
                name="category"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Type</label>
            <div className="col-sm-8">
              <input
                value={data.type}
                className="form-control"
                name="type"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Policy Producer Code
            </label>
            <div className="col-sm-8">
              <input
                value={data.policy_producer_code}
                className="form-control"
                name="policy_producer_code"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Policy Number</label>
            <div className="col-sm-8">
              <input
                value={data.policy_number}
                className="form-control"
                name="policy_number"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Product Information
            </label>
            <div className="col-sm-8">
              <input
                value={data.product_metadata}
                className="form-control"
                name="product_metadata"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Tags</label>
            <div className="col-sm-8">
              <input
                value={data.tags}
                className="form-control"
                name="tags"
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

export default AddIP;
