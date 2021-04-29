import React, { Fragment, useState } from "react";
import Breadcrumb from "../../../common/breadcrumb";
import * as Yup from "yup";
import seven from "./../../../../assets/images/user/7.jpg";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import axios from "axios";
import { toast } from "react-toastify";

const CreateLead = ({ history }) => {
  const [data, setData] = useState({
    campaign_id: "",
    leadchannel_id: "",
    leadtype_id: "",
    Lead_Source: "",
    First_Name: "",
    Last_Name: "",
    Gender: "",
    Birthday: "",
    Age: "",
    Marital_Status: "",
    Spouse_Name: "",
    Anniversary: "",
    Fax_Number: "",
    Favourite_Colour: "",
    Employment_Status: "",
    Job_Type: "",
    Yearly_Income: "",
    Working_since: "",
    Department: "",
    Managers_Name: "",
    Managers_Phone_Number: "",
    Assistant_Name: "",
    Assistant_Phone_Number: "",
    Credit_Limit: "",
    Preferred_Contact_Time: "",
    Preferred_Contact_Day: "",
    Interested_in_Product: "",
    Owns_Product: "",
    LinkedIn_Profile_URL: "",
    Facebook_Profile_URL: "",
    Twitter_Handle: "",
    School_Attended: "",
    School_City_Name: "",
    Hometown: "",
    Credit_Score: "",
    Loan_Amount: "",
    Likes_Travelling: true,
    Attends_events: true,
    products_uses_frequency: "",
    Language_Preference: "",
    Products_Liked: "",
    productsbought: "",
    accounttype: "",
    accountbalance: "",
    Existing_Loans: "",
    Account_Rating: "",
    Flat_Number: "",
    Society_Name: "",
    Street_Name: "",
    Area: "",
    Postcode: "",
    City: "",
    State: "",
    Country: "",
    Company_Name: "",
    Location: "",
    Company_Size: "",
    Designation: "",
    Pipeline_Value: "",
    Competitors_: "",
    Won_Loss_Reasons: "",
    isDelete: true,
    Lead_score: "",
    companyrevenue: "",
    companytype: "",
    userid: "",
    lead_stage: "sdfsfd23",
    assigned_tags: "sd,sdf",
    customer_id: "2343sdf",
  });

  const handleSubmit = () => {
    axios
      .post("https://fathomless-plateau-00864.herokuapp.com/crm/leads", data)
      .then((response) => {
        setTimeout(() => {
          toast.success("Lead Generated Successfully !");

          history.push(`${process.env.PUBLIC_URL}/dashboard/leads`);
        }, 100);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };
  const onChangeType = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
                        <h3 className="mb-1">New Lead</h3>
                        <p className="mb-4">Details</p>
                      </div>
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
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          name="First_Name"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          name="Last_Name"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">Gender</label>
                        <input
                          name="Gender"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Gender"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">Age</label>
                        <input
                          name="Age"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Age"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">Date Of Birth</label>
                        <input
                          name="Birthday"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="DD-MM-YYY"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input
                          name="City"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="City"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label className="form-label">State</label>
                        <input
                          name="State"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="State Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <input
                          name="Country"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Country Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Martial Status</label>
                        <input
                          name="Martial_Status"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Martial Status"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Spouse Name</label>
                        <input
                          name="Spouse_Name"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Spouse Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Anniversary</label>
                        <input
                          name="Anniversary"
                          onChange={onChangeType}
                          className="form-control"
                          type="text"
                          placeholder="Anniversary"
                        />
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
                        <input
                          name="Flat_Number"
                          onChange={onChangeType}
                          placeholder="Flat Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Society Name</label>
                        <input
                          name="Society_Name"
                          onChange={onChangeType}
                          placeholder="Society Name"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Street Name</label>
                        <input
                          name="Street_Name"
                          onChange={onChangeType}
                          placeholder="Street Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Area</label>
                        <input
                          name="Area"
                          onChange={onChangeType}
                          placeholder="Area"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Postcode</label>
                        <input
                          name="Postcode"
                          onChange={onChangeType}
                          placeholder="Postcode"
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
                        <input
                          name="Preferred_Contact_Time"
                          onChange={onChangeType}
                          placeholder="Preferred contact time"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Preferred Contact Day
                        </label>
                        <input
                          name="Preferred_Contact_Day"
                          onChange={onChangeType}
                          placeholder="Preferred Contact Day"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Interested in Product
                        </label>
                        <input
                          name="Interested_in_Product"
                          onChange={onChangeType}
                          placeholder="Interested in Product"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Owns Product</label>
                        <input
                          name="Owns_Product"
                          onChange={onChangeType}
                          placeholder="Owns Product"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">School Attended</label>
                        <input
                          name="School_Attended"
                          onChange={onChangeType}
                          placeholder="School Attended"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">School City Name</label>
                        <input
                          name="School_City_Name"
                          onChange={onChangeType}
                          placeholder="School City Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Hometown</label>
                        <input
                          name="Hometown"
                          onChange={onChangeType}
                          placeholder="Hometown"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Loan Amount</label>
                        <input
                          name="First_Name"
                          onChange={onChangeType}
                          placeholder="Loan Amount"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Likes Travelling</label>
                        <input
                          name="Likes_Travelling"
                          onChange={onChangeType}
                          placeholder="Likes Travelling"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Attends events</label>
                        <input
                          name="Attends_events"
                          onChange={onChangeType}
                          placeholder="Attends events"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Product Uses Frequency
                        </label>
                        <input
                          name="products_uses_frequency"
                          onChange={onChangeType}
                          placeholder="Product Uses Frequency"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Language Preference
                        </label>
                        <input
                          name="Language_Preference"
                          onChange={onChangeType}
                          placeholder="Product Uses Frequency"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Competitors (that we’re up against)
                        </label>
                        <input
                          name="Competitors_"
                          onChange={onChangeType}
                          placeholder="Competitors (that we’re up against)"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Won/Loss Reason</label>
                        <input
                          name="Won_Loss_Reasons"
                          onChange={onChangeType}
                          placeholder="Won/Loss Reason"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Products Liked</label>
                        <input
                          name="Products_Liked"
                          onChange={onChangeType}
                          placeholder="Products Liked"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Products bought</label>
                        <input
                          name="productsbought"
                          onChange={onChangeType}
                          placeholder="Products Bought"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Favourite Colour</label>
                        <input
                          name="Favourite_Colour"
                          onChange={onChangeType}
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
                        <input
                          name="Company_Name"
                          onChange={onChangeType}
                          placeholder="Company Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Location (Country, State)
                        </label>
                        <input
                          name="Location"
                          onChange={onChangeType}
                          placeholder="HomLocation (Country, State)etown"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Company Size</label>
                        <input
                          name="Company_Size"
                          onChange={onChangeType}
                          placeholder="Company Size"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="Designation">Designation</label>
                        <input
                          name="First_Name"
                          onChange={onChangeType}
                          placeholder="Designation"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Fax Number</label>
                        <input
                          name="Fax_Number"
                          onChange={onChangeType}
                          placeholder="Fax number"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="Employment_Status">
                          Employment Status
                        </label>
                        <input
                          name="Employment_Status"
                          onChange={onChangeType}
                          placeholder="Employement Status"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Job Type</label>
                        <input
                          name="Job_Type"
                          onChange={onChangeType}
                          placeholder="Job Type"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Yearly Income</label>
                        <input
                          name="Yearly_Income"
                          onChange={onChangeType}
                          placeholder="Yearly Income"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Working Since</label>
                        <input
                          name="Working_since"
                          onChange={onChangeType}
                          placeholder="Working since"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Department</label>
                        <input
                          name="Department"
                          onChange={onChangeType}
                          placeholder="Department"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Manager's name</label>
                        <input
                          name="Managers_Name"
                          onChange={onChangeType}
                          placeholder="Manager's Name"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Manager's Phone Number
                        </label>
                        <input
                          name="Managers_Phone_Number"
                          onChange={onChangeType}
                          placeholder="Manager's Phone number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Assistant Name</label>
                        <input
                          name="Assistant_Name"
                          onChange={onChangeType}
                          placeholder="Assistant"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Assistant's Phone Number
                        </label>
                        <input
                          name="Assistant_Phone_Number"
                          onChange={onChangeType}
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
                        <input
                          name="LinkedIn_Profile_URL"
                          onChange={onChangeType}
                          placeholder="LinkedIn Profile URL"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">
                          Facebook Profile URL
                        </label>
                        <input
                          name="Facebook_Profile_URL"
                          onChange={onChangeType}
                          placeholder="Facebook Profile URL"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Twitter Handle</label>
                        <input
                          name="Twitter_Handle"
                          onChange={onChangeType}
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
                        <input
                          name="Credit_Limit"
                          onChange={onChangeType}
                          placeholder="Credit Limit"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Credit Score</label>
                        <input
                          name="Credit_Score"
                          onChange={onChangeType}
                          placeholder="Credit Score"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Account type</label>
                        <input
                          name="accounttype"
                          onChange={onChangeType}
                          placeholder="Account type"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Account balance</label>
                        <input
                          name="accountbalance"
                          onChange={onChangeType}
                          placeholder="accountbalance"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Existing Loans</label>
                        <input
                          name="Existing_Loans"
                          onChange={onChangeType}
                          placeholder="Existing Loans"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Account Rating</label>
                        <input
                          name="Account_Rating"
                          onChange={onChangeType}
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
                        <label htmlFor="date_of_birth">Pipeline Value</label>
                        <input
                          name="First_Name"
                          onChange={onChangeType}
                          placeholder="Pipeline Value"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Won/Loss Reasons</label>
                        <input
                          name="First_Name"
                          onChange={onChangeType}
                          placeholder="Won/Loss Reasons"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="lead_source">Lead source</label>
                        <input
                          name="First_Name"
                          onChange={onChangeType}
                          name="lead_source"
                          placeholder="Lead source"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </AccordionItem>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary mt-5 float-right"
                >
                  {" "}
                  Save Details
                </button>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLead;
