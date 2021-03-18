import React, {useState} from 'react';


const ReviewQuotation = (props) => {
    const [checkBoxReview, setCheckBoxReview] = useState(false)


    return (
        <React.Fragment>
            <div className="row">
                  <div className="u-pearl current col-4">
                    <div className="u-pearl-icon"><i className="icon-shopping-cart" aria-hidden="true"></i></div><span className="u-pearl-title">Account Info</span>
                  </div>
                  <div className="u-pearl  col-4">
                    <div className="u-pearl-icon"><i className="icon-write" aria-hidden="true"></i></div><span className="u-pearl-title">Billing Info</span>
                  </div>
                  <div className="u-pearl col-4">
                    <div className="u-pearl-icon"><i className="icon-check" aria-hidden="false"></i></div><span className="u-pearl-title">Confirmation</span>
                  </div>
                </div>
            <section className="mt50 reviewQuotation">

                <h4 className="text-center m-b-25">
                    Review Quotation
                </h4>

                <div className="row ">
                    <div className="col-xl-6">
                        <div className="height-equal package-grid-item card">
                            <div className="card-header card-header-border">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <h5>Company Information</h5>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="pull-right right-header">
                                            <div className="onhover-dropdown">
                                                <button className="btn btn-primary btn-pill" type="button"
                                                        onClick={() => props.jumpToStep(1)}>
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body recent-notification">
                                <div className="media">
                                    <h6>Company name</h6>
                                    <div className="media-body"><span>Codoc Technloogy</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Registration No.</h6>
                                    <div className="media-body"><span>GMFPS1324TGH</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Puropse of Insurance </h6>
                                    <div className="media-body"><span>New Vehicle</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Sequence Number</h6>
                                    <div className="media-body">
                                        <span>26516551</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Usage Type</h6>
                                    <div className="media-body"><span>New Renewal</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Policy Start Date</h6>
                                    <div className="media-body">
                                        <span>20/11/2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="height-equal package-grid-item card">
                            <div className="card-header card-header-border">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <h5> Information</h5>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="pull-right right-header">
                                            <div className="onhover-dropdown">
                                                <button className="btn btn-primary btn-pill" type="button"
                                                        onClick={() => props.jumpToStep(2)}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body recent-notification">
                                <div className="media">
                                    <h6>Make</h6>
                                    <div className="media-body"><span>HSGDJL</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>MODAL</h6>
                                    <div className="media-body"><span>TVS APACHI</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Chasis Number</h6>
                                    <div className="media-body"><span>GMFPS12312</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Plate Number</h6>
                                    <div className="media-body">
                                        <span>26516551</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="height-equal package-grid-item card">
                            <div className="card-header card-header-border">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <h5> Policy Holder details</h5>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="pull-right right-header">
                                            <div className="onhover-dropdown">
                                                <button className="btn btn-primary btn-pill" type="button"
                                                        onClick={() => props.jumpToStep(2)}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body recent-notification">
                                <div className="media">
                                    <h6>National Id Nmber</h6>
                                    <div className="media-body"><span>HSGDJL</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Date Of Birth</h6>
                                    <div className="media-body"><span>20/11/1997</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Mobile Nuber</h6>
                                    <div className="media-body"><span>8081962686</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="height-equal package-grid-item card">
                            <div className="card-header card-header-border">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <h5> Driver Details</h5>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="pull-right right-header">
                                            <div className="onhover-dropdown">
                                                <button className="btn btn-primary btn-pill" type="button"
                                                        onClick={() => props.jumpToStep(2)}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body recent-notification">
                                <div className="media">
                                    <h6>Main Driver</h6>
                                    <div className="media-body"><span>Yes</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Driver National Id</h6>
                                    <div className="media-body"><span>1565165DFV</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <h6>Date of Birth</h6>
                                    <div className="media-body"><span>20/11/1997</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 text-center checkbox-animated mt50 mb-5">
                    <label className="d-block" htmlFor="chk-ani">
                        <input className="checkbox_animated" id="chk-ani" value={checkBoxReview} type="checkbox"
                               onChange={(e) => setCheckBoxReview(!checkBoxReview)}/>
                        Agree to the terms, to make payment
                    </label>
                </div>


                <div className="col-md-12 text-center mt50 mb-5">
                    <button type="button" className="btn btn-prev btn-primary btn-lg" id="next-button"
                            disabled={!checkBoxReview}>
                        Pay Now
                    </button>
                </div>

            </section>
        </React.Fragment>
    )

}

export default ReviewQuotation