import React from "react";
import { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import options from "../../../data/typeaheadData";
import OwnershipTransfer from "../../forms/wizard/OwnershipTransfer";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import Switch from "../../../custom-components/switch/switch";
import ManagePermission from "./managePermission";

function Permissions() {
  const [value, setValue] = useState({ create_lead: false, edit_lead: false });
  const [multiSelections, setMultiSelections] = useState([]);

  function changeValue(e) {
    // setValue({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }

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
                    labelKey="name"
                    multiple
                    onChange={setMultiSelections}
                    options={options}
                    placeholder="Choose several states..."
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
      </div>
      <ManagePermission />
    </Fragment>
  );
}

export default Permissions;
