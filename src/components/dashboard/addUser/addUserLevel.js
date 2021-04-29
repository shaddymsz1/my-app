import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import options from "../../../data/typeaheadData";

function AddUserLevel({ history }) {
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({ level_name: "" });
  const url =
    "https://fathomless-plateau-00864.herokuapp.com/bankManagement/getUserLevel";
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
        "https://fathomless-plateau-00864.herokuapp.com/bankManagement/createUserLevel",
        data
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("User Level Successfully Uploaded !");
        }, 100);
        history.push(`${process.env.PUBLIC_URL}/dashboard/addBranch`);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };

  return (
    <Fragment>
      <Breadcrumb parent="User Level" title="Add User Level" />
      <div className="card col-sm-6 mx-auto">
        <div className="card-header">
          <h3>Add User Level</h3>
        </div>
        <div className="card-body">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-4 col-form-label">
              Select User Level
            </label>
            <div class="col-sm-8">
              <Typeahead
                id="multiple-typeahead"
                clearButton
                defaultSelected={options.slice(0, 4)}
                labelKey="level_name"
                multiple
                options={options}
                placeholder="Choose a state..."
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              Add Custom User Level
            </label>
            <div class="col-sm-8">
              <input
                name="level_name"
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

export default AddUserLevel;
