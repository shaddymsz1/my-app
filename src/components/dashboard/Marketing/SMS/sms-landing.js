import React from 'react';
import { Link, withRouter } from "react-router-dom";
import data from '../../../../data/dummyTableData'

const SMS = (props)=> {
    return (
        <div>
          <div className="customBtnLeft">
        <button
          className="btn btn-lg btn-primary"
          type="link"
          onClick={() => props.history.push("/dashboard/smsSetting")}
        >
          Create
        </button>
      </div>
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5>ALL SMS</h5>
          </div>
          <div className="table-responsive">
            <table className="table card-table table-vcenter text-nowrap">
              <thead>
                <tr>
                  <th key={1}>Id</th>
                  <th key={12}>Name</th>
                  <th></th>
                  <th key={13}>Status</th>
                  <th key={14}>Created On</th>
                </tr>
              </thead>
              <tbody>
                {data.map((items, i) => (
                  <tr className="hoverRow" key={i}>
                    <td>
                      <a className="text-inherit" href="#javascript">
                        {items.id}{" "}
                      </a>
                    </td>

                    <td className="hoverName">
                      {" "}
                      <Link to="/dashboard/page-details">
                        {items.name}
                      </Link>{" "}
                    </td>
                    <td className="hoverButton">
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
                    <td>
                      <span className="status-icon bg-success"></span>
                      {items.status}
                    </td>
                    <td>{items.creat_on}</td>

                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
 
        </div>
    )
}

export default withRouter(SMS)
