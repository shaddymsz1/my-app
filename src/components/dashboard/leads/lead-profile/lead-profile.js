import React,{Fragment, useEffect, useState} from 'react'
import Overview from './lead-overview-component'
import { Home, Activity, Users, Columns, BookOpen, Book } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import Timeline from './lead-timeline-component';
import OpenActivities from './lead-activity-component';

const Profile =({info})=> {

    const [state,setState]= useState([]);

    useEffect((info)=>{
        console.log(JSON.stringify(info))
        setState(info)
    },[])


    return (
        
<Fragment>

<div className="container-fluid">
    <div className="row theme-tab">
        <Tabs className="col-sm-12">
            <TabList className="tabs tab-title m-t-45">
                <Tab className="current" >
                    <Home />Overview
                </Tab>
                <Tab>
                    <Columns />Timeline
                </Tab>
                <Tab>
                    <BookOpen /> Activities
                </Tab>
                <Tab>
                    <Book /> Recommendation
                </Tab>

            </TabList>
            <div className="tab-content-cls">
                <TabPanel>
                    <Overview/>
                </TabPanel>
                <TabPanel>
                    <Timeline />
                </TabPanel>
                <TabPanel>
                    <OpenActivities />
                </TabPanel>
            </div>
        </Tabs>
    </div>
</div>
</Fragment>
    )
}

export default Profile
