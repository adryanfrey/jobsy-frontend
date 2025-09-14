import { useLoaderData } from "react-router";
import { Box } from "@mui/material";
import PageHeader from "~/components/page-header";
import DataGridTable from "~/components/data-grid-table";
import { getJobs } from "~/services/jobs/get-jobs";
import { jobColumns } from "~/components/data-grid-table/column-configs/job-columns";
import type { JobRow } from "~/components/data-grid-table/column-configs/job-columns";

export async function loader() {
  const jobs = await getJobs();
  return { jobs };
}

export default function JobSearch() {
  const { jobs } = useLoaderData<typeof loader>();

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
          columns={jobColumns}
          rows={jobs}
          removeBorder={true}
          pageSize={10}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </Box>
    </>
  );
}
