import React, { Fragment, useEffect, useState } from 'react'
import seven from '../../../../assets/images/user/7.jpg'

const Overview =( )=> {

    const [readonly,setReadonly] = useState(true);

    const handleClick =(e)=>{
        setReadonly(false)
        e.preventDefault();
    }

    return (
        <Fragment>
        <div className="container-fluid">
            <div className="edit-profile">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0"> Profile</h4>
                                <div className="card-options">
                                    <a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-2">
                                        <div className="col-auto"><img className="img-70 rounded-circle" alt="" src={seven} /></div>
                                        <div className="col">
                                            <h3 className="mb-1">MARK JECNO</h3>
                                            <p className="mb-4">DESIGNER</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <h6 className="form-label">Bio</h6>
                                        <textarea className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation"readOnly = {readonly} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email-Address</label>
                                        <input className="form-control" placeholder="your-email@domain.com" readOnly = {readonly}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Score</label>
                                        <input className="form-control" defaultValue="*******" readOnly readOnly = {readonly}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Website</label>
                                        <input className="form-control" placeholder="http://Uplor .com" readOnly = {readonly}/>
                                    </div>
                                    <div className="form-footer">
                                        <button className="btn btn-primary btn-block">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0"> Profile</h4>
                                <div className="text-right">
                                <button className="btn text-right" type="submit" onClick={handleClick}>Edit</button>
                                </div>
                                <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="form-label">Company</label>
                                            <input className="form-control" type="text" placeholder="Company" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label className="form-label">Username</label>
                                            <input className="form-control" type="text" placeholder="Username" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Email address</label>
                                            <input className="form-control" type="email" placeholder="Email" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">First Name</label>
                                            <input className="form-control" type="text" placeholder="Company" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Last Name</label>
                                            <input className="form-control" type="text" placeholder="Last Name" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Address</label>
                                            <input className="form-control" type="text" placeholder="Home Address" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">City</label>
                                            <input className="form-control" type="text" placeholder="City" readOnly = {readonly}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label className="form-label">Postal Code</label>
                                            <input className="form-control" type="number" placeholder="ZIP Code" readOnly = {readonly} />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="form-label">Country</label>
                                            <select className="form-control btn-square" readOnly = {readonly}>
                                                <option value="0">--Select--</option>
                                                <option value="1">Germany</option>
                                                <option value="2">Canada</option>
                                                <option value="3">Usa</option>
                                                <option value="4">Aus</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <label className="form-label">About Me</label>
                                            <textarea className="form-control" rows="5" placeholder="Enter About your description" readOnly = {readonly}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-right">
                                <button className="btn btn-primary" type="submit">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Overview
