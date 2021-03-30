import React from 'react'
import { Fragment } from 'react'
import ReactTable from "react-table";

function RenewalsTable({data}) {
    
const pageSize=10;
const Headers = [
    {
      Header: () => (
        <div style={{ textAlign: "center" }}>Proposal Number</div>
      ),
        accessor: "cust_name",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "IC Name",
        accessor: "policy_name",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "End Date",
        accessor: "ins_product",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Customer Name",
        accessor: "ic_name",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )

    },
    {
        Header: "Mobile Number",
        accessor: "start_date",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Premium Amount",
        accessor: "end_date",
        Cell: row => (
          <div style={{ textAlign: "center" }}>{row.value}</div>
        )
    },
    {
        Header: "Actions",
        accessor: "action",
        headerClassName: "",
        width: 350,
        Cell: ({value}) => (
            <div className="">
                <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-whatsapp"
                        ></i>{" "}
                        
                      </span>
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-mail-envelope"
                        ></i>{" "}
                        Email
                      </span>
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-clone"
                        ></i>{" "}
                        SMS
                      </span>
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-link"
                        ></i>{" "}
                        Renew
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

export default RenewalsTable
