import { useLoaderData } from "react-router";
import PageHeader from "~/components/page-header";
import { getJobs } from "~/services/jobs/get-jobs";

export async function loader() {
  const jobs = await getJobs();
  return { jobs };
}

export default function JobSearch() {
  const { jobs } = useLoaderData<typeof loader>();
  
  return (
    <PageHeader
      title="Job Search"
      description="This is the job search page. Job search functionality will be implemented here."
    />
  );
}
