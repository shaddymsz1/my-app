import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Breadcrumb from "../../../common/breadcrumb";
import * as Yup from "yup";
import seven from "./../../../../assets/images/user/7.jpg";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

const welcomeInitialSchema = {
  lead_source: "",
  first_name: "",
  last_name: "",
  age: "",
  usage_type: "",
  gender: "",
  maritial_status: "",
  date_of_birth: "",
};

const welcomeValidationSchema = Yup.object({
  lead_source: Yup.string().required("Lead source is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  age: Yup.string().required(" Age is required"),
  gender: Yup.string().required(" Gender is required"),
  maritial_status: Yup.string().required(" Status is required"),
  date_of_birth: Yup.string().required("Date of Birth is required"),
});

const welcomeFormSubmit = (values) => {
  console.log(values);
  console.log(JSON.stringify(values));
};

const CreateLead = () => {
  const [type, setType] = useState("");

  const onChangeType = (value) => {
    setType(value);
  };
  return (
    <React.Fragment>
      <Breadcrumb parent="Dashboard" title="ADD Lead" />

      <div className="container-fluid">
        <div className="edit-profile">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0"> Profile</h4>
                  <div className="card-options">
                    <a
                      className="card-options-collapse"
                      href="javascript"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      className="card-options-remove"
                      href="javascript"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-2">
                      <div className="col-auto">
                        <img
                          className="img-70 rounded-circle"
                          alt=""
                          src={seven}
                        />
                      </div>
                      <div className="col">
                        <h3 className="mb-1">MARK JECNO</h3>
                        <p className="mb-4">DESIGNER</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <h6 className="form-label">Bio</h6>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Give short Bio of the customer here."
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email-Address</label>
                      <input
                        className="form-control"
                        placeholder="your-email@domain.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Score</label>
                      <input
                        className="form-control"
                        defaultValue="*******"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        className="form-control"
                        placeholder="http://Uplor .com"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0"> General Details</h4>

                  <div className="card-options">
                    <a
                      className="card-options-collapse"
                      href="javascript"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      className="card-options-remove"
                      href="javascript"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Home Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="ZIP Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select className="form-control btn-square">
                          <option value="0">--Select--</option>
                          <option value="1">Germany</option>
                          <option value="2">Canada</option>
                          <option value="3">Usa</option>
                          <option value="4">Aus</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <label className="form-label">About Me</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Enter About your description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div
            className="default-according panel-accordion"
            id="accordionclose"
          >
            <div className="card">
              <Accordion atomic={true}>
                <Formik
                  initialValues={welcomeInitialSchema}
                  validationSchema={welcomeValidationSchema}
                  onSubmit={(values) => welcomeFormSubmit(values)}
                >
                  <Form>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Location Details"
                    >
                      <div
                        className="collapse show"
                        id="collapseicon1"
                        aria-labelledby="collapseicon1"
                        data-parent="#accordionoc"
                      >
                        <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Flat Number</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Flat Number"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Society Name</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Society Name"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Street Name</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Street Name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Area</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Area"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Postcode</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Postcode"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">City</label>
                            <Field
                              name="date_of_birth"
                              placeholder="City"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">State</label>
                            <Field
                              name="date_of_birth"
                              placeholder="State"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Country</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Country"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItem>

                    <AccordionItem
                      className="card-header bg-primary"
                      title="Prefrences"
                    >
                      <div
                        className="collapse show"
                        id="collapseicon1"
                        aria-labelledby="collapseicon1"
                        data-parent="#accordionoc"
                      >
                        <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Preferred Contact Time
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Preferred contact time"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Preferred Contact Day
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Preferred Contact Day"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Interested in Product
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Interested in Product"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Owns Product</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Owns Product"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              School Attended
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="School Attended"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              School City Name
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="School City Name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Hometown</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Hometown"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Hometown</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Hometown"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Loan Amount</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Loan Amount"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Likes Travelling
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Likes Travelling"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Attends events
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Attends events"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Competitors (that we’re up against)
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Competitors (that we’re up against)"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Products Liked
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Products Liked"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Products bought
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="productsbought"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Favourite Colour
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Favourite colour"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItem>

                    <AccordionItem
                      className="card-header bg-primary"
                      title="Professional Details "
                    >
                      <div
                        className="collapse show"
                        id="collapseicon1"
                        aria-labelledby="collapseicon1"
                        data-parent="#accordionoc"
                      >
                        <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Company Name</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Company Name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Location (Country, State)
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="HomLocation (Country, State)etown"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Company Size</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Company Size"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Designation</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Designation"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Fax Number</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Fax number"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Employment Status
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Employement Status"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Job Type</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Job Type"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Yearly Income</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Yearly Income"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Working Since</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Working since"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Department</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Department"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Manager's name
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Manager's Name"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Manager's Phone Number
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Manager's Phone number"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Assistant Name
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Assistant"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Assistant's Phone Number
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Assistant Phone number"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItem>

                    <AccordionItem
                      className="card-header bg-primary"
                      title="Social Details"
                    >
                      <div
                        className="collapse show"
                        id="collapseicon1"
                        aria-labelledby="collapseicon1"
                        data-parent="#accordionoc"
                      >
                        <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              LinkedIn Profile URL
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="LinkedIn Profile URL"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Facebook Profile URL
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Facebook Profile URL"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Twitter Handle
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Owns Product"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItem>

                    <AccordionItem
                      className="card-header bg-primary"
                      title="From Bank API"
                    >
                      <div
                        className="collapse show"
                        id="collapseicon1"
                        aria-labelledby="collapseicon1"
                        data-parent="#accordionoc"
                      >
                        <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Credit Limit</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Credit Limit"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Credit Score</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Credit Score"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">Account type</label>
                            <Field
                              name="date_of_birth"
                              placeholder="Account type"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Account balance
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="accountbalance"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Existing Loans
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Existing Loans"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Account Rating
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Account Rating"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItem>

                    <AccordionItem
                      className="card-header bg-primary"
                      title="Lead Status"
                    >
                      <div
                        className="collapse show"
                        id="collapseicon1"
                        aria-labelledby="collapseicon1"
                        data-parent="#accordionoc"
                      >
                        <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Pipeline Value
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Pipeline Value"
                              className="form-control"
                            />
                          </div>

                          <div className="col-md-4 mb-3">
                            <label htmlFor="date_of_birth">
                              Won/Loss Reasons
                            </label>
                            <Field
                              name="date_of_birth"
                              placeholder="Won/Loss Reasons"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="lead_source">Lead source</label>
                            <Field
                              name="lead_source"
                              placeholder="Lead source"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItem>

                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary mt-5 float-right"
                    />
                  </Form>
                </Formik>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLead;
