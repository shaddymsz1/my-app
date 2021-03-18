import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import data from "../../../data/dummyTableData"
import { Line } from 'react-chartjs-2';
import {buyData , buyOption} from '../../../charts-data/default'
import TableReporting from './table-reporting';


const  Reporting =(props)=> {

  const [search, setSearch] = useState(" ");

  const handleChange =(e)=>{
    this.setSearch({search: search})
  }
    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="Report1" />
        <div className="row ">
            <div className="mt-10 col-sm-12">
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
                    
                    <TableReporting data={data}/>
      </div>
      </Fragment>
    )
}

export default Reporting
