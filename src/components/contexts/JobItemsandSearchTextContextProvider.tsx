import { createContext, useCallback, useMemo, useState } from "react";
import { RESULTS_PER_PAGE } from "../../lib/constants";
import { useDebounce, useSearchQuery } from "../../lib/hooks";
import { SortBy, PaginationDirection, jobItem } from "../../lib/types";

type JobItemsandSearchTextContextProps = {
  handleChangeSearchText: (newSearhText: string) => void;
  handleChangeSortBy: (newSortBy: SortBy) => void;
  handleChangePage: (direction: PaginationDirection) => void;
  sortedAndSlicedJobItems: jobItem[];
  totalNumberOfPages: number;
  totalNumberOfresults: number;
  currentPage: number;
  isLoading: boolean;
  sortBy: SortBy;
  searchText: string;
};
export const JobItemsandSearchTextContext =
  createContext<JobItemsandSearchTextContextProps | null>(null);

export default function JobItemsandSearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //States
  const [searchText, setSearchText] = useState("");
  const debouncedSearchtext = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchtext);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("relevant");

  //Derived / Computed States
  const totalNumberOfresults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfresults / RESULTS_PER_PAGE;
  const sortedJobs = useMemo(() => {
    return [...(jobItems || [])].sort((a, b) => {
      if (sortBy === "relevant") {
        return b.relevanceScore - a.relevanceScore;
      } else {
        return a.daysAgo - b.daysAgo;
      }
    });
  }, [sortBy, jobItems]);

  const sortedAndSlicedJobItems = useMemo(() => {
    return sortedJobs.slice(
      currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
      currentPage * RESULTS_PER_PAGE
    );
  }, [currentPage, sortedJobs]);

  // Event handlers / Actions
  const handleChangePage = useCallback((direction: PaginationDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  }, []);

  const handleChangeSortBy = useCallback((newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  }, []);

  const handleChangeSearchText = useCallback((newSearhText: string) => {
    setSearchText(newSearhText);
  }, []);
  const contextValue = useMemo(
    () => ({
      handleChangeSearchText,
      handleChangeSortBy,
      handleChangePage,
      sortedAndSlicedJobItems,
      totalNumberOfPages,
      totalNumberOfresults,
      currentPage,
      isLoading,
      sortBy,
      searchText,
    }),
    [
      handleChangeSearchText,
      handleChangeSortBy,
      handleChangePage,
      sortedAndSlicedJobItems,
      totalNumberOfPages,
      totalNumberOfresults,
      currentPage,
      isLoading,
      sortBy,
      searchText,
    ]
  );

  return (
    <JobItemsandSearchTextContext.Provider value={contextValue}>
      {children}
    </JobItemsandSearchTextContext.Provider>
  );
}
