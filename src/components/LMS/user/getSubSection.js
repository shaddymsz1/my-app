import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { useLocation, withRouter } from "react-router";
import axios from "axios";
import Loader from "../../common/loader";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ReactVideo } from "reactjs-media";

const GetLMSSubSectionLists = () => {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [videoUrl, setVideourl] = useState("");
  const [imageUrl, setImageurl] = useState("");
  const [VideoName, setVideoName] = useState("");

  const moduleID = location.state.id;
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState(location.state.title);
  console.log(moduleID);
  const url = `https://fathomless-plateau-00864.herokuapp.com/training/getVideos/${moduleID}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);

      const data = result.data;
      setVideos(data.videos);
      console.log(data.videos);
    };
    console.log(moduleID);
    fetchData();
  }, []);

  const toggle = (url, imageUrl, name) => {
    setVideourl(url);
    setImageurl(imageUrl);
    setVideoName(name);
    setModal(!modal);
  };
  // console.log(moduleID);
  return (
    <Fragment>
      <Breadcrumb parent="section1" title={title} />
      {/* {value.map((item) => (
        <li>{item.id}</li>
      ))} */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-xl-3 set-col-6">
            {videos.length
              ? videos.map((video) => {
                  return (
                    <div
                      onClick={() =>
                        toggle(video.videoURL, video.imageURL, video.videoName)
                      }
                      className="card"
                    >
                      <div className="blog-box blog-grid text-center product-hover">
                        <img
                          style={{ width: "250px", height: "182px" }}
                          className="img-fluid top-radius-blog"
                          src={video.imageURL}
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
                            {video.videoName}
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "loading"}
          </div>
          <Modal
            contentClassName="custom-modal-style"
            isOpen={modal}
            toggle={toggle}
          >
            <ModalHeader toggle={toggle}>{VideoName}</ModalHeader>
            <ReactVideo src={videoUrl} poster={imageUrl} />
            {/* <ModalBody>.....</ModalBody>
            <ModalFooter>
              <Button color="primary">Save Changes</Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter> */}
          </Modal>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(GetLMSSubSectionLists);
