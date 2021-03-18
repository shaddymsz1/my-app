import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../../common/breadcrumb";
import FilterTable from "./lead-filter";
// import FilterTable from "./datatable/lead-filter";

const LeadsChannel = () => {
  const [data, setData] = useState([]); // will fetch data from api and

  // useEffect(() => {
  //   fetch("https://devmentor.live/api/examples/contacts?api_key=b7c58b") // input url
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8080/leadschannel").then((res) =>
      res.json().then((data) => setData(data.leadschannel))
    );
  }, []);
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Leads" />
      <div className="container-fluid  ">
        <FilterTable data={data} />
      </div>
    </Fragment>
  );
};

export default LeadsChannel;
