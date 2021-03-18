import React, {Fragment} from 'react';
import '../../assets/css/custom-form.css'
import Addons from '../forms/wizard/addons'

const HealthOfferList = (props) => {
    const submitFun = () => {
        alert("successfully updated")
    }
    return (
        <Fragment>
            <div className="row m-t-45">

                <div className="col-md-9">
                    <div className="col-md-12">
                        <h5 className="mt50 m-b-25">5 Results Found</h5>
                        <div className="package-grid-item">
                            <div className="image-box">
                                <img src='https://assets.coverfox.com/static/img/insurers/motor/bajaj-allianz.png'
                                     alt="image"/>
                            </div>
                            <div className="content-box">

                                <div className="other-text">
                                    <p className="small-text-grid">
                                        Plan Details :Our Ninjas are looking into it. You can try again or call us on
                                        our
                                        toll
                                        free number 1800 209 9930.
                                    </p>
                                </div>

                                <div className="price-box">
                                    <p className="price-text"> Rs. 2225/- </p>
                                </div>
                            </div>
                        </div>
                        <div className="package-grid-item">
                            <div className="image-box">
                                <img src='https://assets.coverfox.com/static/img/insurers/motor/bajaj-allianz.png'
                                     alt="image"/>
                            </div>
                            <div className="content-box">

                                <div className="other-text">
                                    <p className="small-text-grid">
                                        Plan Details :Our Ninjas are looking into it. You can try again or call us on
                                        our
                                        toll
                                        free number 1800 209 9930.
                                    </p>
                                </div>

                                <div className="price-box">
                                    <p className="price-text"> Rs. 2225/- </p>
                                </div>
                            </div>
                        </div>
                        <div className="package-grid-item">
                            <div className="image-box">
                                <img src='https://assets.coverfox.com/static/img/insurers/motor/bajaj-allianz.png'
                                     alt="image"/>
                            </div>
                            <div className="content-box">

                                <div className="other-text">
                                    <p className="small-text-grid">
                                        Plan Details :Our Ninjas are looking into it. You can try again or call us on
                                        our
                                        toll
                                        free number 1800 209 9930.
                                    </p>
                                </div>

                                <div className="price-box">
                                    <p className="price-text"> Rs. 2225/- </p>
                                </div>
                            </div>
                        </div>
                        <div className="package-grid-item">
                            <div className="image-box">
                                <img src='https://assets.coverfox.com/static/img/insurers/motor/bajaj-allianz.png'
                                     alt="image"/>
                            </div>
                            <div className="content-box">

                                <div className="other-text">
                                    <p className="small-text-grid">
                                        Plan Details :Our Ninjas are looking into it. You can try again or call us on
                                        our
                                        toll
                                        free number 1800 209 9930.
                                    </p>
                                </div>

                                <div className="price-box">
                                    <p className="price-text"> Rs. 2225/- </p>
                                </div>
                            </div>
                        </div>
                        <div className="package-grid-item">
                            <div className="image-box">
                                <img src='https://assets.coverfox.com/static/img/insurers/motor/bajaj-allianz.png'
                                     alt="image"/>
                            </div>
                            <div className="content-box">

                                <div className="other-text">
                                    <p className="small-text-grid">
                                        Plan Details :Our Ninjas are looking into it. You can try again or call us on
                                        our
                                        toll
                                        free number 1800 209 9930.
                                    </p>
                                </div>

                                <div className="price-box">
                                    <p className="price-text"> Rs. 2225/- </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Addons/>

            </div>
        </Fragment>
    );
};

export default HealthOfferList;