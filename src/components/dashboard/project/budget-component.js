import React, {Fragment} from 'react';
import StepZilla from "react-stepzilla";
import Registration from '../../forms/wizard/registration';
import InsuranceInfo from "../../forms/wizard/insurance-type";
import OfferList from '../../forms/wizard/birthdate'
import InitialOffer from "../../forms/wizard/InitialOffer";
import ReviewQuotation from "../../forms/wizard/reviewQuotation";
import PolicyQuestions from "../../forms/wizard/policyQuestions";
import PolicyQuestion2 from "../../forms/wizard/policyQuestion2";
import PolicyReview from "../../forms/wizard/policyReview";
import MotorPolicyFinalForms from "../../forms/wizard/motorPolicyFinalForms";


const BudgetComponent = () => {

    const steps =
        [



            {name: '1', component: <InsuranceInfo/>},
            {name: '2', component: <Registration/>},
            {name: '3', component: <InitialOffer/>},
            {name: '4', component: <OfferList/>},
            {name: '5', component: <PolicyQuestions/>},
            {name: '6', component: <PolicyQuestion2/>},
            {name: '7', component: <PolicyReview/>},
            {name: '8', component: <MotorPolicyFinalForms/>},
            {name: '9', component: <ReviewQuotation/>},

        ]
    return (
        <Fragment>
            <div className="tab-content" id="tab-2">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">

                                <div className="card-body">
                                    <StepZilla steps={steps} showSteps={false} showNavigation={true}
                                               stepsNavigation={true}
                                               backButtonCls="btn btn-next btn-default btn-lg pull-left"
                                               prevBtnOnLastStep={true}
                                               dontValidate={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default BudgetComponent;



