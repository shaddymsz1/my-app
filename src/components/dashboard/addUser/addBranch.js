import React, { useState } from "react";
import { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import CSVReader from "react-csv-reader";
import axios from "axios";

function AddBranch() {
  const [row, setRow] = useState([]);
  const handleForce = (data, fileInfo) => {
    setRow(data);

    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/bankManagement/addBranch",
        data
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  const submitHandler = (e) => {
    console.log(row);
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
              onSubmit={submitHandler}
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
