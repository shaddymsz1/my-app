import React, { useState } from "react";
import { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import CSVReader from "react-csv-reader";
import axios from "axios";
import { toast } from "react-toastify";

function AddBranch() {
  const [row, setRow] = useState([]);
  const handleForce = (data, fileInfo) => {
    setRow(data);
    console.log("file uploaded");
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  const submitHandler = () => {
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/bankManagement/addBranch",
        row
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("File Successfully Uploaded !");
        }, 200);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };

  return (
    <Fragment>
      <Breadcrumb parent="Branch" title="Add Branch" />
      <div className="card col-sm-6 mx-auto">
        <div className="card-header">
          <h3>Add Branch</h3>
        </div>
        <div className="card-body">
          <Formik
            initialValues={{}}
            validationSchema={{}}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Branch Name
                </label>
                <div class="col-sm-8">
                  <Typeahead
                    id="custom-typeahead"
                    allowNew
                    multiple
                    newSelectionPrefix="Add a new item: "
                    options={[]}
                    placeholder="Add One or More Emails..."
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Select Branch From CSV
                </label>
                <div class="col-sm-8">
                  <CSVReader
                    className="form-control"
                    cssClass="react-csv-input"
                    // label="Select CSV with secret Death Star statistics"
                    onFileLoaded={handleForce}
                    parserOptions={papaparseOptions}
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="card-footer">
          <div className="col-md-4 pull-right">
            <button
              type="button"
              className="btn pull-right btn-block btn-primary text-center"
              onClick={submitHandler}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddBranch;
