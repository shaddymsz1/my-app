import React, {Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';
import StepZilla from "react-stepzilla";
import FirstHealthScreen from "./health-first-screen";
import SecondHealthScreen from "./health-second-screen";
import ThirdHealthScreen from "./health-third-screen";
import FourthHealthScreen from "./health-fourth-screen";
import PinCodeScreenHealth from "./health-pin-code-screen";
import HospitalScreenHealth from "./health-hospital-screen";
import FinalCheckoutHealthScreen from "./finalCheckoutHealthScreen"
import HealthOfferList from "./healthOffersListing";
import HealthOfferSingle from "./healthOfferSingle";
import HealthProposalForm from "./healthProposalForm";

const HealthInsurance = () => {
    const steps =
        [

            {name: ' 1', component: <FirstHealthScreen/>},
            {name: ' 2', component: <SecondHealthScreen/>},
            {name: ' 3', component: <ThirdHealthScreen/>},
            {name: ' 4', component: <FourthHealthScreen/>},
            {name: ' 5', component: <PinCodeScreenHealth/>},
            {name: ' 6', component: <HospitalScreenHealth/>},
            {name: ' 7', component: <HealthOfferList/>},
            {name: ' 8', component: <HealthOfferSingle/>},
            {name: ' 9', component: <HealthProposalForm/>},
            {name: ' 10', component: <FinalCheckoutHealthScreen/>},

        ]
    return (
        <Fragment>
            <Breadcrumb title="Health Insurance" parent="Form"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Health Insurance</h5>
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

export default HealthInsurance;