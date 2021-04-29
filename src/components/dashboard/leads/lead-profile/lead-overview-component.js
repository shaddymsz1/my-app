import React, { Fragment, useEffect, useState } from "react";
import seven from "../../../../assets/images/user/7.jpg";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { useLocation } from "react-router";

const Overview = () => {
  const location = useLocation();
  const [readonly, setReadonly] = useState(true);
  const [data, setData] = useState(location.state.dataSent);

  const handleClick = (e) => {
    setReadonly(false);
    e.preventDefault();
  };
  const onChangeType = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("clicked");
  };
  return (
    <Fragment>
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
                        value={data.First_Name}
                        readOnly={readonly}
                        className="form-control"
                        placeholder="your-email@domain.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Score</label>
                      <input
                        value={data.First_Name}
                        readOnly={readonly}
                        className="form-control"
                        defaultValue="*******"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        value={data.First_Name}
                        readOnly={readonly}
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
                  <div className="text-right">
                    <button
                      className="btn text-right"
                      type="submit"
                      onClick={handleClick}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          value={data.First_Name}
                          readOnly={readonly}
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
                          value={data.Last_Name}
                          readOnly={readonly}
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
                          value={data.Gender}
                          readOnly={readonly}
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
                          value={data.Age}
                          readOnly={readonly}
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
                          value={data.Birthday}
                          readOnly={readonly}
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
                          value={data.City}
                          readOnly={readonly}
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
                          value={data.State}
                          readOnly={readonly}
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
                          value={data.Country}
                          readOnly={readonly}
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
                          value={data.Marital_Status}
                          readOnly={readonly}
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
                          value={data.Spouse_Name}
                          readOnly={readonly}
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
                          value={data.Anniversary}
                          readOnly={readonly}
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
                          value={data.Flat_Number}
                          readOnly={readonly}
                          name="Flat_Number"
                          onChange={onChangeType}
                          placeholder="Flat Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Society Name</label>
                        <input
                          value={data.Society_Name}
                          readOnly={readonly}
                          name="Society_Name"
                          onChange={onChangeType}
                          placeholder="Society Name"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Street Name</label>
                        <input
                          value={data.Street_Name}
                          readOnly={readonly}
                          name="Street_Name"
                          onChange={onChangeType}
                          placeholder="Street Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Area</label>
                        <input
                          value={data.Area}
                          readOnly={readonly}
                          name="Area"
                          onChange={onChangeType}
                          placeholder="Area"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Postcode</label>
                        <input
                          value={data.Postcode}
                          readOnly={readonly}
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
                          value={data.Preferred_Contact_Time}
                          readOnly={readonly}
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
                          value={data.Preferred_Contact_Day}
                          readOnly={readonly}
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
                          value={data.Interested_in_Product}
                          readOnly={readonly}
                          name="Interested_in_Product"
                          onChange={onChangeType}
                          placeholder="Interested in Product"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Owns Product</label>
                        <input
                          value={data.Owns_Product}
                          readOnly={readonly}
                          name="Owns_Product"
                          onChange={onChangeType}
                          placeholder="Owns Product"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">School Attended</label>
                        <input
                          value={data.School_Attended}
                          readOnly={readonly}
                          name="School_Attended"
                          onChange={onChangeType}
                          placeholder="School Attended"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">School City Name</label>
                        <input
                          value={data.School_City_Name}
                          readOnly={readonly}
                          name="School_City_Name"
                          onChange={onChangeType}
                          placeholder="School City Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Hometown</label>
                        <input
                          value={data.Hometown}
                          readOnly={readonly}
                          name="Hometown"
                          onChange={onChangeType}
                          placeholder="Hometown"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Loan Amount</label>
                        <input
                          value={data.Loan_Amount}
                          readOnly={readonly}
                          name="Loan_Amount"
                          onChange={onChangeType}
                          placeholder="Loan Amount"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Likes Travelling</label>
                        <input
                          value={data.Likes_Travelling}
                          readOnly={readonly}
                          name="Likes_Travelling"
                          onChange={onChangeType}
                          placeholder="Likes Travelling"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Attends events</label>
                        <input
                          value={data.Attends_events}
                          readOnly={readonly}
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
                          value={data.products_uses_frequency}
                          readOnly={readonly}
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
                          value={data.Language_Preference}
                          readOnly={readonly}
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
                          value={data.Competitors_}
                          readOnly={readonly}
                          name="Competitors_"
                          onChange={onChangeType}
                          placeholder="Competitors (that we’re up against)"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Won/Loss Reason</label>
                        <input
                          value={data.Won_Loss_Reasons}
                          readOnly={readonly}
                          name="Won_Loss_Reasons"
                          onChange={onChangeType}
                          placeholder="Won/Loss Reason"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Products Liked</label>
                        <input
                          value={data.Products_Liked}
                          readOnly={readonly}
                          name="Products_Liked"
                          onChange={onChangeType}
                          placeholder="Products Liked"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Products bought</label>
                        <input
                          value={data.productsbought}
                          readOnly={readonly}
                          name="productsbought"
                          onChange={onChangeType}
                          placeholder="Products Bought"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Favourite Colour</label>
                        <input
                          value={data.Favourite_Colour}
                          readOnly={readonly}
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
                          value={data.Company_Name}
                          readOnly={readonly}
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
                          value={data.Location}
                          readOnly={readonly}
                          name="Location"
                          onChange={onChangeType}
                          placeholder="HomLocation (Country, State)etown"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Company Size</label>
                        <input
                          value={data.Company_Size}
                          readOnly={readonly}
                          name="Company_Size"
                          onChange={onChangeType}
                          placeholder="Company Size"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="Designation">Designation</label>
                        <input
                          value={data.Designation}
                          readOnly={readonly}
                          name="Designation"
                          onChange={onChangeType}
                          placeholder="Designation"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Fax Number</label>
                        <input
                          value={data.Fax_Number}
                          readOnly={readonly}
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
                          value={data.Employment_Status}
                          readOnly={readonly}
                          name="Employment_Status"
                          onChange={onChangeType}
                          placeholder="Employement Status"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Job Type</label>
                        <input
                          value={data.Job_Type}
                          readOnly={readonly}
                          name="Job_Type"
                          onChange={onChangeType}
                          placeholder="Job Type"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Yearly Income</label>
                        <input
                          value={data.Yearly_Income}
                          readOnly={readonly}
                          name="Yearly_Income"
                          onChange={onChangeType}
                          placeholder="Yearly Income"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Working Since</label>
                        <input
                          value={data.Working_since}
                          readOnly={readonly}
                          name="Working_since"
                          onChange={onChangeType}
                          placeholder="Working since"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Department</label>
                        <input
                          value={data.Department}
                          readOnly={readonly}
                          name="Department"
                          onChange={onChangeType}
                          placeholder="Department"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Manager's name</label>
                        <input
                          value={data.Managers_Name}
                          readOnly={readonly}
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
                          value={data.Managers_Phone_Number}
                          readOnly={readonly}
                          name="Managers_Phone_Number"
                          onChange={onChangeType}
                          placeholder="Manager's Phone number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Assistant Name</label>
                        <input
                          value={data.Assistant_Name}
                          readOnly={readonly}
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
                          value={data.Assistant_Phone_Number}
                          readOnly={readonly}
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
                          value={data.LinkedIn_Profile_URL}
                          readOnly={readonly}
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
                          value={data.Facebook_Profile_URL}
                          readOnly={readonly}
                          name="Facebook_Profile_URL"
                          onChange={onChangeType}
                          placeholder="Facebook Profile URL"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Twitter Handle</label>
                        <input
                          value={data.Twitter_Handle}
                          readOnly={readonly}
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
                          value={data.Credit_Limit}
                          readOnly={readonly}
                          name="Credit_Limit"
                          onChange={onChangeType}
                          placeholder="Credit Limit"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Credit Score</label>
                        <input
                          value={data.Credit_Score}
                          readOnly={readonly}
                          name="Credit_Score"
                          onChange={onChangeType}
                          placeholder="Credit Score"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Account type</label>
                        <input
                          value={data.accounttype}
                          readOnly={readonly}
                          name="accounttype"
                          onChange={onChangeType}
                          placeholder="Account type"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Account balance</label>
                        <input
                          value={data.accountbalance}
                          readOnly={readonly}
                          name="accountbalance"
                          onChange={onChangeType}
                          placeholder="accountbalance"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Existing Loans</label>
                        <input
                          value={data.Existing_Loans}
                          readOnly={readonly}
                          name="Existing_Loans"
                          onChange={onChangeType}
                          placeholder="Existing Loans"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Account Rating</label>
                        <input
                          value={data.Account_Rating}
                          readOnly={readonly}
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
                          value={data.Pipeline_Value}
                          readOnly={readonly}
                          name="Pipeline_Value"
                          onChange={onChangeType}
                          placeholder="Pipeline Value"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="date_of_birth">Won/Loss Reasons</label>
                        <input
                          value={data.Won_Loss_Reasons}
                          readOnly={readonly}
                          name="Won_Loss_Reasons"
                          onChange={onChangeType}
                          placeholder="Won/Loss Reasons"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="lead_source">Lead source</label>
                        <input
                          value={data.Lead_score}
                          readOnly={readonly}
                          name="Lead_score"
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
    </Fragment>
  );
};

export default Overview;
