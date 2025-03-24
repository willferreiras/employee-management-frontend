import { Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { IListCompanyFilterEntity } from "./models/list-company-filter.entity";

export const columnPadding = 32;
export const ColumnsCommon: GridColDef = {
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
  showSearchButton?: boolean;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  showFilterButton?: boolean;
  filter?: IListCompanyFilterEntity;
  setFilter?: React.Dispatch<React.SetStateAction<IListCompanyFilterEntity>>;
  handleOpenFilterModal?: () => void;
  selectedItemActions?: {
    title: string;
    action: (selectedItems: number[]) => void;
    disabled?: boolean;
  }[];
  selectedItems: any[];
  rightActions?: React.ReactNode;
  leftActions?: React.ReactNode;
};

export const TableHeader = ({
  selectedItemActions = [],
  selectedItems,
  rightActions,
  leftActions,
}: TTableProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      width="100%"
      justifyContent="space-between"
      gap="16px"
      paddingTop="8px"
      height="auto"
      direction="row"
    >
      {leftActions}

      {!leftActions && (
        <Stack>
          <Stack direction="row" alignItems="flex-end">
            {selectedItemActions.length > 0 && (
              <Box>
                <Button
                  variant="outlined"
                  disabled={selectedItems.length <= 0}
                  onClick={handleClick}
                >
                  Ações nos selecionados
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    boxShadow: "0px 4px 4px 0px #00000040",
                    marginTop: "8px",
                  }}
                >
                  {selectedItemActions.map((selectedItem, index) => {
                    return (
                      <MenuItem
                        key={index}
                        sx={{
                          width: "auto",
                          minWidth: "197px",
                        }}
                        onClick={() => {
                          handleClose();
                           
                          selectedItem.action &&
                            selectedItem.action(
                              selectedItems.map(item => item.id),
                            );
                        }}
                      >
                        {selectedItem.title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>
            )}
          </Stack>
        </Stack>
      )}

      {rightActions}
    </Stack>
  );
};
