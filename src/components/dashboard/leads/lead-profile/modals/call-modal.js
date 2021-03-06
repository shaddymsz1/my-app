import React, { Fragment, useState } from 'react'

const Call =()=> {
    const [select,setSelect]= useState('Contact')
    const [type,setType]= useState('Lead')
    const options = ["Contact","Lead"]
    const contactOptions = ["Lead", "Account","Product", "Qoute "]

   const eventHandle=(e)=> {
        return setSelect({
          value: e.target.value
        })
      }

    const leadHandle =(e)=>{
        return setType({
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
                        <label className="col-sm-3 col-form-label">Contact Name</label>
                        <div className="col-sm-9">
                        <div className="form-group">                        
                        <select value={select} onChange={eventHandle} className="form-control">
                        {options.map(option => {
                        return <option value={option} key={option} >{option}</option>
                        })}</select>             
                        </div> 
                        </div>
                        </div>
                      
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Subject</label>
                        <div className="col-sm-9">
                          <input className="form-control" type="number" placeholder="Enter Subject" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Call Purpose</label>
                        <div className="col-sm-9">
                        <div className="form-group">                        
                        <select value={type} onChange={leadHandle} className="form-control">
                        {contactOptions.map(option => {
                        return <option value={option} key={option} >{option}</option>
                        })}</select>             
                        </div> 
                        </div>
                        </div>

                        <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Related To</label>
                        <div className="col-sm-9">
                        <div className="form-group">                        
                        <select value={type} onChange={leadHandle} className="form-control">
                        {contactOptions.map(option => {
                        return <option value={option} key={option} >{option}</option>
                        })}</select>             
                        </div> 
                        </div>
                        </div>


                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Due Date</label>
                        <div className="col-sm-9">
                          <input className="form-control digits" id="example-datetime-local-input" type="datetime-local" defaultValue="2018-01-19T18:45:00" />
                        </div>
                      </div>

                      <div className="form-group row">
                      <select value={type} onChange={leadHandle} className="form-control col-sm-3 col-form-label">
                        {contactOptions.map(option => {
                        return <option value={option} key={option} >{option}</option>
                        })}
                    </select>
                        <div className="col-sm-9">
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>

                      
                      <div className="form-group row mb-0">
                        <label className="col-sm-3 col-form-label">Description</label>
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

export default Call
