import { useLoaderData } from "react-router";
import { Box } from "@mui/material";
import {
  VisibilityOutlined,
  BookmarkBorderOutlined,
} from "@mui/icons-material";
import PageHeader from "~/components/page-header";
import DataGridTable from "~/components/data-grid-table";
import { getJobs } from "~/services/jobs/get-jobs";
import { searchJobTableColumns } from "~/components/data-grid-table/tables-columns-config/search-job-table-columns";
import type { JobRow } from "~/components/data-grid-table/tables-columns-config/search-job-table-columns";
import type { TableAction } from "~/components/data-grid-table/types";

export async function loader() {
  const jobs = await getJobs();
  return { jobs };
}

export default function JobSearch() {
  const { jobs } = useLoaderData<typeof loader>();

  const handleViewSource = (job: JobRow) => {
    window.open(job.source, "_blank");
  };

  const handleSaveJob = (job: JobRow) => {
    console.log("Save job:", job.title);
  };

  const tableActions: TableAction<JobRow>[] = [
    {
      icon: <VisibilityOutlined />,
      label: "View Source",
      onClick: handleViewSource,
      color: "primary",
    },
    {
      icon: <BookmarkBorderOutlined />,
      label: "Save Job",
      onClick: handleSaveJob,
      color: "secondary",
    },
  ];

  return (
    <>
      <PageHeader
        title="Job Search"
        description="Browse and search available job opportunities according to your preferences."
      />
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DataGridTable<JobRow>
          columns={searchJobTableColumns}
          rows={jobs}
          removeBorder={true}
          pageSize={10}
          pageSizeOptions={[5, 10, 25, 50]}
          actions={tableActions}
        />
      </Box>
    </>
  );
}
