import type { ReactNode, ReactElement } from "react";

export interface ColumnConfig<T> {
  field: keyof T;
  headerName: string;
  width?: number;
  flex?: number;
  minWidth?: number;
  type?: "string" | "number" | "date" | "boolean";
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, row: T) => ReactNode;
  align?: "left" | "center" | "right";
}

export interface TableAction<T> {
  icon: ReactElement;
  label: string;
  onClick: (row: T) => void;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
}

export interface DataGridTableProps<T> {
  columns: ColumnConfig<T>[];
  rows: T[];
  removeBorder?: boolean;
  loading?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  actions?: TableAction<T>[];
  onRowClick?: (row: T) => void;
}
