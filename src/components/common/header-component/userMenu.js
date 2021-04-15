import React, { Fragment, useState, useEffect } from "react";
import man from "../../../assets/images/dashboard/user.png";
import { User, Mail, Lock, Settings, LogOut } from "react-feather";
import app from "../../../data/base";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const UserMenu = ({ history }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || man);
  }, []);

  const logOut = () => {
    console.log("clicked");
    localStorage.removeItem("token");
    // app.auth().signOut();
    history.push(`${process.env.PUBLIC_URL}/login`);
    window.location.reload()
  };

  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="media align-items-center">
          <img
            className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
            src="data:image/png;base64,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"
            alt="header-user"
          />
          <div className="dotted-animation">
            <span className="animate-circle"></span>
            <span className="main-circle"></span>
          </div>
        </div>
        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>
              <User />
              Edit Profile
            </Link>
          </li>
          <li>
            <a href="#!">
              <Mail />
              Inbox
            </a>
          </li>
          <li>
            <a href="#!">
              <Lock />
              Lock Screen
            </a>
          </li>
          <li>
            <a href="#!">
              <Settings />
              Settings
            </a>
          </li>
          <li>
            <a onClick={logOut}>
              <LogOut /> Log out
            </a>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};

export default withRouter(UserMenu);
