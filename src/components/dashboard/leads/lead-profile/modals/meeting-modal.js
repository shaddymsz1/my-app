import React, { Fragment, useState } from 'react'
import {Dropdown, DropdownToggle} from 'reactstrap'
import {InputGroup, DropdownButton, FormControl} from 'react-bootstrap'

const Meeting =()=> {

    const [select,setSelect]= useState('Select The Host')
    const options = ["Select an Option", "First Option", "Second Option", "Third Option"]

   const eventHandle=(e)=> {
        return setSelect({
          value: e.target.value
        })
      }

    return (
        <div>
            <Fragment>
                <div className="container">
                <div className="card">
              <form className="form theme-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Meeting About</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="text" placeholder="Meeting Title"/>
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Number</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="number" placeholder="Number" />
                        </div>
                      </div>
                      

                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Meeting From</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Meeting Till</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" />
                        </div>
                      </div>
            
                      
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label pt-0">Host</label>
                        <div className="col-sm-9">
                        <div className="form-group">
                        <div className="form-group">
                            <select value={select} onChange={eventHandle} className="form-control">
                            {options.map(option => {
                            return <option value={option} key={option} >{option}</option>
                            })}
                        </select>
                        </div>
                        </div>                          
                        </div>
                      </div>
                      <div className="form-group row mb-0">
                        <label className="col-sm-3 col-form-label">Add Notes</label>
                        <div className="col-sm-9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
                </div>
            </Fragment>
        </div>
    )
}

export default Meeting
