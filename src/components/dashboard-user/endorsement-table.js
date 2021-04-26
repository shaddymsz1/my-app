import React from "react";
import { Fragment } from "react";
import ReactTable from "react-table";

function EndorsementTable({ data }) {
  return (
    <Fragment>
      <div className="card">
        <div className="table-responsive">
          {/* <ReactTable
                    data={data}
                    filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
                    columns={Headers}            
                    defaultPageSize={pageSize}
                    showPagination={true}
                    className="-striped -highlight"/> */}

          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value
            }
            columns={[
              {
                Header: () => (
                  <div style={{ textAlign: "center" }}>Customer Name</div>
                ),
                accessor: "user",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "Insurance Company",
                accessor: "insurance_company",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "Insurance Product",
                accessor: "insurance_product",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "Policy Name",
                accessor: "policy_name",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "Start Date",
                accessor: "start_date",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "End Date",
                accessor: "end_date",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "Commision",
                accessor: "commision",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>{row.value}</div>
                ),
              },
              {
                Header: "Actions",
                accessor: "action",
                headerClassName: "",
                width: 200,
                Cell: () => (
                  <div className="">
                    <span
                      className="hoverButtons"
                      // onClick={() => props.history.push("/dashboard/editor")}
                    >
                      <i
                        style={{ margin: "0 6px", color: "#4466f2" }}
                        className="fa fa-link"
                      ></i>{" "}
                      Go Endorsement
                    </span>
                  </div>
                ),
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default EndorsementTable;
