import React, { Fragment, useState } from 'react';
import { Collapse } from 'reactstrap';
import { Search } from 'react-feather';

const Addons = () => {
    const [isFilter, setIsFilter] = useState(true);
    const [isDesign, setIsDesign] = useState(true);
    const [isDevelopment, setIsDevelopment] = useState(true);
    return (
        <Fragment>
            <div className="col-xl-3 xl-40 mt50">
                <div className="default-according style-1 faq-accordion job-accordion package-grid-item mt50" id="accordionoc">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" data-toggle="collapse" onClick={() => setIsFilter(!isFilter)}
                                                data-target="#collapseicon" aria-expanded={isFilter} aria-controls="collapseicon">Find Addons</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isFilter}>
                                    <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordion">
                                        <div className="card-body filter-cards-view animate-chk">

                                            <div className="checkbox-animated p-0">
                                                <div className="learning-header"><span className="f-w-600">Categories</span></div>
                                                <label className="d-block" htmlFor="chk-ani">
                                                    <input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                                    Accounting
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani0">
                                                    <input className="checkbox_animated" id="chk-ani0" type="checkbox" />
                                                    Design
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani1">
                                                    <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                                                    Development
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani2">
                                                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                    Management
                                                </label>
                                            </div>

                                            <div className="checkbox-animated mt-0">
                                                <div className="learning-header"><span className="f-w-600">Status</span></div>
                                                <label className="d-block" htmlFor="chk-ani3">
                                                    <input className="checkbox_animated" id="chk-ani3" type="checkbox" />
                                                    Registration
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani4">
                                                    <input className="checkbox_animated" id="chk-ani4" type="checkbox" />
                                                    Progress
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani5">
                                                    <input className="checkbox_animated" id="chk-ani5" type="checkbox" />
                                                    Completed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Addons;