import type { ColumnConfig } from "../types";

export interface JobRow {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  postedAt: Date;
  workplaceType: string;
  technologies: string[];
  source: string;
}

export const searchJobTableColumns: ColumnConfig<JobRow>[] = [
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
    flex: 0.8,
    minWidth: 110,
    type: "date",
    sortable: true,
    filterable: true,
    align: "center",
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
