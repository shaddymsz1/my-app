import React, { useState, useEffect } from "react";
import logo from "../assets/images/endless-logo.png";
import man from "../assets/images/dashboard/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { withRouter } from "react-router";
import app, {
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
} from "../data/base";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIN, setLoggedIN] = useState(false);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));

  // useEffect(() => {
  //   if (value !== null) localStorage.setItem("profileURL", value);
  //   else localStorage.setItem("profileURL", man);
  // }, [value]);

  const loginAuth = async () => {
    try {
      let result = await fetch("/auth/useradmin/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      result = await result.json();
      if (result.token == null) {
        setTimeout(() => {
          toast.error("Oppss.. The password or username is invalid.");
        }, 200);
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("designation", result.user.designation);
        if (localStorage.getItem("designation" === "user")) {
          history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
        } else {
          history.push(`${process.env.PUBLIC_URL}/dashboard/addDepartment`);
        }
        window.location.reload();
      }
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The server is down.");
      }, 200);
    }

    // try {

    //     if (app.options.apiKey !== "REACT_APP_FIREBASE_KEY") {
    //         await app
    //             .auth()
    //             .signInWithEmailAndPassword(email, password);
    //         setValue(man);
    //         history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
    //     }
    //     else {
    //         history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
    //     }
    // } catch (error) {
    //     setTimeout(() => {
    //         toast.error("Oppss.. The password is invalid or the user does not have a password.");
    //     }, 200);
    // }
  };

  //un-comment this loginAuth Function when u want use login with firebase only
  // const loginAuth = async () => {
  //     try {
  //         await app
  //             .auth()
  //             .signInWithEmailAndPassword(email, password);
  //         setValue(man);
  //         history.push(`${process.env.PUBLIC_URL}/dashboard/default`);

  //     } catch (error) {
  //         setTimeout(() => {
  //             toast.error("Oppss.. The password is invalid or the user does not have a password.");
  //         }, 200);
  //     }
  // }

  const googleAuth = async () => {
    try {
      app
        .auth()
        .signInWithPopup(googleProvider)
        .then(function (result) {
          setValue(result.user.photoURL);
          setTimeout(() => {
            history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "Oppss.. The password is invalid or the user does not have a password."
        );
      }, 200);
    }
  };

  const facebookAuth = async () => {
    try {
      app
        .auth()
        .signInWithPopup(facebookProvider)
        .then(function (result) {
          setValue(result.user.photoURL);
          setTimeout(() => {
            history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "Oppss.. The password is invalid or the user does not have a password."
        );
      }, 200);
    }
  };
  const twitterAuth = async () => {
    try {
      app
        .auth()
        .signInWithPopup(twitterProvider)
        .then(function (result) {
          setValue(result.user.photoURL);
          setTimeout(() => {
            history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "Oppss.. The password is invalid or the user does not have a password."
        );
      }, 200);
    }
  };
  const githubAuth = async () => {
    try {
      app
        .auth()
        .signInWithPopup(githubProvider)
        .then(function (result) {
          setValue(result.user.photoURL);
          setTimeout(() => {
            history.push(`${process.env.PUBLIC_URL}/dashboard/addDepartment`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "Oppss.. The password is invalid or the user does not have a password."
        );
      }, 200);
    }
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid p-0">
          {/* <!-- login page start--> */}
          <div className="authentication-main">
            <div className="row">
              <div className="col-md-12">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <div className="text-center">
                      <img src={logo} alt="" />
                    </div>
                    <div className="card mt-4">
                      <div className="card-body">
                        <div className="text-center">
                          <h4>LOGIN</h4>
                          <h6>Enter your Username and Password </h6>
                        </div>
                        <form className="theme-form">
                          <div className="form-group">
                            <label className="col-form-label pt-0">
                              Your Name
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email address"
                            />
                            {/* {errors.email && 'Email is required'} */}
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">Password</label>
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* {errors.password && 'Email is required'} */}
                          </div>
                          <div className="checkbox p-0">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">Remember me</label>
                          </div>
                          <div className="form-group form-row mt-3 mb-0">
                            <button
                              className="btn btn-primary btn-block"
                              type="button"
                              onClick={() => loginAuth()}
                            >
                              Login
                            </button>
                          </div>
                          <div
                            style={{ padding: "25px 0" }}
                            className="text-center"
                          >
                            {" "}
                            Don't Have an account ? SignUp{" "}
                            <a
                              onClick={() =>
                                history.push(
                                  `${process.env.PUBLIC_URL}/pages/signup`
                                )
                              }
                              href="#"
                            >
                              Here
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          {/* <!-- login page end--> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
