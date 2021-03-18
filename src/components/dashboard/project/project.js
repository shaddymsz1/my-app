import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { Home, Activity, Users } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import HomeComponent from './home-component';
import BudgetComponent from './budget-component';
import UserComponent from './user-component';

const Project = () => {
        return (
            <Fragment>

                <div className="container-fluid">
                    <div className="row theme-tab">
                        <Tabs className="col-sm-12">
                            <TabList className="tabs tab-title m-t-45">
                                <Tab className="current">
                                    <Home />Dashboard
                                </Tab>
                                <Tab>
                                    <Activity />Create Quote
                                </Tab>

                            </TabList>
                            <div className="tab-content-cls">
                                <TabPanel>
                                    <HomeComponent />
                                </TabPanel>
                                <TabPanel>
                                    <BudgetComponent />
                                </TabPanel>

                            </div>
                        </Tabs>
                    </div>
                </div>
            </Fragment>
        );
}

export default Project;