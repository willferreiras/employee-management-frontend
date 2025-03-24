import { Stack } from "@mui/material";
import {
  DataGrid,
  GridColDef as IGridColDef,
  GridRowId,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import React, { useRef, useState } from "react";
import { TableHeader } from "./header.component";

export interface IListCompanyFilterDTO {
  planIds?: string[];
  status?: string[];
  validateAtStartPeriod?: string;
  validateAtEndPeriod?: string;
}

export const columnPadding = 32;
export const ColumnsCommon: IGridColDef = {
  headerAlign: "left",
  align: "left",
  headerName: "Placeholder",
  flex: 1,
  headerClassName: "super-app-theme--header",
  cellClassName: "super-app-theme--normal-column",
  disableColumnMenu: true,
  disableReorder: true,
  disableExport: true,
  filterable: false,
  resizable: false,
  sortable: false,
  field: "Placeholder",
};

export type TTableProps = {
  rows: any;
  columns: IGridColDef[];
  loading: boolean;
  totalRegisters: number;
  allowSelectAll: boolean;
  showSearchButton?: boolean;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  showFilterButton?: boolean;
  filter?: IListCompanyFilterDTO;
  setFilter?: React.Dispatch<React.SetStateAction<IListCompanyFilterDTO>>;
  handleOpenFilterModal?: () => void;
  selectedItemActions?: {
    title: string;
    action: (selectedItems: number[]) => void;
    disabled?: boolean;
  }[];
  setSelectedGridIds?: React.Dispatch<React.SetStateAction<string[]>>;
  rightActions?: React.ReactNode;
  leftActions?: React.ReactNode;
  checkboxSelection?: boolean;
  tableStyle?: object;
  tableContainerStyle?: object;
};

export const Table = ({
  rows,
  columns,
  loading,
  selectedItemActions = [],
  filter,
  searchQuery,
  setFilter,
  setSearchQuery,
  setSelectedGridIds,
  showFilterButton = false,
  showSearchButton = false,
  handleOpenFilterModal,
  rightActions,
  leftActions,
  checkboxSelection = true,
  tableStyle = {},
  tableContainerStyle = {},
}: TTableProps) => {
  const tableRef = useRef<HTMLInputElement>(null);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
    const selectedRows = newSelection.map(id =>
      rows.find((row: any) => row.id === id),
    );
    setSelectedItems(selectedRows);
     
    setSelectedGridIds &&
      setSelectedGridIds(selectedRows?.map(row => row.id) ?? []);
  };

  return (
    <Stack
      height="auto"
      maxHeight="calc(100% - 56px - 32px)"
      minHeight="280px"
      width="100%"
      gap="32px"
      sx={tableContainerStyle}
    >
      <TableHeader
        selectedItems={selectedItems}
        filter={filter}
        handleOpenFilterModal={handleOpenFilterModal}
        searchQuery={searchQuery}
        selectedItemActions={selectedItemActions}
        setFilter={setFilter}
        setSearchQuery={setSearchQuery}
        showFilterButton={showFilterButton}
        showSearchButton={showSearchButton}
        rightActions={rightActions}
        leftActions={leftActions}
      />

      <DataGrid
        ref={tableRef}
        sx={{
          height: "auto",
          width: "100%",
          overflow: "auto",
          maxHeight: "calc(100% - 56px - 32px)",
          backgroundColor: "#ffffff",
          border: "none !important",
          borderTopRightRadius: "16px",
          borderTopLeftRadius: "16px",
          "& .MuiCheckbox-root": {
            color: "#4865CC !important",
          },
          "& .MuiDataGrid-columnHeaderCheckbox .MuiCheckbox-root": {
            color: "#ffffff !important",
          },
          "& .super-app-theme--header": {
            fontFamily: "Noto Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            height: 56,

            textAlign: "center",
            color: "#ffffff",
            gap: "4px",
            wordBreak: "break-word",
            border: "none !important",
            borderBottom: "none !important",
            borderRadius: "0px",

            borderTop: "none",
            ":first-child": {
              borderLeft: "none",
            },
            ":last-child": {
              borderTopRightRadius: "16px ",
            },
            backgroundColor: "#5ED1A2",
          },
          "& .MuiDataGrid-columnHeaderCheckbox": {
            fontFamily: "Noto Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 16,
            height: 56,

            textAlign: "center",
            color: "#ffffff",
            gap: "4px",
            wordBreak: "break-word",
            borderRadius: "0px",
            border: "none",
            borderBottom: "1px solid #DFEAED",
            ":first-child": {
              borderLeft: "none",
            },
            ":last-child": {
              borderRight: "none",
              borderTopRightRadius: "16px",
            },
            backgroundColor: "#5ED1A2",
            borderTopLeftRadius: "16px",
            borderColor: "#FFF",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .super-app-theme--normal-column .MuiDataGrid-cellCheckbox": {
            fontFamily: "Noto Sans",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 14,
            heigth: 56,
            borderTopLeftRadius: 10,
            textAlign: "left",
            color: "#383838",
            backgroundColor: "#ffffff !important",
            borderRadius: "0px",
            border: "none",
            borderBottom: "1px solid #DFEAED",
            ":first-child": {
              borderLeft: "none",
            },
            ":last-child": {
              borderRight: "none",
            },
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "#ffffff !important",
          },
          "& .MuiDataGrid-columnHeader--last": {
            borderTopRightRadius: "16px",
          },
          ...tableStyle,
        }}
        rows={rows ?? []}
        columns={columns}
        loading={loading}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleSelectionChange}
        rowSelectionModel={selectedItems.map(item => item.id) as GridRowId[]}
        hideFooterPagination
        hideFooter
      />
    </Stack>
  );
};
