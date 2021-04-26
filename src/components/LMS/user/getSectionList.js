import Breadcrumb from "../../common/breadcrumb";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const GetAllSectionList = () => {
  const [value, setValue] = useState([]);
  const url = "https://fathomless-plateau-00864.herokuapp.com/v1/getmodules";
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setValue(result.data.data);
      //   console.log(result.data.data);
    };
    fetchData();
  }, []);

  //   const clickHandle = () => {
  //     history.push({
  //       pathname: `${process.env.PUBLIC_URL}/student/lms/:sectionId`,
  //       state: { value: value },
  //     });
  //     // history.push(`${process.env.PUBLIC_URL}/student/lms/:sectionId`, value);
  //   };

  return (
    <Fragment>
      <Breadcrumb title="LMS Sections List" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 xl-100">
            <div className="row">
              {value.map((item) => (
                <div className="col-xl-4 xl-50 col-md-6">
                  <div className="col-md-12">
                    <div
                      className="card progress-media"
                      onClick={() => {
                        history.push({
                          pathname: `${process.env.PUBLIC_URL}/student/lms/:sectionId${item.id}`,
                          state: { moduleId: item.id },
                        });
                      }}
                    >
                      <div className="card-body">
                        <div className="media ">
                          <div className="media-body ">
                            <h5>{item.moduleName}</h5>
                            <span className="mb-0 d-block">
                              {item.videos} Videos
                            </span>
                            <span className="mb-0 d-block">12 Quizzes</span>
                          </div>
                        </div>
                        <div className="progress-bar-showcase">
                          <div className="progress sm-progress-bar">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-change">
                          <span>Completed Status</span>
                          <span className="pull-right">95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GetAllSectionList;
