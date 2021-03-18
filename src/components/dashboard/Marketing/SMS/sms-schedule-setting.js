import React from 'react'
import { Fragment } from 'react'
import '../../../../assets/css/custom-form.css'
import {Field, Form, Formik} from "formik";
import CountUp from 'react-countup';
import SmsSendSetting from './sms-send-setting';

const SmsSchedule =()=> {
    return (
        <Fragment>
            <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
                <div className="col-md-7 card">
                    <div className="card-header">
                        <h5>Message Report</h5>
                    </div>
                    <div className="card-body">
                    <section className=" reviewQuotation">

        <div className="row ">
          
            <div className="height-equal package-grid-item card">
            <div className="col-xl-12">
              <div className="card-body recent-notification">
                <div className="media">
                  <h6>Sending User</h6>
                  <div className="media-body"><span>Sednding.user</span>
                  </div>
                </div>
                <div className="media">
                  <h6>Created At</h6>
                  <div className="media-body"><span>Sms.Createddate</span>
                  </div>
                </div>
                <div className="media">
                  <h6>From </h6>
                  <div className="media-body"><span>SMS.from</span>
                  </div>
                </div>
                <div className="media">
                  <h6>To</h6>
                  <div className="media-body">
                    <span>SMS.to</span>
                  </div>
                </div>
                <div className="media">
                  <h6>Direction</h6>
                  <div className="media-body"><span>SMS.direction</span>
                  </div>
                </div>
                <div className="media">
                  <h6>Segments</h6>
                  <div className="media-body">
                    <span>SMS.segments</span>
                  </div>
                </div>
                <div className="media">
                  <h6>Status</h6>
                  <div className="media-body">
                    <span>SMS.Status</span>
                  </div>
                </div>
                <div className="media">
                  <h6>Message</h6>
                  <div className="media-body">
                    <span>SMS.message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          
        </div>
      </section>
                    
                    </div>
                </div>
                
            </div>
            </div>
        </Fragment>
    )
}

export default SmsSchedule
