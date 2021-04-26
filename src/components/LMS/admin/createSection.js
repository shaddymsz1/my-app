import React from "react";
import axios from "axios";
import Breadcrumb from "../../common/breadcrumb";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateLMSSection = () => {
  const [value, setValue] = useState();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const healthThirdScreenSubmit = () => {
    const obj = { moduleName: value };
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/v1/createmodule",
        obj
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("Module Successfully Uploaded !");
          setValue("");
        }, 100);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };

  return (
    <React.Fragment>
      <Breadcrumb parent="Learning " title="Add Section" />
      <div className="row card justify-content-center text-center mt50 mb50 ptb50">
        <div className="col-md-12">
          <h2 className="health-heading mt100">Create Section</h2>
          <p>Create Section for LMS</p>
        </div>

        <div className="col-md-12 justify-content-center text-center">
          <div className="col-md-6 offset-3">
            <div className="col-md-12 mb-3 mt50">
              <div className="col-md-12 mb-3">
                <input
                  onChange={changeHandler}
                  placeholder="Enter new section name"
                  type="text"
                  className="form-control"
                  value={value}
                />
              </div>

              <div className="col-md-12 mb-3">
                <button
                  onClick={healthThirdScreenSubmit}
                  className="btn btn-primary btn-block"
                >
                  Create Section
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLMSSection;
