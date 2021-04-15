import React, { Component, Fragment } from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { toast } from "react-toastify";
import "./checkSwitch.css";

export default class ManagePermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        create_lead: true,
        edit_lead: false,
        delete_lead: true,
        assign_lead: false,
        View_Leads: false,
        Lead_Scoring: false,
        Tag_Management: false,
        Sales_Metric_Reports: false,
        Activity_Reports: false,
        Campaign_Reports: false,
        Lead_Reports: false,
        Deal_Reports: false,
        Service_Reports: false,
        Add_Personal_Doc: false,
        Edit_Personal_Doc: false,
        Delete_Personal_Doc: false,
        View_Personal_Doc: false,
        Add_Own_Client_Doc: false,
        Edit_Own_Client_Doc: false,
        Delete_Own_Client_Doc: false,
        View_others_client_doc: false,
        View_Landing_Page: false,
        Create_Landing_Page: false,
        Publish_Landing_Page: false,
        Deactivate_Landing_Page: false,
        Upload_Landing_Page: false,
        Create_Campaign: false,
        Edit_Campaign: false,
        Publish_Campaign: false,
        Deactivate_Campaign: false,
        Email_Design_Upload: false,
        Email_Design_Creation: false,
        Creating_Campaign_Variables: false,
        Creating_Form_fields: false,
        SMS_Campaign_Creation: false,
        SMS_Campaign_Editing: false,
        SMS_Campaign_Publishing: false,
        SMS_Campaign_Deleting: false,
        SMS_Campaign_Deactivating: false,
        Social_Feed: false,
        Quotation_Creation: false,
        Quotation_to_Lead_Conversion: false,
        Quotation_Editing: false,
        Converting_Quotation_to_Proposal: false,
        Editing_Proposal_Forms: false,
        File_Upload: false,
        OCR_Verifications: false,
        OTP_confirmation: false,
        Review_link_sharing: false,
        Unique_payment_link_generation: false,
        Payment_from_bank_Account: false,
        Payment_confirmation_sharing: false,
        Payment_Confirmation: false,
        Policy_Schedule_Link_generation: false,
        Policy_schedule_document_view: false,
        Policy_Schedule_Link_sharing: false,
        Policy_Search: false,
        Policy_View: false,
        Policy_Edit: false,
        Change_Confirmation: false,
        Payment_confirmation_for_the_change: false,
        Endorsement_Note_sharing: false,
        Endorsement_confirmation_over_link_using_OTP: false,
        renewal_link_generation: false,
        Renewal_Notice_generation: false,
        renewal_notice_workflow: false,
        search_policy: false,
        view_policy: false,
        cancel_request: false,
        cancel_confirmation: false,
        cancel_confirmation_note_generation: false,
        note_sharing: false,
        Search_policy: false,
        claim_request: false,
        claim_documents: false,
        claim_confirmation_rejection: false,
        confirmation_Rejection_sharing: false,
        Daily_reconciliation: false,
        Alternate_day_reconciliation: false,
        Biweekly_reconciliation: false,
        Weeky_reconciliation: false,
        bi_monthly_reconciliation: false,
        Reconciliation_amount_calculation: false,
        Auto_creation_of_reports: false,
        report_auto_mails: false,
        creating_revenue_statement: false,
        Creating_commission_statement: false,
        Make_Model: false,
        Discount: false,
        PinCode: false,
      },
    };
  }

  handleSubmit = async () => {
    const emails = [];
    const values = this.state.color;
    for (var i = 0; i < this.props.mail.length; i++) {
      emails.push(this.props.mail[i].name);
    }
    console.log(emails, values);
    try {
      let result = await fetch(
        "https://fathomless-plateau-00864.herokuapp.com/permission/updatePermission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            emails,
            values,
          }),
        }
      );
      result = await result.json();
      console.log(result);
      if (result == null) {
        setTimeout(() => {
          toast.error("Oppss.. something went wrong.");
        }, 200);
      } else {
        setTimeout(() => {
          toast.success("Permission Updated !");
        }, 200);
      }
      console.log(result);
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The server is down.");
      }, 200);
    }
  };

  handleClick = (event) => {
    const { name, checked } = event.target;
    this.setState((prevState) => {
      const permissions = prevState.color;
      permissions[name] = checked;
      return permissions;
    });
  };
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">
            <h3>Manage Permissions</h3>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Create Leads
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="create_lead"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Edit Leads
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="edit_lead"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Assign Leads
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="assign_lead"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Delete Leads
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="delete_lead"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                View Leads
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="View_Leads"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Lead Scoring
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Lead_Scoring"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Tag Management
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Tag_Managment"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Sales Metric Reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Sales_Metric_Reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Activity Reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Activity_Reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Campaign Reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Campaign_Reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Lead Reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Lead_Reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Deal Reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Deal_Reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Service Reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Service_Reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Add Personal Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Add_Personal_Doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Edit Personal Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Edit_Personal_Doc "
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Delete Personal Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Delete_Personal_Doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                View Personal Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="View_Personal_Doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Add Own Client Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Add_Own_Client_Doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Edit Own Client Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Edit_Own_Client_Doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Delete Own Client Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Delete_Own_Client_Doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                View Other's Client Doc
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="View_others_client_doc"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                View Landing Page
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="View_Landing_Page"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Create Landing Page
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Create_Landing_Page"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Publish Landing Page
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Publish_Landing_Page"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Deactivate Landing Page
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Deactivate_Landing_Page"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Upload Landing Page
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Upload_Landing_Page"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Create Campaign
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Create_Campaign"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Edit Campaign
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Edit_Campaign"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Publish Campaign
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Publish_Campaign"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>

                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Deactivate Campaign
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Deactivate_Campaign"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Email Design Upload
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Email_Design_Upload"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Email Design Creation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Email_Design_Creation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Creating Campaign Variables
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Creating_Campaign_Variables"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Creating Form fields
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Creating_Form_fields"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                SMS Campaign Creation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="SMS_Campaign_Creation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                SMS Campaign Editing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="SMS_Campaign_Editing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                SMS Campaign Publishing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="SMS_Campaign_Publishing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                SMS Campaign Deleting
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="SMS_Campaign_Deleting"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                SMS Campaign Deactivating
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="SMS_Campaign_Deactivating"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Quotation Creation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Quotation_Creation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Quotation to Lead Conversion
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Quotation_to_Lead_Conversion"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Quotation Editing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Quotation_Editing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Converting Quotation to Proposal
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Converting_Quotation_to_Proposal"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Editing Proposal Forms
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Editing_Proposal_Forms"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                File Upload
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="File_Upload"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                OCR Verifications
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="OCR_Verifications"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                OTP confirmation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="OTP_confirmation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Review' link sharing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Review_link_sharing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Unique payment link generation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Unique_payment_link_generation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Payment from Bank Account
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Payment_from_bank_Account"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Payment confirmation sharing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Payment_confirmation_sharing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Payment Confirmation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Payment_Confirmation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Policy Schedule Link generation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Policy_Schedule_Link_generation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Policy schedule document view
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Policy_schedule_document_view"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Policy Schedule Link sharing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Policy_Schedule_Link_sharing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Policy Search
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Policy_Search"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Policy View
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Policy_View"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Policy Edit
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Policy_Edit"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Change Confirmation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Change_Confirmation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Payment confirmation for the change
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Payment_confirmation_for_the_change"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Endorsement Note sharing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Endorsement_Note_sharing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Endorsement confirmation over link using OTP
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Endorsement_confirmation_over_link_using_OTP"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Renewal link generation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="renewal_link_generation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Renewal Notice generation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Renewal_Notice_generation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Renewal Notice Workflow
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="renewal_notice_workflow"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Search Policy
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="search_policy"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                View Policy
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="view_policy"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Cancel Request
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="cancel_request"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Cancel Confirmation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="cancel_confirmation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Cancel Confirmation Note Generation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="cancel_confirmation_note_generation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Note sharing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="note_sharing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Search Policy
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Search_policy"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Claim Request
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="claim_request"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Claim Documents
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="claim_documents"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Claim Confirmation/Rejection
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="claim_confirmation_rejection"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Confirmation/Rejection Sharing
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="confirmation_Rejection_sharing"
                              />{" "}
                              <div className="slider"></div>
                            </label>
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
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Daily reconciliation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Daily_reconciliation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Alternate day reconciliation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Alternate_day_reconciliation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Bi-weekly reconciliation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Biweekly_reconciliation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Weeky reconciliation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Weeky_reconciliation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Bi-monthly reconciliation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="bi_monthly_reconciliation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Reconciliation amount calculation
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Reconciliation_amount_calculation"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Auto creation of reports
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Auto_creation_of_reports"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Report Auto Mails
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="report_auto_mails"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Creating Revenue Statement
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="creating_revenue_statement"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                          <div class="form-group row">
                            <div className="col-sm-5 mt-4">
                              <label
                                for="staticEmail"
                                className=" col-form-label"
                              >
                                Creating commission statement
                              </label>
                            </div>

                            <label className="switch mt-3">
                              <input
                                checked={this.state.permissions}
                                onChange={this.handleClick}
                                type="checkbox"
                                name="Creating_commission_statement"
                              />{" "}
                              <div className="slider"></div>
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn-primary btn pull-right"
              onClick={this.handleSubmit}
              type="submit"
            >
              Save Permissions
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
