import { useState } from "react";
import { useLoaderData } from "react-router";
import { Box } from "@mui/material";
import {
  DeleteOutline,
  Link as LinkIcon,
  FormatAlignJustify,
} from "@mui/icons-material";
import PageHeader from "~/components/page-header";
import DataGridTable from "~/components/data-grid-table";
import Modal from "~/components/modal";
import { getSavedJobs } from "~/services/jobs/get-saved-jobs";
import { savedJobsTableColumns } from "~/components/data-grid-table/tables-columns-config/saved-jobs-table-columns";
import type { SavedJobRow } from "~/components/data-grid-table/tables-columns-config/saved-jobs-table-columns";
import type { TableAction } from "~/components/data-grid-table/types";
import type { ModalItem } from "~/components/modal";

export async function loader() {
  const savedJobs = await getSavedJobs();
  return { savedJobs };
}

export default function SavedJobs() {
  const { savedJobs } = useLoaderData<typeof loader>();
  const [selectedJobData, setSelectedJobData] = useState<ModalItem[] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveJob = (job: SavedJobRow) => {
    console.log("Remove job:", job.title);
  };

  const handleGoToSource = (job: SavedJobRow) => {
    window.open(job.source, "_blank");
  };

  const handleViewDetails = (job: SavedJobRow) => {
    const modalData: ModalItem[] = [
      { title: "Description", description: job.description },
      { title: "Job Title", description: job.title },
      { title: "Company", description: job.company },
      { title: "Location", description: job.location },
      { title: "Workplace Type", description: job.workplaceType },
      { title: "Status", description: job.status },
      { title: "Posted At", description: job.postedAt.toLocaleDateString() },
      { title: "Technologies/Tools", description: job.technologies.join(", ") },
    ];
    setSelectedJobData(modalData);
    setIsModalOpen(true);
  };

  const tableActions: TableAction<SavedJobRow>[] = [
    {
      icon: <DeleteOutline />,
      label: "Remove Job",
      onClick: handleRemoveJob,
      color: "error",
    },
    {
      icon: <LinkIcon />,
      label: "Go to Source",
      onClick: handleGoToSource,
      color: "primary",
    },
    {
      icon: <FormatAlignJustify />,
      label: "View / Edit",
      onClick: handleViewDetails,
      color: "secondary",
    },
  ];

  return (
    <>
      <PageHeader
        title="Saved Jobs"
        description="Manage your saved jobs and track your application status."
      />
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DataGridTable<SavedJobRow>
          columns={savedJobsTableColumns}
          rows={savedJobs}
          removeBorder={true}
          pageSize={10}
          pageSizeOptions={[5, 10, 25, 50]}
          actions={tableActions}
        />
      </Box>
      {selectedJobData && (
        <Modal
          open={isModalOpen}
          title="Job Details"
          data={selectedJobData}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
