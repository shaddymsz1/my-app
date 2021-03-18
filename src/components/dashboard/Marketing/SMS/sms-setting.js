import React,{Fragment} from 'react'
import { Home, Activity} from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import SmsSchedule from './sms-schedule-setting';
import SmsSendSetting from './sms-send-setting';

const SmsSetting =() => {
    return (
        <Fragment>            
            <div className="container-fluid">
                    <div className="row theme-tab">
                        <Tabs className="col-sm-12">
                            <TabList className="tabs tab-title m-t-45 justify-content-md-center">
                                
                                <Tab>
                                    <Activity />Settings
                                </Tab>
                                <Tab>
                                    <Activity />Send or schedule
                                </Tab>

                            </TabList>
                            <div className="tab-content-cls">
                                
                                <TabPanel>
                                    <SmsSendSetting/>
                                </TabPanel>
                                <TabPanel>
                                    <SmsSchedule/>
                                </TabPanel>

                            </div>
                        </Tabs>
                    </div>
                </div>
        </Fragment>
    )
}

export default SmsSetting
