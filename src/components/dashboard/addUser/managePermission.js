import React, { Fragment, useState } from "react";

import { Field, Form, Formik } from "formik";
import options from "../../../data/typeaheadData";
import OwnershipTransfer from "../../forms/wizard/OwnershipTransfer";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import Switch from "../../../custom-components/switch/switch";

function ManagePermission() {
  const [value, setValue] = useState(false);
  const [createLead, setCreateLead] = useState(false);
  const [editLead, setEditLead] = useState(false);
  const [multiSelections, setMultiSelections] = useState([]);
  var obj = [
    {
      name: "red",
      label: "Red",
    },
    {
      name: "green",
      label: "Green",
    },
    {
      name: "blue",
      label: "Blue",
    },
  ];

  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h3>Manage Permissions</h3>
          {/* <button
            className="btn-primary btn"
            onClick={changeValue}
            type="submit"
          >
            Save
          </button> */}
        </div>
        <div className="card-body">
          <div
            className="default-according panel-accordion"
            id="accordionclose"
          >
            <div className="card">
              <Accordion atomic={false}>
                <AccordionItem
                  className="card-header bg-primary"
                  title="LEAD MANAGEMENT"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Create Leads
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              isOn={createLead}
                              name="create_lead"
                              onColor="#4466F2"
                              handleToggle={(e) => {
                                setCreateLead(!createLead);
                                Object.assign(obj, {
                                  create_lead: !createLead,
                                });
                                console.log(obj);
                              }}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Edit Leads
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="edit_lead"
                              isOn={editLead}
                              onColor="#4466F2"
                              handleToggle={(e) => {
                                setEditLead(!editLead);
                                Object.assign(obj, {
                                  edit_lead: !editLead,
                                });
                                console.log(obj);
                              }}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Assign Leads
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="assign_lead"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Delete Leads
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="delete_lead"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              View Leads
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="View_Leads"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Lead Scoring
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="Lead_Scoring"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Tag Management
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>

                      <div className="text-danger"></div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="REPORTS"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Sales Metric Reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Activity Reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Campaign Reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Lead Reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Deal Reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Service Reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>

                      <div className="text-danger"></div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="DOCUMENTS"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Add Personal Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Edit Personal Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Delete Personal Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              View Personal Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Add Own Client Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Edit Own Client Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Delete Own Client Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              View Other's Client Doc
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="CAMPAIGN MANAGEMENT"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              View Landing Page
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Create Landing Page
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Publish Landing Page
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Deactivate Landing Page
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Upload Landing Page
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Create Campaign
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Edit Campaign
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Publish Campaign
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Publish Campaign
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Deactivate Campaign
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Email Design Upload
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Email Design Creation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Creating Campaign Variables
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Creating Form fields
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              SMS Campaign Creation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              SMS Campaign Editing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              SMS Campaign Publishing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              SMS Campaign Deleting
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              SMS Campaign Deactivating
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="PRE SALES MANAGEMENT"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Quotation Creation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Quotation to Lead Conversion
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Quotation Editing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Converting Quotation to Proposal
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Editing Proposal Forms
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              File Upload
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              OCR Verifications
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              OTP confirmation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Review' link sharing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="PAYMENT MANAGEMENT"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Unique payment link generation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Payment from Bank Account
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Payment confirmation sharing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="POLICY ISSUANCE"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Payment Confirmation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Policy Schedule Link generation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Policy schedule document view
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Policy Schedule Link sharing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="ENDORSEMENT"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Policy Search
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Policy View
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Policy Edit
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Change Confirmation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Payment confirmation for the change
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Endorsement Note sharing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Endorsement confirmation over link using OTP
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="RENEWAL"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Renewal link generation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Renewal Notice generation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Renewal Notice Workflow
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="CANCELLATION"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Search Policy
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              View Policy
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Cancel Request
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Cancel Confirmation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Cancel Confirmation Note Generation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Note sharing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="CLAIMS"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Search Policy
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              View Policy
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Claim Request
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Claim Documents
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Claim Confirmation/Rejection
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Confirmation/Rejection Sharing
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  className="card-header bg-primary"
                  title="RECONCILLIATION"
                >
                  <div
                    className="collapse show"
                    id="collapseicon1"
                    aria-labelledby="collapseicon1"
                    data-parent="#accordionoc"
                  >
                    <div className="col-sm-12 mb-3">
                      <form className="">
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Daily reconciliation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Alternate day reconciliation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Bi-weekly reconciliation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Weeky reconciliation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Bi-monthly reconciliation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Reconciliation amount calculation
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Auto creation of reports
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Report Auto Mails
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Creating Revenue Statement
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div className="col-sm-8 mt-3">
                            <label
                              for="staticEmail"
                              className=" col-form-label"
                            >
                              Creating commission statement
                            </label>
                          </div>

                          <div className="col-sm-4">
                            <Switch
                              name="main_driver"
                              isOn={value}
                              onColor="#4466F2"
                              handleToggle={() => setValue(!value)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ManagePermission;
