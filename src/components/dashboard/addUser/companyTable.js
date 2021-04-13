import React, { Fragment, useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function GridTable() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      setRowData(data);
    };

    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  };

  const filterSwimming = () => {
    gridApi.setFilterModel({
      sport: {
        type: "set",
        values: ["Swimming"],
      },
    });
  };

  const ages16And20 = () => {
    gridApi.setFilterModel({
      age: {
        type: "set",
        values: ["16", "20"],
      },
    });
  };

  const clearFilter = () => {
    gridApi.setFilterModel(null);
  };

  return (
    <Fragment>
      <div style={{ width: "100%", height: "100%" }}>
        <div className="example-wrapper">
          <div>
            <AgGridReact
              defaultColDef={{
                flex: 1,
                minWidth: 100,
                filter: true,
                resizable: true,
              }}
              autoGroupColumnDef={{
                headerName: "Athlete",
                field: "athlete",
                minWidth: 250,
                cellRenderer: "agGroupCellRenderer",
                cellRendererParams: { checkbox: true },
              }}
              rowSelection={"multiple"}
              groupSelectsChildren={true}
              groupSelectsFiltered={true}
              suppressAggFuncInHeader={true}
              suppressRowClickSelection={true}
              onGridReady={onGridReady}
              rowData={rowData}
            >
              <AgGridColumn field="country" rowGroup={true} hide={true} />
              <AgGridColumn field="sport" rowGroup={true} hide={true} />
              <AgGridColumn field="age" minWidth={120} aggFunc="sum" />
              <AgGridColumn field="year" maxWidth={120} />
              <AgGridColumn field="date" minWidth={150} />
              <AgGridColumn field="gold" aggFunc="sum" />
              <AgGridColumn field="silver" aggFunc="sum" />
              <AgGridColumn field="bronze" aggFunc="sum" />
              <AgGridColumn field="total" aggFunc="sum" />
            </AgGridReact>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default GridTable;
