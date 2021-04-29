import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { useLocation, withRouter } from "react-router";
import axios from "axios";
import Loader from "../../common/loader";

const GetLMSSubSectionLists = () => {
  const location = useLocation();

  const [value, setValue] = useState([]);

  useEffect(() => {
    if (location.state !== null) {
      const moduleID = location.state;
      console.log(moduleID);

      const url = `https://fathomless-plateau-00864.herokuapp.com/training/getVideos/${moduleID}`;
      const fetchData = async () => {
        const result = await axios.get(url);

        const data = result.data;

        console.log(data);
      };
      console.log(moduleID);
      fetchData();
    }
  }, []);
  // console.log(moduleID);
  return (
    <Fragment>
      <Breadcrumb parent="section1" title="Section 1 All Videos and Quiz" />
      {/* {value.map((item) => (
        <li>{item.id}</li>
      ))} */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-xl-3 set-col-6">
            <div className="card">
              <div className="blog-box blog-grid text-center product-hover">
                <img
                  className="img-fluid top-radius-blog"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  alt=""
                />
                <div className="blog-details-main">
                  <ul className="blog-social">
                    <li className="digits">Video - 1</li>
                    <li className="digits">Quizz - 2</li>
                    <li className="digits">Watch Time - 15 Minutes</li>
                  </ul>
                  <hr />
                  <h6 className="blog-bottom-details">
                    Section 1 - first Video
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(GetLMSSubSectionLists);
