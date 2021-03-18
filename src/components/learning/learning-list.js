import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import LearningFilter from './learning-filter';
import learningDB from '../../data/learning/learningDB';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const LearningList = (props) => {


    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    const clickApply = (course) => {
        const id = course.Id
        props.history.push(`${process.env.PUBLIC_URL}/learning/learning-detail`, { id });
    }

    return (
        <Fragment>
            <Breadcrumb title="Learning List" parent="Learning" />
            <div className="container-fluid">
            <LearningFilter />
                {/* <div className="row">
                    <div className="col-xl-12 card">
                        <div className="card-body">
                        <div className="email-top">
                                            <div className="row">
                                                <div className="col-md-1">
                                                    <h5>Filter :</h5>
                                                </div>
                                                <div className="col text-left">
                                                    <div className="dropdown">
                                                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                            <DropdownToggle className="dropbtn" color="primary" caret> More </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Draft</DropdownItem>
                                                                <DropdownItem >Trash</DropdownItem>
                                                                <DropdownItem >Spam</DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xl-12 xl-60">
                        <div className="row">
                            {learningDB.map((data, i) => {
                                return (
                                    <div className="col-xl-3 xl-50 col-sm-6" key={i}>
                                        <div className="card">
                                            <div className="blog-box blog-grid text-center product-box">
                                                <div className="product-img">
                                                    <img className="img-fluid top-radius-blog" src={data.img} alt="" />
                                                    <div className="product-hover">
                                                        <ul>
                                                            <li><i className="icon-link" onClick={() => clickApply(data)}></i></li>
                                                            <li><i className="icon-import"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-details-main">
                                                    <ul className="blog-social">
                                                        <li className="digits">{data.date}</li>
                                                        <li className="digits">by: {data.writer}</li>
                                                        <li className="digits">{data.hits} Hits</li>
                                                    </ul>
                                                    <hr />
                                                    <h6 className="blog-bottom-details">{data.short_description}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LearningList;