import type { ColumnConfig } from "../types";

export interface JobRow {
  id: number;
  title: string;
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
    width: 210,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
  },
  {
    field: "company",
    headerName: "Company",
    width: 150,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
  },
  {
    field: "location",
    headerName: "Location",
    width: 180,
    type: "string",
    sortable: true,
    filterable: true,
    align: "left",
  },
  {
    field: "postedAt",
    headerName: "Posted At",
    width: 120,
    type: "date",
    sortable: true,
    filterable: true,
    align: "center",
  },
  {
    field: "workplaceType",
    headerName: "Workplace Type",
    width: 140,
    type: "string",
    sortable: true,
    filterable: true,
    align: "center",
  },
  {
    field: "technologies",
    headerName: "Technologies/Tools",
    width: 350,
    type: "string",
    sortable: false,
    filterable: true,
    align: "left",
    render: (value: string[]) => {
      return value.join(", ");
    },
  },
];
