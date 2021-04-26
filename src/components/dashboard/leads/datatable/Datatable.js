import React, { Fragment } from "react";
import ReactTable from "react-table";
import Profile from "../lead-profile/lead-profile";
import { useHistory } from "react-router-dom";
import Checkbox from "react-input-range";
import handle_change from "knob/handle_change";

const Datatable = ({ data }) => {
  const history = useHistory();

  const pagination = true;
  const pageSize = 20;
  const Headers = [
    {
      Header: (row) => {
        return <input type="checkbox" style={{ marginLeft: 0 }} />;
      },
      accessor: "",
      Cell: (row) => {
        return <input type="checkbox" style={{ marginLeft: 3 }} />;
      },
    },

    {
      Header: "First Name",
      accessor: "First_Name",
      headerClassName: "your-class-name",
    },
    {
      Header: "Last Name",
      accessor: "Last_Name",
      headerClassName: "your-class-name",
    },

    {
      Header: "Gender",
      accessor: "Gender",
      headerClassName: "your-class-name",
    },
    {
      Header: "Age",
      accessor: "Age",
      headerClassName: "your-class-name",
    },
    {
      Header: "Marital Status",
      accessor: "Marital_Status",
      headerClassName: "your-class-name",
    },
    {
      Header: "Spouse Name",
      accessor: "Spouse_Name",
      headerClassName: "your-class-name",
    },
    {
      Header: "Yearly Income",
      accessor: "Yearly_Income",
      headerClassName: "your-class-name",
    },
    {
      Header: "City",
      accessor: "City",
      headerClassName: "your-class-name",
    },
    {
      Header: "State",
      accessor: "State",
      headerClassName: "your-class-name",
      Cell: ({ value }) => (
        <span
          className="hoverButtons"
          // onClick={() => props.history.push("/dashboard/editor")}
        >
          <i
            style={{ margin: "0 6px", color: "#4466f2" }}
            className="fa fa-pencil"
          ></i>{" "}
          Edit
        </span>
      ),
    },
  ];

  const handleChange = () => {
    alert("checked");
  };
  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        history.push({
          pathname: "/dashboard/lead-profile",
          search: "?the=search",
          state: { info: rowInfo },
        });
        console.log("It was in this row:", state);
      },
    };
  };

  // const columns = data[0] && Object.keys(data[0]);
  return (
    <Fragment>
      <div className="container-fluid mt-4 responsive-table">
        {/* <table class="table  table-hover mt-5">
                <thead>
                    <tr>{data[0] && columns.map((heading)=> <th>{heading}</th>)} </tr>
                </thead>
                <tbody>
                    {data.map((row) =>(
                        <tr>
                            {columns.map((column)=>(
                                <td onClick={handleClick}>
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table> */}
        <div className="table-responsive">
          <ReactTable
            className="table table-border-vertical"
            data={data}
            columns={Headers}
            defaultPageSize={pageSize}
            showPagination={pagination}
            getTrProps={onRowClick}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Datatable;

// recomendations
