import React, { Fragment, useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { Search } from "react-feather";
import Datatable from "./Datatable";

const FilterTable = ({ data, channel }) => {
  const [isFilter, setIsFilter] = useState(true);
  const [Q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["_id", "Account_Rating"]);
  console.log(data, "this is data");
  useEffect(() => {
    console.log(data, "this is data");
  }, [data]);

  // const columns = data[0] && Object.keys(data[0]).filter((a) => a === "City");
  const columns = ["City", "Gender"];
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
        <div className="col-xl-2" style={{padding : "0px"}}>
          <div className="col-xl-12">
            <div className="card">
              <Collapse isOpen={isFilter}>
                <div
                  className="collapse show"
                  id="collapseicon"
                  aria-labelledby="collapseicon"
                  data-parent="#accordion"
                >
                  <div
                    style={{ padding: "11px" }}
                    className="card-body filter-cards-view animate-chk"
                  >
                    <div className="job-filter">
                      <div className="faq-form">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search.."
                          type="text"
                          value={Q}
                          onChange={(e) => setQ(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkbox-animated">
                      {columns &&
                        columns
                          .filter((c) => c !== "id")
                          .map((column) => (
                            <label className="d-block">
                              <input
                                className="checkbox_animated"
                                type="checkbox"
                                checked={searchColumns.includes(column)}
                                onChange={(e) => {
                                  const checked = searchColumns.includes(
                                    column
                                  );
                                  setSearchColumns((prev) =>
                                    checked
                                      ? prev.filter((sc) => sc !== column)
                                      : [...prev, column]
                                  );
                                }}
                              />
                              {column}
                            </label>
                          ))}
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="col-xl-10" style={{padding : "0px"}}>
          <div className="card ">
            <Datatable data={search(data)} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterTable;
