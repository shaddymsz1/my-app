import React, {Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';
import StepZilla from "react-stepzilla";
import LifeTermsFirstScreen from "./lifeTermsFirstScreen";
import LifeTermsSecondScreen from "./lifeTermsSecondScreen";
import ShareQuoteScreen from "./shareQuoteScreen";


const LifeTerms = () => {
    const steps =
        [
            {name: 'step 1', component: <LifeTermsFirstScreen/>},
            {name: 'step 2', component: <LifeTermsSecondScreen/>},
            {name: 'step 3', component: <ShareQuoteScreen/>},
        ]

    return (
        <Fragment>
            <Breadcrumb title="Health Insurance" parent="Form"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>LIFE TERMS INVESTMENT</h5>
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

export default LifeTerms;