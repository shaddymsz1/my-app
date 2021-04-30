import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import options from "../../../data/typeaheadData";

function AddDepartment({ history }) {
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({ name: "" });
  const url =
    "https://fathomless-plateau-00864.herokuapp.com/bankManagement/departments";
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setOptions(result.data);
    };
    fetchData();
  }, []);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/bankManagement/department/605c77b5b00ebd51dc2ae1ee",
        data
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("Department Successfully Uploaded !");
        }, 100);
        history.push(`${process.env.PUBLIC_URL}/dashboard/addUserLevel`);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };

  return (
    <Fragment>
      <Breadcrumb parent="Department" title="Add Department" />
      <div className="card col-sm-6 mx-auto">
        <div className="card-header">
          <h3>Add Department</h3>
        </div>
        <div className="card-body">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-4 col-form-label">
              Select Departments
            </label>
            <div class="col-sm-8">
              <Typeahead
                id="multiple-typeahead"
                clearButton
                defaultSelected={options.slice(0, 4)}
                labelKey="name"
                multiple
                options={options}
                placeholder="Choose Departments"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Add Custom Department
            </label>
            <div class="col-sm-8">
              <input
                name="name"
                onChange={changeHandler}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="col-md-4 pull-right">
            <button
              type="button"
              onClick={submitHandler}
              className="btn pull-right btn-block btn-primary text-center"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddDepartment;
