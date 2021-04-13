import React from "react";
import { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import CSVReader from "react-csv-reader";

const handleForce = (data, fileInfo) => console.log(data, fileInfo);

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};

function AddUser() {
  return (
    <Fragment>
      <Breadcrumb parent="Users" title="Add User" />
      <div className="card col-sm-6 mx-auto">
        <div className="card-header">
          <h3>Add users</h3>
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
                  Email
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
                  Select Emails From CSV
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
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label">
                  Select Designation
                </label>
                <div class="col-sm-8">
                  <Field
                    name="branch_name"
                    as="select"
                    className="form-control"
                  >
                    <option select="">Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </Field>
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
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddUser;
