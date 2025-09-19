import React from "react";
import { Chip } from "@mui/material";
import type { ColumnConfig } from "../types";

export interface SavedJobRow {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  postedAt: Date;
  workplaceType: string;
  technologies: string[];
  source: string;
  status: "to apply" | "application sent" | "waiting for response" | "rejected" | "offer received";
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
    minWidth: 150,
    type: "string",
    sortable: true,
    filterable: true,
    align: "center",
    render: (value: string) => {
      const getStatusChipProps = (status: string) => {
        switch (status) {
          case "to apply":
            return { color: "info" as const, label: "To Apply" };
          case "application sent":
            return { color: "warning" as const, label: "Application Sent" };
          case "waiting for response":
            return { color: "secondary" as const, label: "Waiting for Response" };
          case "rejected":
            return { color: "error" as const, label: "Rejected" };
          case "offer received":
            return { color: "success" as const, label: "Offer Received" };
          default:
            return { color: "default" as const, label: value };
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
    field: "workplaceType",
    headerName: "Workplace Type",
    flex: 0.8,
    minWidth: 130,
    type: "string",
    sortable: true,
    filterable: true,
    align: "center",
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
    render: (value: string[]) => {
      return value.join(", ");
    },
  },
];
