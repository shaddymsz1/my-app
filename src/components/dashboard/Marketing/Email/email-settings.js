import React,{Fragment} from 'react'
import { Home, Activity} from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import Settings from './settings';
import SendSetting from './send-settings';
import AllTemplates from '../Landing/AllTemplates';

const EmailSettings =()=> {
    return (
        <Fragment>            
            <div className="container-fluid">
                    <div className="row theme-tab">
                        <Tabs className="col-sm-12">
                            <TabList className="tabs tab-title m-t-45 justify-content-md-center">
                                <Tab className="current">
                                    <Home />Templates
                                </Tab>
                                <Tab>
                                    <Activity />Settings
                                </Tab>
                                <Tab>
                                    <Activity />Send or schedule
                                </Tab>

                            </TabList>
                            <div className="tab-content-cls">
                                <TabPanel>
                                    <AllTemplates/>
                                </TabPanel>
                                <TabPanel>
                                    <Settings/>
                                </TabPanel>
                                <TabPanel>
                                    <SendSetting/>
                                </TabPanel>

                            </div>
                        </Tabs>
                    </div>
                </div>
        </Fragment>
    )
}

export default EmailSettings
