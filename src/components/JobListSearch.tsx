import { useJobItemsandSearchTextContext } from "../lib/hooks";
import JobList from "./JobList";

export default function JobListSearch() {
  const { sortedAndSlicedJobItems, isLoading } =
    useJobItemsandSearchTextContext();
  return <JobList jobItems={sortedAndSlicedJobItems} isLoading={isLoading} />;
}
