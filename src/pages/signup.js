import React, { Fragment, useState } from "react";
import { useHistory, withRouter } from "react-router";
import logo from "../assets/images/endless-logo.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const history = useHistory();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
    location: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://fathomless-plateau-00864.herokuapp.com/auth/useradmin",
        data
      )
      .then((response) => {
        setTimeout(() => {
          toast.success("Product Successfully Uploaded !");
          history.push(`${process.env.PUBLIC_URL}/login`);
        }, 100);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error("Something Went Wrong :(");
        }, 200);
      });
  };
  // history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
  // try {
  //   let result = await fetch(
  //     "https://fathomless-plateau-00864.herokuapp.com/auth/useradmin",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //         phone,
  //         designation,
  //         location,
  //       }),
  //     }
  //   );
  //   result = await result.json();
  //   console.log(result);
  //   //   localStorage.setItem("token", result);
  //   // history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
  //   if (result == null) {
  //     setTimeout(() => {
  //       toast.error("Oppss.. Choose different password.");
  //     }, 200);
  //   } else {
  //     setTimeout(() => {
  //       toast.success("Please Login.");
  //     }, 200);
  //     history.push(`${process.env.PUBLIC_URL}/login`);

  //   }
  //   console.log(result);
  // } catch (error) {
  //   setTimeout(() => {
  //     toast.error("Oppss.. The server is down.");
  //   }, 200);
  // }
  //   console.log(data);
  // };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="container-fluid">
          {/* <!-- sign up page start--> */}
          <div className="authentication-main">
            <div className="row">
              <div className="col-sm-12 p-0">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <div className="text-center">
                      <img src={logo} alt="" />
                    </div>
                    <div className="card mt-4 p-4">
                      <h4 className="text-center">NEW USER</h4>
                      <h6 className="text-center">
                        Enter your Username and Password For Signup
                      </h6>
                      <form className="theme-form">
                        <div className="form-row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">
                                Enter Full Name
                              </label>
                              <input
                                name="name"
                                className="form-control"
                                type="text"
                                placeholder="John"
                                onChange={changeHandler}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">Email </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="abc@xyz.com"
                            onChange={changeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">Password</label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="**********"
                            onChange={changeHandler}
                          />
                        </div>
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">
                                Phone Number
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={changeHandler}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">
                                Designation
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={changeHandler}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">Location </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            onChange={changeHandler}
                          />
                        </div>
                        <div className="form-row">
                          <div className="col-sm-4">
                            <button
                              className="btn btn-primary"
                              onClick={submitHandler}
                              type="submit"
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="col-sm-8">
                            <div className="text-left mt-2 m-l-20">
                              Are you already user?  
                              <a
                                className="btn-link text-capitalize"
                                href="login.html"
                              >
                                Login
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="form-divider"></div>
                        <div className="social mt-3">
                          <div className="form-group btn-showcase d-flex">
                            <button className="btn social-btn btn-fb d-inline-block">
                              {" "}
                              <i className="fa fa-facebook"></i>
                            </button>
                            <button className="btn social-btn btn-twitter d-inline-block">
                              <i className="fa fa-google"></i>
                            </button>
                            <button className="btn social-btn btn-google d-inline-block">
                              <i className="fa fa-twitter"></i>
                            </button>
                            <button className="btn social-btn btn-github d-inline-block">
                              <i className="fa fa-github"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sign up page ends--> */}
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Signup);
