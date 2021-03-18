import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Grid, List } from "react-feather";
import { useHistory } from "react-router-dom";

import Photo from "../../../../assets/images/user/3.png";

const AllTemplates = (props) => {
  const [gridView, setgridView] = useState(true);
  const [modal, setModal] = useState();

  const toggle = () => {
    setModal(!modal);
  };
  const Gridbookmark = () => {
    setgridView(true);
  };

  const Listbookmark = () => {
    setgridView(false);
  };
  const history = useHistory();

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Create a Page</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label
                style={{ paddingBottom: "14px" }}
                className="col-form-label"
                htmlFor="recipient-name"
              >
                Internal Page Name
              </label>
              <br />
              <input className="form-control" type="text" />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => history.push("/dashboard/editor")}
            color="primary"
          >
            Create Page
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Col sn="12" xl="12">
        <Card></Card>
      </Col>
      <Col xl="12" md="12" className="box-col-12">
        <div className="email-right-aside bookmark-tabcontent">
          <Card className="email-body radius-left">
            <div className="pl-0">
              <Card className="mb-0">
                <CardHeader
                  style={{ justifyContent: "space-between" }}
                  className="d-flex"
                >
                  <div className="dropdown-basic">
                    {" "}
                    <Dropdown className="dropdown-vasic">
                      <Button color="primary" className="dropbtn">
                        Most Used
                        <span>
                          <i className="icofont icofont-arrow-down"></i>
                        </span>
                      </Button>
                      <DropdownMenu className="dropdown-content">
                        <DropdownItem href="#">Recently Viewed</DropdownItem>
                        <DropdownItem href="#">Alphabetical</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  <ul
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <li style={{ paddingRight: "15px" }}>
                      <a className="grid-bookmark-view" href="#javascript">
                        <Grid onClick={Gridbookmark} />
                      </a>
                    </li>
                    <li>
                      <a className="list-layout-view" href="#javascript">
                        <List onClick={Listbookmark} />
                      </a>
                    </li>
                  </ul>
                </CardHeader>
                <CardBody>
                  <h6>All Templates</h6>
                  <div
                    className={`details-bookmark text-center ${
                      gridView ? "" : "list-bookmark"
                    }`}
                  >
                    <Row id="bookmarkData">
                      <Col xl="3 xl-50" md="4" key={2}>
                        <Card
                          onClick={() => setModal(!modal)}
                          className="card-with-border bookmark-card o-hidden template"
                        >
                          <div className="details-website">
                            <img className="img-fluid" src={Photo} alt="" />

                            <div className="desciption-data">
                              <div className="title-bookmark">
                                <h6 className="title_0">
                                  Basic- Event Registration
                                </h6>
                                <p className="weburl_0">Used on 2 Pages</p>

                                <div className="content-general">
                                  <p className="desc_0">Data</p>
                                  <span className="collection_0">
                                    colection
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                      <Col xl="3 xl-50" md="4" key={2}>
                        <Card
                          onClick={() => setModal(!modal)}
                          className="card-with-border bookmark-card o-hidden template"
                        >
                          <div className="details-website">
                            <img className="img-fluid" src={Photo} alt="" />

                            <div className="desciption-data">
                              <div className="title-bookmark">
                                <h6 className="title_0">
                                  Basic- Event Registration
                                </h6>
                                <p className="weburl_0">Used on 2 Pages</p>

                                <div className="content-general">
                                  <p className="desc_0">Data</p>
                                  <span className="collection_0">
                                    colection
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>{" "}
                      <Col xl="3 xl-50" md="4" key={2}>
                        <Card
                          onClick={() => setModal(!modal)}
                          className="card-with-border bookmark-card o-hidden template"
                        >
                          <div className="details-website">
                            <img className="img-fluid" src={Photo} alt="" />

                            <div className="desciption-data">
                              <div className="title-bookmark">
                                <h6 className="title_0">
                                  Basic- Event Registration
                                </h6>
                                <p className="weburl_0">Used on 2 Pages</p>

                                <div className="content-general">
                                  <p className="desc_0">Data</p>
                                  <span className="collection_0">
                                    colection
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
                {/* </div> */}
              </Card>
            </div>
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default AllTemplates;
