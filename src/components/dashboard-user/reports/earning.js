import React, { Fragment, useState } from "react";
import { Line } from "react-chartjs-2";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../data/dummyTableData";
import { Typeahead } from "react-bootstrap-typeahead";
import EndorsementTable from "../endorsement-table";
import { buyData, buyOption } from "../../../../src/charts-data/default";
import {
  RangeDatePicker,
  SingleDatePicker,
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

function EarningReports() {
  const [Q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState([
    "cust_name",
    "policy_name",
  ]);
  console.log(data, "this is data");
  const columns = ["Customer Name", "Policy Name"];
  const channelColumns = ["LinkedIn", "Facebook"];

  const search = (rows) => {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(Q.toLowerCase()) > -1
      )
    );
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-4">
          <Breadcrumb parent="Dashboard" title="Reports" />
        </div>
        <div className="col-lg-8">
          <form className="form-inline pull-right mt-3 mb-3">
            <div className="form-group">
              <lable className="mr-2">Select Date Range</lable>
              <RangeDatePicker
                startDate={new Date(2020, 0, 15)}
                endDate={new Date(2020, 1, 1)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-10">
        <div className="mt-10 col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-lg-10">
                  <h5>Memory Usage</h5>
                </div>
                <div className="col-lg-2">
                  <div className="select2-drpdwn-product select-options d-inline-block">
                    <select className="form-control btn-square">
                      <option value="">Select Graph Time</option>
                      <option value="HighToLow">One Week</option>
                      <option value="LowToHigh">One Month</option>
                      <option value="Newest">One Year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body server-canvas">
              <Line
                data={buyData}
                options={buyOption}
                width={700}
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="card col-lg-12">
          <div className="card-header">
            <h3>Earnings Report </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 ">
                <form className="form-inline pull-right">
                  <div className="form-group mb-3">
                    <Typeahead
                      id="multiple-typeahead"
                      clearButton
                      // defaultSelected={}
                      labelKey="name"
                      multiple
                      options={columns}
                      placeholder="Select Columns..."
                    />
                    <input
                      className="form-control"
                      placeholder="Search"
                      type="text"
                      value={Q}
                      onChange={(e) => setQ(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <EndorsementTable data={search(data)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EarningReports;
