import React, { useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import Loader from "../../common/loader";
import { toast } from "react-toastify";

const CreateLMSVideoForm = () => {
  const [value, setValue] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [data, setData] = useState({
    moduleName: "",
    videoName: "",
    description: "",
    imagefile: "",
    videofile: "",
  });
  const url = "https://fathomless-plateau-00864.herokuapp.com/v1/getmodules";

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const imgHandler = (e) => {
    setData({ ...data, imagefile: e.target.files[0] });
  };
  const vidHandler = (e) => {
    setData({ ...data, videofile: e.target.files[0] });
  };
  const submitHandler = () => {
    const formData = new FormData();
    formData.append("moduleName", data.moduleName);
    formData.append("videoName", data.videoName);
    formData.append("description", data.description);
    formData.append("imagefile", data.imagefile);
    formData.append("videofile", data.videofile);
    console.log(formData);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);

        if (percent < 100) {
          setPercentage(percent);
        }
      },
    };
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/v1/uploadvideo",
        formData,
        options
      )
      .then((response) => {
        setPercentage(100);
        setTimeout(() => {
          toast.success("Video Successfully Uploaded !");
        }, 100);
        setData({
          moduleName: "",
          videoName: "",
          description: "",
          imagefile: "",
          videofile: "",
        });
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setValue(result.data.data);
    };
    fetchData();
  }, []);

  if (value && value.length === 0) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <Breadcrumb parent="Learning" title="Add Video" />

      <div className="row card ">
        <videoBySubSectionLms />
        <div className="card-header col-md-12 text-center">
          <h2 className="health-heading mt100">Create Video Form</h2>
          <p>Create Video for LMS</p>
        </div>
        <div className="col-md-12 card-body">
          <div className="col-md-6 offset-3">
            <div className="col-md-12 mb-3 ">
              <div className="col-md-12 mb-3">
                <select
                  onChange={changeHandler}
                  //   value={data.moduleName}
                  name="moduleName"
                  placeholder="Select Section name"
                  as="select"
                  className="form-control"
                >
                  <option>Select Video Module</option>
                  {value.map((option) => (
                    <option key={option.id} value={option.moduleName}>
                      {option.moduleName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <input
                  onChange={changeHandler}
                  //   value={data.videoName}
                  name="videoName"
                  placeholder="Enter Video name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  onChange={changeHandler}
                  //   value={data.description}
                  name="description"
                  placeholder="Enter Video Description text"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="text-left">Video Thumbnail Image</label>
                <input
                  onChange={imgHandler}
                  //   value={data.imagefile}
                  name="imagefile"
                  placeholder="Enter Video Description text"
                  type="file"
                  className="form-control"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="text-left">Upload Video</label>
                <input
                  onChange={vidHandler}
                  name="videofile"
                  //   value={data.videofile}
                  placeholder="Upload Video"
                  type="file"
                  className="form-control"
                />
                {percentage > 0 && (
                  <ProgressBar now={percentage} label={`${percentage}%`} />
                )}
              </div>

              <div className="col-md-12 mb-3">
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="btn btn-primary btn-block"
                >
                  Create Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLMSVideoForm;
