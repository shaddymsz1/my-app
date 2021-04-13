import React from "react";
import { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import options from "../../../data/typeaheadData";

function AddDepartment() {
  return (
    <Fragment>
      <Breadcrumb parent="Department" title="Add Department" />
      <div className="card col-sm-6 mx-auto">
        <div className="card-header">
          <h3>Add Department</h3>
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
                  Select Departments
                </label>
                <div class="col-sm-8">
                  <Typeahead
                    id="multiple-typeahead"
                    clearButton
                    defaultSelected={options.slice(0, 5)}
                    labelKey="name"
                    multiple
                    options={options}
                    placeholder="Choose a state..."
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label">
                  Add Custom Department
                </label>
                <div class="col-sm-8">
                  <input className="form-control" />
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

export default AddDepartment;
