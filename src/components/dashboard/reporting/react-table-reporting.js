import React from 'react'
import { Fragment } from 'react'
import ReactTable from "react-table";

function TableReport({data}) {

const pageSize=10;
const Headers = [
    {
      Header: () => (
        <div style={{ textAlign: "center" }}>Customer Name</div>
      ),
        accessor: "cust_name",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Policy Name",
        accessor: "policy_name",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Ins Product",
        accessor: "ins_product",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "IC Name",
        accessor: "ic_name",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )

    },
    {
        Header: "Start Date",
        accessor: "start_date",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "End Name",
        accessor: "end_date",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Commision Earned",
        accessor: "commision",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Actions",
        accessor: "action",
        headerClassName: "",
        width: 300,
        Cell: ({value}) => (
            <div className="">
                <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-download"
                        ></i>{" "}
                        Download
                      </span>
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-send"
                        ></i>{" "}
                        Send
                      </span>
                      
            </div>
         )
    }
]
    return (
        <Fragment>
            <div className="card">
                <div className="table-responsive">
                    <ReactTable
                    data={data}
                    columns={Headers}            
                    defaultPageSize={pageSize}
                    showPagination={true}/>
                </div>
            </div>
        </Fragment>
    )
}

export default TableReport
