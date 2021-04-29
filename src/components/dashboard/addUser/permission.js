import React from "react";
import { Fragment, useState, useRef, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import options from "../../../data/typeaheadData";
import "react-light-accordion/demo/css/index.css";
import ManagePermission from "./managePermission";

function Permissions() {
  const [multiSelections, setMultiSelections] = useState([]);
  const [mailOptions, setMailOptions] = useState([]);
  const email = [];

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();

  function handleSubmit(e) {
    for (var i = 0; i < multiSelections.length; i++) {
      email.push(multiSelections[i].name);
    }
    scrollToDiv(el1);
    console.log(multiSelections);
  }
  const url = "https://fathomless-plateau-00864.herokuapp.com/auth/getusers";
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setMailOptions(result.data.users);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Users" title="Permissions" />
      <div className="card">
        <div className="card-header">
          <h3>Assign Permissions</h3>
        </div>
        <div className="card-body">
          <Formik initialValues={{}} validationSchema={{}}>
            <Form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Select User
                </label>
                <div class="col-sm-4">
                  <Typeahead
                    id="basic-typeahead-multiple"
                    labelKey="email"
                    multiple
                    allowNew
                    onChange={setMultiSelections}
                    options={mailOptions}
                    placeholder="Choose several Emails..."
                    selected={multiSelections}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Select Branch
                </label>
                <div class="col-sm-4">
                  <Typeahead
                    id="basic-typeahead"
                    labelKey="name"
                    multiple={false}
                    options={options}
                    placeholder="Choose a Branch..."
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Select Department
                </label>
                <div class="col-sm-4">
                  <Typeahead
                    id="basic-typeahead"
                    labelKey="name"
                    multiple={false}
                    options={options}
                    placeholder="Choose Department..."
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="card-footer">
          <button
            className="btn-primary btn pull-right"
            onClick={handleSubmit}
            type="submit"
          >
            Change Permissions
          </button>
        </div>
      </div>
      <div ref={el1}>
        <ManagePermission mail={multiSelections} />
      </div>
    </Fragment>
  );
}

export default Permissions;
