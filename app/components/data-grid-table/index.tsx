import { useMemo } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box, Tooltip } from "@mui/material";
import type { DataGridTableProps, ColumnConfig, TableAction } from "./types";

export default function DataGridTable<T extends { id: string | number }>({
  columns,
  rows,
  removeBorder = false,
  pageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  actions = [],
  onRowClick,
}: DataGridTableProps<T>) {
  const gridColumns: GridColDef[] = useMemo(() => {
    return getGridColumns(columns, actions);
  }, [columns, actions]);

  const handleRowClick = (params: GridRowParams) => {
    if (onRowClick) {
      onRowClick(params.row as T);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DataGrid
        rows={rows}
        columns={gridColumns}
        pageSizeOptions={pageSizeOptions}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize,
            },
          },
          columns: {
            columnVisibilityModel: getInitialColumnVisibility(columns),
          },
        }}
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
        disableColumnMenu={false}
        sx={{
          flex: 1,
          border: removeBorder ? 0 : "1px solid rgba(224, 224, 224, 1)",
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
        }}
      />
    </Box>
  );
}

function getInitialColumnVisibility<T>(columns: ColumnConfig<T>[]) {
  const visibilityModel: Record<string, boolean> = {};
  columns.forEach((col) => {
    if (col.defaultHidden) {
      visibilityModel[col.field as string] = false;
    }
  });
  return visibilityModel;
}

function getGridColumns<T>(
  columns: ColumnConfig<T>[],
  actions: TableAction<T>[]
) {
  let baseColumns: GridColDef[] = [];

  if (actions.length > 0) {
    baseColumns.push({
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: actions.length * 50,
      getActions: (params: GridRowParams) => {
        return actions.map((action: TableAction<T>, index: number) => (
          <GridActionsCellItem
            key={index}
            icon={<Tooltip title={action.label}>{action.icon}</Tooltip>}
            label={action.label}
            onClick={() => action.onClick(params.row as T)}
            showInMenu={false}
          />
        ));
      },
    });
  }
  columns.forEach((col: ColumnConfig<T>) =>
    baseColumns.push({
      field: col.field as string,
      headerName: col.headerName,
      flex: col.flex,
      minWidth: col.minWidth || 100,
      sortable: col.sortable !== false,
      filterable: col.filterable !== false,
      type: col.type || "string",
      align: col.align || "left",
      headerAlign: col.align || "left",
      renderCell: col.render
        ? (params) => {
            if (col.render) {
              return col.render(params.value, params.row);
            }
            return params.value;
          }
        : undefined,
    })
  );
  return baseColumns;
}
