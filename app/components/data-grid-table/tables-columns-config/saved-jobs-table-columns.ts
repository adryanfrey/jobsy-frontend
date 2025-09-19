import React from "react";
import { Chip } from "@mui/material";
import type { ColumnConfig } from "../types";

export type JobStatus =
  | "to apply"
  | "application sent"
  | "in progress"
  | "rejected"
  | "offer received";

export interface SavedJobRow {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  postedAt: Date;
  appliedAt: Date | null;
  workplaceType: string;
  technologies: string[];
  source: string;
  status: JobStatus;
}

export const savedJobsTableColumns: ColumnConfig<SavedJobRow>[] = [
  {
    field: "title",
    headerName: "Job Title",
    flex: 2,
    minWidth: 200,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1.2,
    minWidth: 170,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
    render: (value: JobStatus) => {
      const getStatusChipProps = (status: JobStatus) => {
        switch (status) {
          case "to apply":
            return {
              sx: { color: "#fff", backgroundColor: "#9d9e9d" },
              label: "To Apply",
            };
          case "application sent":
            return {
              sx: { color: "#fff", backgroundColor: "#2196F3" },
              label: "Application Sent",
            };
          case "in progress":
            return {
              sx: { color: "#fff", backgroundColor: "#ff9800" },
              label: "In Progress",
            };
          case "rejected":
            return {
              sx: { color: "#fff", backgroundColor: "#ef5350" },
              label: "Rejected",
            };
          case "offer received":
            return {
              sx: { color: "#fff", backgroundColor: "#4CAF50" },
              label: "Offer Received",
            };
        }
      };
      const chipProps = getStatusChipProps(value);
      return React.createElement(Chip, { size: "small", ...chipProps });
    },
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    minWidth: 100,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
    minWidth: 140,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
  },
  {
    field: "postedAt",
    headerName: "Posted At",
    flex: 1,
    minWidth: 140,
    type: "date",
    sortable: true,
    filterable: true,
    align: "center",
  },
  {
    field: "appliedAt",
    headerName: "Applied At",
    flex: 1,
    minWidth: 140,
    type: "date",
    sortable: true,
    filterable: true,
    align: "center",
    render: (value: Date | null) => {
      return value ? value.toLocaleDateString() : "N/A";
    },
  },
  {
    field: "workplaceType",
    headerName: "Workplace Type",
    flex: 0.8,
    minWidth: 130,
    type: "string",
    sortable: true,
    filterable: true,
    align: "center",
    defaultHidden: true,
  },
  {
    field: "technologies",
    headerName: "Technologies/Tools",
    flex: 3,
    minWidth: 250,
    type: "string",
    sortable: false,
    filterable: true,
    align: "left",
    defaultHidden: true,
    render: (value: string[]) => {
      return value.join(", ");
    },
  },
];
