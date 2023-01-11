import { AgGridReact } from "ag-grid-react";
import { DATA2 } from "./data";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

const SubDetailsComponent = () => {
  // const { data } = props;
  const columns = [
    {
      headerName: "Packages",
      field: "pack",
    //   cellRenderer: "agGroupCellRenderer",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    // { headerName: "RATE", field: "rate" },
    { headerName: "TOTAL", field: "total" },
  ];
  return (
    <div style={{ padding: "10px 50px", backgroundColor: "white", cursor:"pointer" }}>

      <div style={{ height: 300 }}>
        <AgGridReact
          rowData={DATA2}
          columnDefs={columns}
          defaultColDef={{ flex: 1 }}
          
        />
      </div>
    </div>
  );
};

export default SubDetailsComponent;
