import { AgGridReact } from "ag-grid-react";
import { DATA1 } from "./data";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import SubDetailsComponent from "./SubDetails";

const DetailsComponent = () => {
  // const { data } = props;
  const columns = [
    {
      headerName: "Packages",
      field: "pack",
      cellRenderer: "agGroupCellRenderer",
      checkboxSelection: true,
      headerCheckboxSelection: true,

    },
    { headerName: "RATE", field: "rate" },
    { headerName: "TOTAL", field: "total" },
  ];
  return (
    <div style={{ padding: "10px 50px", backgroundColor: "white", cursor:"pointer" }}>

      <div style={{ height: 300 }}>
        <AgGridReact
          rowData={DATA1}
          columnDefs={columns}
          defaultColDef={{ flex: 1 }}
          masterDetail={true}
          detailCellRenderer={(props) => <SubDetailsComponent {...props} />}
        />
      </div>
    </div>
  );
};

export default DetailsComponent;
