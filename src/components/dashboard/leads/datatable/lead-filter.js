import React, { Fragment, useState, useEffect } from "react";

import Datatable from "./Datatable";
import { Typeahead } from "react-bootstrap-typeahead";

const FilterTable = ({ data }) => {
  const [Q, setQ] = useState("");
  const columns = ["First Name", "Gender", "Last Name", "City"];
  const [searchColumns, setSearchColumns] = useState([
    "First_Name",
    "Last_Name",
    "Gender",
    "City",
  ]);

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
      <div className="card col-lg-12">
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
              <Datatable data={search(data)} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterTable;
