import React, { Component, Fragment } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import Meeting from "./modals/meeting-modal";
import Task from "./modals/task-modal";
import Call from "./modals/call-modal";

class OpenActivities extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpen: false,
      showcallHide: false,
      showmeetingHide: false,
      showtaskHide: false,
    };
    this.dropdownList = [
      "My Calls",
      "My Cancelled Calls",
      "My Incoming Calls",
      "My Meetings",
      "My Missed Calls",
      "My Open Activities",
      "My Open Tasks",
      "My Outgoing Calls",
      "My Overdue Calls",
      "My Scheduled Calls",
      "My Todays Scheduled Calls",
      "My Scheduled+Overdue Calls for Today",
      "My Unattended Calls",
      "Next 7 Days + Overdue",
      "Open Activities",
      "Open Meetings",
      "Open Tasks",
      "Outgoing Calls",
      "Overdue Calls",
      "Overdue Tasks",
      "Past Meetings",
      "Scheduled Calls",
      "This Weeks Meetings",
      "Today + Overdue Tasks",
      "Todays Meetings",
      "Todays Scheduled Calls",
      "Todays Scheduled+Overdue Calls",
      "Todays Tasks",
      "Tomorrows Tasks",
    ];
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  handleCallModalShowHide() {
    this.setState({ showcallHide: !this.state.showcallHide });
  }
  handleMeetingModalShowHide() {
    this.setState({ showmeetingHide: !this.state.showmeetingHide });
  }
  handleTaskModalShowHide() {
    this.setState({ showtaskHide: !this.state.showtaskHide });
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-12">
              <div className="card">
                <div className=" row card-body dropdown-basic">
                  <div className="col dropdown overflow-auto">
                    <Dropdown
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle caret color="primary">
                        All Activities
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.dropdownList.map((value) => (
                          <DropdownItem>
                            <a>{value}</a>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="col">
                    <button
                      className=" btn mr-3 btn-primary"
                      type="button"
                      onClick={() => this.handleCallModalShowHide()}
                    >
                      + Call
                    </button>
                    <Modal show={this.state.showcallHide}>
                      <Modal.Header
                        closeButton
                        onClick={() => this.handleCallModalShowHide()}
                      >
                        <Modal.Title> Add Call</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Call />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant=""
                          onClick={() => this.handleCallModalShowHide()}
                        >
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => this.handleCallModalShowHide()}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button
                      className="btn mr-3 btn-primary"
                      type="button"
                      onClick={() => this.handleMeetingModalShowHide()}
                    >
                      + Meeting
                    </button>
                    <Modal show={this.state.showmeetingHide}>
                      <Modal.Header
                        closeButton
                        onClick={() => this.handleMeetingModalShowHide()}
                      >
                        <Modal.Title>Add Meeting</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Meeting />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant=""
                          onClick={() => this.handleMeetingModalShowHide()}
                        >
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => this.handleMeetingModalShowHide()}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button
                      className="btn mr-3 btn-primary"
                      type="button"
                      onClick={() => this.handleTaskModalShowHide()}
                    >
                      + Task
                    </button>
                    <Modal show={this.state.showtaskHide}>
                      <Modal.Header
                        closeButton
                        onClick={() => this.handleTaskModalShowHide()}
                      >
                        <Modal.Title>Add Task</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Task />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant=""
                          onClick={() => this.handleTaskModalShowHide()}
                        >
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => this.handleTaskModalShowHide()}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OpenActivities;
