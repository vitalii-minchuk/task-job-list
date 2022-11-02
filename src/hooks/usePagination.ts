import { useState, useEffect } from 'react';
import { JobType } from '../types';

function usePagination(jobs: JobType[]) {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownJobs, setShownJobs] = useState<JobType[]>([]);

  const jobsPerPage = 6;
  const lastIndex = currentPage * jobsPerPage;
  const firstIndex = lastIndex - jobsPerPage;

  useEffect(() => {
    setShownJobs(jobs.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex, jobs]);

  return {
    shownJobs,
    setCurrentPage,
    jobsPerPage,
    currentPage,
  };
}

export default usePagination;
