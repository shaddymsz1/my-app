import React, { Fragment, useState, useEffect, useCallback } from "react";
import Breadcrumb from "../../common/breadcrumb";
import FilterTable from "./datatable/lead-filter";
import { useHistory } from "react-router-dom";
import AccordionTwo from "../../base/accordionComponent/accordianTwo";
import axios from "axios";
import { object } from "yup";
import Loader from "../../common/loader";
const Leads = () => {
  const [data, setData] = useState([]); // will fetch data from api and
  const history = useHistory();
  function handleOnClick() {
    history.push(`${process.env.PUBLIC_URL}/dashboard/create-lead`);
  }

  const email = localStorage.getItem("email");

  const [permission, setPermission] = useState({});
  const url = `https://fathomless-plateau-00864.herokuapp.com/permission/getPermission/${email}`;
  const leadUrl = "https://fathomless-plateau-00864.herokuapp.com/crm/leads";

  useEffect(() => {
    const fetchLeads = async () => {
      const result = await axios.get(leadUrl);
      const leadsData = result.data.leads;
      setData(leadsData);
    };
    const fetchPermission = async () => {
      const result = await axios.get(url);

      const [permissionsFetched] = result.data.permissions;

      setPermission(permissionsFetched);
    };
    fetchLeads();
    fetchPermission();
  }, []);

  if (permission && Object.keys(permission).length === 0) {
    return <Loader />;
  }
  return (
    <Fragment>
      <div
        style={{ display: "flex", paddingBottom: "40px", alignItems: "center" }}
      >
        <Breadcrumb parent="Dashboard" title="Leads" />

        <div>
          <button
            style={{ width: "181px", marginRight: "16px" }}
            className="btn btn-block btn-secondary btn-outline-secondary  "
            class="btn pull-right btn-block btn-primary text-center"
            type="button"
            onClick={handleOnClick}
          >
            Create Lead
          </button>
        </div>
      </div>

      <div className="container-fluid  ">
        <FilterTable data={data} />
      </div>
    </Fragment>
  );
};

export default Leads;
