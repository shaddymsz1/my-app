import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import data from "../../../data/dummyTableData"
import { Line } from 'react-chartjs-2';
import {buyData , buyOption} from '../../../charts-data/default'
import EndorsementTable from '../../dashboard-user/endorsement-table';


const  ProductsReports =(props)=> {


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
            <Breadcrumb parent="Dashboard" title="Reports" />
        <div className="row ">
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
                                <Line data={buyData} options={buyOption} width={700} height={350} />
                            </div>
                        </div>
                    </div>


          <div className="card col-lg-12">
              <div className="card-header">
                  <div className="row">
                      <div className="col-lg-3">
                        
  
                    <h3>Products </h3>         
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
  
                  {/* <EndorsementTable data={search(data)}/> */}
                  <EndorsementTable data={search(data)}/>
          </div>
          
                    
                  
                    
      </div>
      </Fragment>
    )
}

export default ProductsReports
