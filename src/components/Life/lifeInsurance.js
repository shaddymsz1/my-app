import React, {Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';
import StepZilla from "react-stepzilla";
import GenderLifeScreen from "./genderLifeScreen";
import MarriageLifeScreen from "./marriageLifeScreen";
import BirthLifeScreen from "./BirthLifeScreen";
import SmokeLifeScreen from "./smokeLifeScreen";
import IncomeLifeScreen from "./IncomeLifeScreen";
import AssurredLifeScreen from "./AssuredLifeScreen";
import LifeFirstScreen from "./lifeFirstScreen";


const LifeInsurance = () => {
    const steps =
        [
            {name: 'step 1', component: <LifeFirstScreen/>},
            {name: 'Step 2', component: <GenderLifeScreen/>},
            {name: 'Step 3', component: <MarriageLifeScreen/>},
            {name: 'Step 4', component: <BirthLifeScreen/>},
            {name: 'Step 5', component: <IncomeLifeScreen/>},
            {name: 'Step 6', component: <SmokeLifeScreen/>},
            {name: 'Step 7', component: <AssurredLifeScreen/>},
        ]
    return (
        <Fragment>
            <Breadcrumb title="Health Insurance" parent="Form"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>LIFE Insurance</h5>
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

export default LifeInsurance;