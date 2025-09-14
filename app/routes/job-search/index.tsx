import { useState } from "react";
import { useLoaderData } from "react-router";
import { Box } from "@mui/material";
import {
  BookmarkBorderOutlined,
  Link as LinkIcon,
  InfoOutline,
} from "@mui/icons-material";
import PageHeader from "~/components/page-header";
import DataGridTable from "~/components/data-grid-table";
import Modal from "~/components/modal";
import { getJobs } from "~/services/jobs/get-jobs";
import { searchJobTableColumns } from "~/components/data-grid-table/tables-columns-config/search-job-table-columns";
import type { JobRow } from "~/components/data-grid-table/tables-columns-config/search-job-table-columns";
import type { TableAction } from "~/components/data-grid-table/types";
import type { ModalItem } from "~/components/modal";

export async function loader() {
  const jobs = await getJobs();
  return { jobs };
}

export default function JobSearch() {
  const { jobs } = useLoaderData<typeof loader>();
  const [selectedJobData, setSelectedJobData] = useState<ModalItem[] | null>(
    null
  );

  const handleGoToSource = (job: JobRow) => {
    window.open(job.source, "_blank");
  };

  const handleSaveJob = (job: JobRow) => {
    console.log("Save job:", job.title);
  };

  const handleViewDetails = (job: JobRow) => {
    const modalData: ModalItem[] = [
      { title: "Description", description: job.description },
      { title: "Job Title", description: job.title },
      { title: "Company", description: job.company },
      { title: "Location", description: job.location },
      { title: "Workplace Type", description: job.workplaceType },
      { title: "Posted At", description: job.postedAt.toLocaleDateString() },
      { title: "Technologies/Tools", description: job.technologies.join(", ") },
    ];
    setSelectedJobData(modalData);
  };

  const tableActions: TableAction<JobRow>[] = [
    {
      icon: <BookmarkBorderOutlined />,
      label: "Save Job",
      onClick: handleSaveJob,
      color: "secondary",
    },
    {
      icon: <LinkIcon />,
      label: "Go to Source",
      onClick: handleGoToSource,
      color: "primary",
    },
    {
      icon: <InfoOutline />,
      label: "View all details",
      onClick: handleViewDetails,
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
      <Modal
        title="Job Details"
        data={selectedJobData}
        onClose={() => setSelectedJobData(null)}
      />
    </>
  );
}
