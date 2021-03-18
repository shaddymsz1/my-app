import React from "react";
import "../../assets/css/health-screens.css"

const FinalCheckoutHealthScreen = () => {
    return (
        <React.Fragment>
            <div className="row mt50 mb50">
                <div className="col-md-12">
                    <h3 className="checkout-heading">Checkout</h3>
                    <p> You will be redirected to payment gateway on clicking proceed to payment</p>
                    <p className="alert alert-success">Proposal details have been mailed to
                        singhshubham873@gmail.com</p>
                </div>

                <div className="package-grid-block">
                    <div className="col-md-12">
                        <div className="same-line">
                            <div className="image-grid">
                                <img src="https://www.yourloanadvisors.com/wp-content/uploads/2016/07/hdfc.png"
                                     className="check-img" alt="logo"/>
                                <h1 className="health-provider-name">
                                    Care Advantage with discount riders
                                </h1>
                            </div>
                            <div className="content-grid">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="grid-key">Cover Amount</p>
                                            <p className="grid-value">₹ 1 Cr</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="grid-key">Policy Period</p>
                                            <p className="grid-value">1 Year</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="grid-key">Premium</p>
                                            <p className="grid-value">₹ 1 Cr</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="grid-key">Members Covered</p>
                                            <p className="grid-value">Dinesh Kartik</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="col-md-12">
                        <div className="row text-right">
                            <div className="col-md-8">
                                <h6 className="grand-total"> Grand Total ₹10,540</h6>
                                <p className="all-taxes">(Inclusive of all taxes)</p>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-block btn-primary paymentbtn">Proceed to payment</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )

}
export default FinalCheckoutHealthScreen