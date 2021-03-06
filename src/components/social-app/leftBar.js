import React, { Fragment ,useState} from 'react';
import { Collapse, UncontrolledTooltip } from 'reactstrap';
import one from "../../assets/images/user/1.jpg";
import three from "../../assets/images/user/3.jpg";
import five from "../../assets/images/user/5.jpg";
import two from "../../assets/images/user/2.png";
import eight from "../../assets/images/user/8.jpg";
import eleven from "../../assets/images/user/11.png";
import timeline3 from "../../assets/images/social-app/timeline-3.png";
import ten from "../../assets/images/user/10.jpg";
import six from "../../assets/images/user/6.jpg";
import fourteen from "../../assets/images/user/14.png";
import four from "../../assets/images/user/4.jpg";


const LeftBar = () => {
    const [isProfile, setisProfile] = useState(true);
    const [isMutual, setisMutual] = useState(true);
    const [isActivity, setisActivity] = useState(true);
    return (
        <Fragment>
                        <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisProfile(!isProfile)}
                                                data-toggle="collapse" data-target="#collapseicon5" aria-expanded={isProfile} aria-controls="collapseicon5">My Profile</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isProfile}>
                                        <div className="card-body socialprofile filter-cards-view">
                                            <div className="media"><img className="img-50 img-fluid m-r-20 rounded-circle" src={one} alt="" />
                                                <div className="media-body">
                                                    <h6 className="font-primary f-w-600">My Page</h6><span className="d-block"><span><i className="fa fa-comments-o"> </i><span className="px-2">Messages<span className="badge badge-pill badge-light">9</span></span></span></span><span className="d-block"><span><i className="fa fa-bell-o"></i><span className="px-2">Notification<span className="badge badge-pill badge-light">9</span></span></span></span>
                                                </div>
                                            </div>
                                            <div className="social-btngroup d-flex">
                                                <button className="btn btn-primary text-center" type="button">Likes</button>
                                                <button className="btn btn-light text-center" type="button">View</button>
                                            </div>
                                            <div className="likes-profile text-center">
                                                <h5><span><i className="fa fa-heart font-danger"></i> 884</span></h5>
                                            </div>
                                            <div className="text-center">35 New Likes This Week</div>
                                            <div className="customers text-center social-group">
                                                <ul>
                                                    <li className="d-inline-block">
                                                        <img className="img-40 rounded-circle" src={three} alt="ThirdImg" id="UncontrolledTooltipExample"/>
                                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                                                            Johny Waston
                                                        </UncontrolledTooltip>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <img className="img-40 rounded-circle" src={five} alt="FifthImg" id="UncontrolledTooltipExample1" />
                                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample1">
                                                            Andew Jon
                                                        </UncontrolledTooltip>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <img className="img-40 rounded-circle" src={one} alt="FirstImg" id="UncontrolledTooltipExample2" />
                                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample2">
                                                            Comeren Diaz
                                                        </UncontrolledTooltip>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <img className="img-40 rounded-circle" src={two} alt="secondImg" id="UncontrolledTooltipExample3" />
                                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample3">
                                                            Bucky Barnes
                                                        </UncontrolledTooltip>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <img className="img-40 rounded-circle" src={eight} alt="eightImg" id="UncontrolledTooltipExample4" />
                                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample4">
                                                            Jason Borne
                                                        </UncontrolledTooltip>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <img className="img-40 rounded-circle" src={eleven} alt="elevenImg" id="UncontrolledTooltipExample5" />
                                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample5">
                                                            Comeren Diaz
                                                        </UncontrolledTooltip>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card"><img className="img-fluid" alt="" src={timeline3} /></div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisMutual(!isMutual)}
                                                data-toggle="collapse" data-target="#collapseicon6" aria-expanded={isMutual} aria-controls="collapseicon6">Mutual Friends</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isMutual}>
                                        <div className="card-body social-status filter-cards-view">
                                            <form>
                                                <div className="form-group m-0">
                                                    <input className="form-control" type="search" placeholder="Search Contacts.." />
                                                </div>
                                            </form>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={two} alt="twoImg" />
                                                <div className="social-status social-online"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Bucky Barnes</span><span className="d-block">winter@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={ten} alt="TenImg" />
                                                <div className="social-status social-busy"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Sarah Loren</span><span className="d-block">barnes@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={six} alt="sixImg" />
                                                <div className="social-status social-offline"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Jason Borne</span><span className="d-block">jasonb@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={eight} alt="eightImg" />
                                                <div className="social-status social-offline"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Comeren Diaz</span><span className="d-block">comere@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={fourteen} alt="fourteenImg" />
                                                <div className="social-status social-online"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Andew Jon</span><span className="d-block">andrewj@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={four} alt="fourImg" />
                                                <div className="social-status social-busy"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Johny Waston</span><span className="d-block">johny@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={three} alt="threeImg" />
                                                <div className="social-status social-offline"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Johny William</span><span className="d-block">johnyw@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={two} alt="twoImg" />
                                                <div className="social-status social-online"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Bucky Barnes</span><span className="d-block">winter@gmail.com</span></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 rounded-circle m-r-15" src={ten} alt="" />
                                                <div className="social-status social-busy"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Sarah Loren</span><span className="d-block">barnes@gmail.com</span></div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={six} alt="sixImg" />
                                                <div className="social-status social-offline"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Jason Borne</span><span className="d-block">jasonb@gmail.com</span></div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={eight} alt="eightImg" />
                                                <div className="social-status social-offline"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Comeren Diaz</span><span className="d-block">comere@gmail.com</span></div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={fourteen} alt="fourteenImg" />
                                                <div className="social-status social-online"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Andew Jon</span><span className="d-block">andrewj@gmail.com</span></div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={four} alt="fourImg" />
                                                <div className="social-status social-busy"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Johny Waston</span><span className="d-block">johny@gmail.com</span></div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={three} alt="threeImg" />
                                                <div className="social-status social-offline"></div>
                                                <div className="media-body"><span className="f-w-600 d-block">Johny William</span><span className="d-block">johnyw@gmail.com</span></div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisActivity(!isActivity)}
                                                data-toggle="collapse" data-target="#collapseicon14" aria-expanded={isActivity} aria-controls="collapseicon14">Activity Feed</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isActivity}>
                                        <div className="card-body social-status filter-cards-view">
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={ten} alt="tenImg" />
                                                <div className="media-body"><span className="f-w-600 d-block">Andew Jon</span>
                                                    <p>Commented on Shaun Park's <a href="#javascript">Photo</a></p><span className="light-span">20 min Ago</span>
                                                </div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={three} alt="threeImg" />
                                                <div className="media-body"><span className="f-w-600 d-block">Johny Waston</span>
                                                    <p>Commented on Shaun Park's <a href="#javascript">Photo</a></p><span className="light-span">1 hour Ago</span>
                                                </div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={five} alt="fiveImg" />
                                                <div className="media-body"><span className="f-w-600 d-block">Comeren Diaz</span>
                                                    <p>Commented on Shaun Park's <a href="#javascript">Photo</a></p><span className="light-span">1 days Ago</span>
                                                </div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={four} alt="fourImg" />
                                                <div className="media-body"><span className="f-w-600 d-block">Sarah Loren</span>
                                                    <p>Commented on Shaun Park's <a href="#javascript">Photo</a></p><span className="light-span">2 days Ago</span>
                                                </div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={three} alt="threeImg" />
                                                <div className="media-body"><span className="f-w-600 d-block">Johny Waston</span>
                                                    <p>Commented on Shaun Park's <a href="#javascript">Photo</a></p><span className="light-span">5 days Ago</span>
                                                </div>
                                            </div>
                                            <div className="media"><img className="img-50 rounded-circle m-r-15" src={five} alt="fiveImg" />
                                                <div className="media-body"><span className="f-w-600 d-block">Comeren Diaz</span>
                                                    <p>Commented on Shaun Park's <a href="#javascript">Photo</a></p><span className="light-span">6 days Ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
        </Fragment>
    );
};

export default LeftBar;