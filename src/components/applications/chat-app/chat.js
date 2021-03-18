import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import four from "../../../assets/images/user/4.jpg";
import one from "../../../assets/images/user/1.jpg";
import two from "../../../assets/images/user/2.png";
import start_conversion from "../../../assets/images/start-conversion.jpg";
import errorImg from "../../../assets/images/search-not-found.png";
// import Custom Componenets
import Breadcrumb from "../../common/breadcrumb";
import io from "socket.io-client";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import queryString from "query-string";

import {
  getAllChats,
  changeChat,
  searchMember,
  sendMessage,
  createNewChat,
  replyByUser,
} from "../../../actions/chat.action";

var images = require.context("../../../assets/images", true);

let socket;

const Chat = ({
  getAllChats,
  changeChat,
  createNewChat,
  searchMember,
  sendMessage,
  replyByUser,
  location,
}) => {
  const allMembers = useSelector((content) => content.ChatApp.allMembers);
  const chats = useSelector((content) => content.ChatApp.chats);
  const selectedUser = useSelector((content) => content.ChatApp.selectedUser);
  const currentUser = useSelector((content) => content.ChatApp.currentUser);
  const online = useSelector((content) => content.ChatApp.online);
  const members = useSelector((content) => content.ChatApp.members);
  const dispatch = useDispatch();
  const [name, setName] = useState("John");
  const [room, setRoom] = useState("Admin");
  const [users, setUsers] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const endpoint = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(endpoint, {
      transports: ["websocket", "polling", "flashsocket"],
    });
    setRoom(room);
    setName(name);
    socket.emit("join", { name, room });
    const currentUserId = 0;
    dispatch({ type: "GET_MEMBERS_SUCCESS" });
    getAllChats(currentUserId);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // eslint-disable-next-line
    console.log(socket);
  }, [endpoint]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      console.log("users", users);
      setUsers(users);
    });
  }, [messages]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

  const changeChatClick = (e, selectedUserId) => {
    handleSearchKeyword("");
    const currentChat = chats.find(
      (x) =>
        x.users.includes(currentUser.id) && x.users.includes(selectedUserId)
    );
    if (currentChat) {
      changeChat(selectedUserId);
    } else {
      createNewChat(currentUser.id, selectedUserId, chats);
    }
  };

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
    searchMember(keyword);
  };

  const handleMessageChange = (message) => {
    setMessageInput(message);
  };

  const handleMessagePress = (e) => {
    if (e.key === "Enter" || e === "send") {
      var container = document.querySelector(".chat-history");
      setTimeout(function () {
        container.scrollBy({ top: 200, behavior: "smooth" });
      }, 310);

      let currentUserId = currentUser.id;
      let selectedUserId = selectedUser.id;
      let selectedUserName = selectedUser.name;

      if (message) {
        socket.emit("sendMessage", message, () => setMessage(""));
      }

      // if (messageInput.length > 0) {
      //   sendMessage(currentUserId, selectedUserId, messageInput, chats, online);
      //   setMessageInput("");

      // setTimeout(() => {
      //   const replyMessage =
      //     "Hey This is " +
      //     selectedUserName +
      //     ", Sorry I busy right now, I will text you later";

      //   if (selectedUser.online === true)
      //     document.querySelector(".status-circle").classList.add("online");

      //   selectedUser.online = true;
      //   replyByUser(
      //     currentUserId,
      //     selectedUserId,
      //     replyMessage,
      //     chats,
      //     online
      //   );
      // }, 5000);
      // }
    }
  };
  console.log(message, messages.length);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };

  const chatMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  const selectedChat =
    allMembers && chats && selectedUser
      ? chats.find(
          (x) =>
            x.users.includes(currentUser.id) &&
            x.users.includes(selectedUser.id)
        )
      : null;

  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;

  const [activeTab, setActiveTab] = useState("1");
  const [modal5, setModal5] = useState(false);

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (messages.user === trimmedName) {
    isSentByCurrentUser = true;
  }
  const toggle5 = () => {
    setModal5(!modal5);
  };
  console.log(isSentByCurrentUser, messages);
  return allMembers && chats ? (
    <div>
      <Modal isOpen={modal5} toggle={toggle5}>
        <ModalHeader toggle={toggle5}>New Group</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label className="col-form-label" htmlFor="recipient-name">
                Group Name:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Group Name"
              />
              <label className="col-form-label" htmlFor="recipient-name">
                Add Friends:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Select your Friends"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle5} color="primary">
            Create Group
          </Button>
          <Button color="secondary" onClick={toggle5}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <div
        style={{ display: "flex", paddingBottom: "40px", alignItems: "center" }}
      >
        <Breadcrumb parent="chat" title="Chat App" />
        <div className="customBtnLeft">
          <button
            className="btn btn-square btn-lg btn-primary-gradien"
            type="link"
            onClick={toggle5}
          >
            Create Group
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col call-chat-sidebar col-sm-12">
            <div className="card">
              <div className="card-body chat-body">
                <div className="chat-box">
                  <div className="chat-left-aside">
                    <div className="media">
                      <img
                        src={dynamicImage(currentUser.thumb)}
                        className="rounded-circle user-image"
                        alt=""
                      />
                      <div className="about">
                        <div className="name f-w-600">{currentUser.name}</div>
                        <div className="status">{currentUser.status}</div>
                      </div>
                    </div>
                    <div
                      className="people-list custom-scrollbar"
                      id="people-list"
                    >
                      <div className="search">
                        <form className="theme-form">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="search"
                              defaultValue={searchKeyword}
                              onChange={(e) =>
                                handleSearchKeyword(e.target.value)
                              }
                            />
                            <i className="fa fa-search"></i>
                          </div>
                        </form>
                      </div>
                      <ul className="list">
                        {searchKeyword !== "" &&
                          members
                            .filter((x) => x.id !== currentUser.id)
                            .map((item, i) => {
                              return (
                                <li
                                  className={`clearfix ${
                                    selectedUser.id === item.id ? "active" : ""
                                  }`}
                                  key={i}
                                  onClick={(e) => changeChatClick(e, item.id)}
                                >
                                  <img
                                    src={dynamicImage(item.thumb)}
                                    className="rounded-circle user-image"
                                    alt=""
                                  />
                                  <div className="status-circle offline"></div>
                                  <div className="about">
                                    <div className="name">{item.name}</div>
                                    <div className="status">{item.status}</div>
                                  </div>
                                </li>
                              );
                            })}

                        {searchKeyword === "" ? (
                          chats.map((item, i) => {
                            const Othermember = allMembers.find(
                              (u) =>
                                u.id ===
                                item.users.find((x) => x !== currentUser.id)
                            );
                            return (
                              <li
                                className={`clearfix ${
                                  activeChat === Othermember.id ? "active" : ""
                                }`}
                                key={i}
                                onClick={(e) =>
                                  changeChatClick(e, Othermember.id)
                                }
                              >
                                <img
                                  src={dynamicImage(Othermember.thumb)}
                                  className="rounded-circle user-image"
                                  alt=""
                                />
                                <div
                                  className={`status-circle ${
                                    Othermember.online === true
                                      ? "online"
                                      : "offline"
                                  }`}
                                ></div>
                                <div className="about">
                                  <div className="name">{Othermember.name}</div>
                                  <div className="status">
                                    {Othermember.status}
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        ) : (
                          <img className="img-fluid" src={errorImg} alt="" />
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col call-chat-body">
            <div className="card">
              <div className="card-body p-0">
                <div className="row chat-box">
                  <div className="col pr-0 chat-right-aside">
                    <div className="chat">
                      <div className="chat-header clearfix">
                        <img
                          src={dynamicImage(selectedUser.thumb)}
                          className="rounded-circle"
                          alt=""
                        />
                        <div className="about">
                          <div className="name">{selectedUser.name}</div>
                          <div className="status digits">
                            {selectedUser.online
                              ? "online"
                              : selectedUser.lastSeenDate}
                          </div>
                        </div>
                        <ul className="list-inline float-left float-sm-right chat-menu-icons">
                          <li className="list-inline-item">
                            <a href="#javascript">
                              <i className="icon-search"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#javascript">
                              <i className="icon-clip"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#javascript">
                              <i className="icon-headphone-alt"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#javascript">
                              <i className="icon-video-camera"></i>
                            </a>
                          </li>
                          <li
                            className="list-inline-item toogle-bar"
                            onClick={() => chatMenuToggle()}
                          >
                            <a href="#javascript">
                              <i className="icon-menu"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="chat-history chat-msg-box custom-scrollbar">
                        <ul>
                          {messages.length > 0 ? (
                            messages.map((item, index) => {
                              // const participators = allMembers.find(
                              //   (x) => x.id === item.sender
                              // );
                              const trimmedName = name.trim().toLowerCase();

                              return (
                                <li key={index} className="clearfix">
                                  <div
                                    className={`message my-message ${
                                      item.user !== trimmedName
                                        ? "colored"
                                        : "float-right"
                                    }`}
                                  >
                                    {/* <img
                                      // src={dynamicImage(participators.thumb)}
                                      className={`rounded-circle ${
                                        item.user !== trimmedName
                                          ? "float-right"
                                          : "float-left"
                                      } chat-user-img img-30`}
                                      alt=""
                                    /> */}
                                    <div className="message-data text-right">
                                      <span
                                        className="message-data-time"
                                        style={{ color: "white" }}
                                      >
                                        by{" "}
                                        {item.user !== trimmedName
                                          ? item.user
                                          : "You"}{" "}
                                        {item.time}{" "}
                                        {/* {new Date().toLocaleTimeString()} */}
                                      </span>
                                    </div>
                                    {item.text}
                                  </div>
                                </li>
                              );
                            })
                          ) : (
                            <div>
                              <img
                                className="img-fluid"
                                src={start_conversion}
                                alt="start conversion "
                              />
                            </div>
                          )}
                        </ul>
                      </div>
                      <div className="chat-message clearfix">
                        <div className="row">
                          <div className="col-xl-12 d-flex">
                            <div className="smiley-box bg-primary">
                              <div className="picker">
                                <img
                                  src={require("../../../assets/images/smiley.png")}
                                  className=""
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="input-group text-box">
                              <input
                                type="text"
                                className="form-control input-txt-bx"
                                placeholder="Type a message......"
                                value={message}
                                onKeyPress={(e) => handleMessagePress(e)}
                                onChange={({ target: { value } }) =>
                                  setMessage(value)
                                }
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() => handleMessagePress("send")}
                                >
                                  SEND
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col pl-0 chat-menu ${menuToggle ? "show" : ""}`}
                  >
                    <Nav tabs className="borderb-tab-primary">
                      <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab === "1" ? "active" : ""}
                          onClick={() => setActiveTab("1")}
                        >
                          Group
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab === "2" ? "active" : ""}
                          onClick={() => setActiveTab("2")}
                        >
                          Files
                        </NavLink>
                      </NavItem>
                      {/* <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab === "3" ? "active" : ""}
                          onClick={() => setActiveTab("3")}
                        >
                          PROFILE
                        </NavLink>
                      </NavItem> */}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <div className="people-list">
                          <ul className="list digits custom-scrollbar">
                            <li className="clearfix">
                              <img
                                className="rounded-circle user-image"
                                src={four}
                                alt=""
                              />
                              <div className="about">
                                <div className="name">Friends Group</div>
                                <div className="status">5 May, 4:40 PM</div>
                              </div>
                            </li>
                            <li className="clearfix">
                              <img
                                className="rounded-circle user-image mt-0"
                                src={one}
                                alt=""
                              />
                              <div className="about">
                                <div className="name">
                                  Vincent Porter
                                  <div className="status"> 5 May, 5:30 PM</div>
                                </div>
                              </div>
                            </li>
                            {allMembers
                              .filter((x) => x.id !== currentUser.id)
                              .map((member, i) => (
                                <li
                                  className="clearfix"
                                  key={i}
                                  onClick={(e) => changeChatClick(e, member.id)}
                                >
                                  <img
                                    src={dynamicImage(member.thumb)}
                                    className="rounded-circle user-image"
                                    alt=""
                                  />
                                  <div className="about">
                                    <div className="name">{member.name}</div>
                                    <div className="status">
                                      {member.reply}
                                      {member.status}
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="people-list">
                          <div className="search">
                            <form className="theme-form">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Write Status..."
                                />
                                <i className="fa fa-pencil"></i>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="status">
                          <p className="font-dark">Active</p>
                          <hr />
                          <p>
                            Established fact that a reader will be distracted{" "}
                            <i className="icofont icofont-emo-heart-eyes font-danger f-20"></i>
                            <i className="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5"></i>
                          </p>
                          <hr />
                          <p>
                            Dolore magna aliqua{" "}
                            <i className="icofont icofont-emo-rolling-eyes font-success f-20"></i>
                          </p>
                        </div>
                      </TabPane>
                      <TabPane tabId="3">
                        <div className="user-profile">
                          <div className="image">
                            <div className="avatar text-center">
                              <img alt="" src={two} />
                            </div>
                            <div className="icon-wrapper">
                              <i className="icofont icofont-pencil-alt-5"></i>
                            </div>
                          </div>
                          <div className="user-content text-center">
                            <h5 className="text-uppercase">mark jenco</h5>
                            <div className="social-media">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <a href="#javascript">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#javascript">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#javascript">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#javascript">
                                    <i className="fa fa-instagram"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#javascript">
                                    <i className="fa fa-rss"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <hr />
                            <div className="follow text-center">
                              <div className="row">
                                <div className="col border-right">
                                  <span>Following</span>
                                  <div className="follow-num">236k</div>
                                </div>
                                <div className="col">
                                  <span>Follower</span>
                                  <div className="follow-num">3691k</div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="text-center digits">
                              <p className="mb-0">Mark.jecno23@gmail.com</p>
                              <p className="mb-0">+91 365 - 658 - 1236</p>
                              <p className="mb-0">Fax: 123-4560</p>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading"></div>
  );
};

const mapStateToProps = ({ ChatApp }) => {
  return { ChatApp };
};

export default connect(mapStateToProps, {
  getAllChats,
  changeChat,
  searchMember,
  sendMessage,
  createNewChat,
  replyByUser,
})(Chat);
