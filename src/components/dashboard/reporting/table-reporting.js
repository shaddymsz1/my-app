import React from 'react'
import { Fragment } from 'react'

import { Link, withRouter } from "react-router-dom";

const TableReporting =({data})=> {
    const columns = data[0] && Object.keys(data[0]);
    return (
        <Fragment>
          
        <div>

          <div className="table-responsive">
            <table className="table table-border-vertical">
              <thead>
                <tr>{data[0] && columns.map((heading)=> <th>{heading}</th>)}<th>Actions</th></tr>
              </thead>
              <tbody>
              {data.map(row => <tr>{
                  columns.map(column => <td>{row[column]}</td>)}
                  <td className="Button">
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-pencil"
                        ></i>{" "}
                        Edit
                      </span>
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "#4466f2" }}
                          className="fa fa-clone"
                        ></i>{" "}
                        Clone
                      </span>
                      <span
                        className="hoverButtons"
                        // onClick={() => props.history.push("/dashboard/editor")}
                      >
                        <i
                          style={{ margin: "0 6px", color: "red" }}
                          className="fa fa-trash"
                        ></i>{" "}
                        Delete
                      </span>

                      {/* <button style={{ margin: "0 6px" }}>more</button> */}
                    </td>
                </tr>)}

                <tr>
                  <td>
                    <h5>TOTAL</h5>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* <div className="card-body datatable-react">
            <Datatable
              multiSelectOption={false}
              myData={data}
              pageSize={6}
              pagination={false}
              class="-striped -highlight"
            />
          </div> */}
        </div>
        </Fragment>
    )
}

export default TableReporting
