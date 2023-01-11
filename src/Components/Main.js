




import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { DATA } from "./data";
import DetailsComponent from "./Details"


function Main() {
  const [grid, setGrid] = useState();
//   const [open , setOpen]=useState(false)
  const rowData = DATA;

  const columns = [
    {
      headerName: "Packages",
      field: "pack",
      cellRenderer: "agGroupCellRenderer",
      checkboxSelection: true ,
      headerCheckboxSelection: true,
    },
    { headerName: "RATE", field: "rate" },
    { headerName: "TOTAL", field: "total" },
   
  ];

  const defColumnDefs = { flex: 1 };

  const onGridReady = (params) => {
    setGrid(params);
  };


  return (
    <div>
      
      <div className="ag-theme-material" style={{ height: 600 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defColumnDefs}
          onGridReady={onGridReady}
          masterDetail={true}
          detailCellRenderer={(props) => <DetailsComponent {...props} />}
          detailRowHeight={300}
          
        />
      </div>

      
    </div>
  );
}

export default Main;
