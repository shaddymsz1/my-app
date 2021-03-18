import React, {Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';
import StepZilla from "react-stepzilla";
import TravelFirstInsurance from "./travelFirstScreen";
import TravelSecondInsurance from "./travelSecondScreen";
import TravelFourthInsurance from "./TravelFourthScreen";
import TravelPaymentConfirmation from "./TravelPaymentConfirmation";
import TravelOfferList from "./travelOfferListing";
import ReviewTravelInfo from "./reviewTravelInfo";


const TravelInsurance = () => {
    const steps =
        [
            {name: ' 1', component: <TravelFirstInsurance/>},
            {name: ' 2', component: <TravelSecondInsurance/>},
            {name: ' 3', component: <TravelOfferList/>},
            {name: ' 4', component: <TravelFourthInsurance/>},
            {name: ' 5', component: <TravelPaymentConfirmation/>},
            {name: '6', component: <ReviewTravelInfo/>},
        ]
    return (
        <Fragment>
            <Breadcrumb title="Health Insurance" parent="Form"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Travel Insurance</h5>
                            </div>
                            <div className="card-body">
                                <StepZilla steps={steps} showSteps={true} showNavigation={true} stepsNavigation={true}
                                           prevBtnOnLastStep={true}
                                           backButtonCls="btn btn-next btn-default btn-lg pull-left"
                                           dontValidate={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default TravelInsurance;