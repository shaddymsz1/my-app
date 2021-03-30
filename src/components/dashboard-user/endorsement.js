import React, { useState } from 'react'
import { Fragment } from 'react'
import data from '../../data/dummyTableData'
import EndorsementTable from './endorsement-table'

function Endorsement() {
    const [isFilter, setIsFilter] = useState(true);
    const [Q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(["cust_name", "policy_name"]);
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
              <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          <div className="card">
              <div className="card-header">
                  <div className="row">
                      <div className="col-lg-3">
                        
  
                    <h3>Endorsement </h3>         
                    </div>
                    <div className="col-lg-6">
                      <div className="row pull-right mt-2">
                        {columns &&
                          columns
                            .filter((c) => c !== "id")
                            .map((column) => (
                              <label className="d-block mr-4">
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
                  
                  <div className="col-lg-3">
                  <input className="form-control" placeholder="Search" type="text" value={Q} onChange={(e) => setQ(e.target.value)} />
                      
                  </div>
                  
              </div></div>
  
                  <EndorsementTable data={search(data)}/>
          </div>
          
          </Fragment>
      )
}

export default Endorsement
