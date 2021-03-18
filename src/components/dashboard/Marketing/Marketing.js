// import React, { Fragment, useEffect, useState } from "react";
// // import Overview from "./lead-overview-component";
// import { Home, Activity, Users, Columns, BookOpen, Book } from "react-feather";
// import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
// import Landing from "./Landing/Landing";
// // import Timeline from "./lead-timeline-component";
// // import OpenActivities from "./lead-activity-component";

// const Marketing = ({ info, history }) => {
//   const [state, setState] = useState([]);

//   useEffect((info) => {
//     console.log(JSON.stringify(info));
//     setState(info);
//   }, []);

//   return (
//     <Fragment>
//       <div className="container-fluid">
//         <div className="row theme-tab">
//           <Tabs className="col-sm-12">
//             <TabList className="tabs tab-title m-t-45">
//               <Tab className="current">
//                 <Home />
//                 Landing
//               </Tab>
//               <Tab>
//                 <Columns />
//                 SMS
//               </Tab>
//               <Tab>
//                 <BookOpen /> Email
//               </Tab>
//               {/* <Tab>
//                 <Book /> Recommendation
//               </Tab> */}
//             </TabList>
//             <div className="tab-content-cls">
//               <TabPanel>
//                 <Landing props={history} />{" "}
//               </TabPanel>
//               <TabPanel>
//                 SMS
//                 {/* <Timeline /> */}
//               </TabPanel>
//               <TabPanel>
//                 Email
//                 {/* <OpenActivities /> */}
//               </TabPanel>
//             </div>
//           </Tabs>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Marketing;

import React, { Fragment, useEffect, useState } from "react";
// import Overview from "./lead-overview-component";
import { Home, Activity, Users, Columns, BookOpen, Book } from "react-feather";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import Email from "./Email/email-landing";
import Landing from "./Landing/Landing";
import SMS from "./SMS/sms-landing";
// import Timeline from "./lead-timeline-component";
// import OpenActivities from "./lead-activity-component";

const Marketing = ({ info, history }) => {
  const [state, setState] = useState([]);

  useEffect((info) => {
    console.log(JSON.stringify(info));
    setState(info);
  }, []);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row theme-tab">
          <Tabs className="col-sm-12">
            <TabList className="tabs tab-title m-t-45">
              <Tab className="current">
                <Home />
                Landing
              </Tab>
              <Tab>
                <Columns />
                SMS
              </Tab>
              <Tab>
                <BookOpen /> Email
              </Tab>
              {/* <Tab>
                <Book /> Recommendation
              </Tab> */}
            </TabList>
            <div className="tab-content-cls">
              <TabPanel>
                <Landing props={history} />{" "}
              </TabPanel>
              <TabPanel>
                <SMS />
                {/* <Timeline /> */}
              </TabPanel>
              <TabPanel>
                <Email />
                {/* <OpenActivities /> */}
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};

export default Marketing;
