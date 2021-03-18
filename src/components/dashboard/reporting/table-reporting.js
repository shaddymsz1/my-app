import React from 'react'
import { Fragment } from 'react'

import { Link, withRouter } from "react-router-dom";

const TableReporting =(props)=> {
    const data = props.data
    return (
        <Fragment>
                    <div className="col-sm-12 mt-10">
        <div className="card">
          <div className="card-header">
              <div className="row">
                  <div className="col-lg-10">
                      <h5> Reports</h5>
                  </div>
                  <div className="col-lg-2">
                  <form>
                  <div className="form-group m-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="search"
                    //   defaultValue={searchKeyword}
                    //   onChange={(e) => handleSearchKeyword(e.target.value)}
                    />
                  </div>
                </form>
                  </div>
              </div>
          </div>
          <div className="table-responsive">
            <table className="table table-border-vertical">
              <thead>
                <tr>
                  <th key={1}>Id</th>
                  <th key={12}>Name</th>
                  
                  <th key={13}>field1</th>
                  <th key={14}>field2</th>
                  <th key={16}>field4</th>
                  <th key={17}>field5</th>
                  <th key={18}>Status</th>
                  <th key={19}>field7</th>
                  <th key={15}>Actions</th>
                
                </tr>
              </thead>
              <tbody>
                {data.map((items, i) => (
                  <tr className="Row" key={i}>
                    <td>
                      <a className="text-inherit" href="#javascript">
                        {items.id}{" "}
                      </a>
                    </td>

                    <td className="Name">
                      {" "}
                      <Link to="/dashboard/page-details">
                        {items.name}
                      </Link>{" "}
                    </td>
                    
                    <td>
                      <span className="status-icon bg-success"></span>
                      {items.field1}
                    </td>
                    <td>
                      <span className="status-icon bg-success"></span>
                      {items.field2}
                    </td>
                    <td>
                      <span className="status-icon bg-success"></span>
                      {items.field3}
                    </td>
                    <td>
                      <span className="status-icon bg-success"></span>
                      {items.field4}
                    </td><td>
                      <span className="status-icon bg-success"></span>
                      {items.status}
                    </td>
                    <td>{items.creat_on}</td>
                    

                    {/* /// */}

                    <td className="Button">
                      <span
                        className="hoverButtons"
                        onClick={() => props.history.push("/dashboard/editor")}
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

                  </tr>
                ))}
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
      </div>
        </Fragment>
    )
}

export default TableReporting
