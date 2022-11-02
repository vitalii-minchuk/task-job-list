import Loader from '../components/common/Loader';
import Pagination from '../components/common/Pagination';
import JobCard from '../components/JobCard';

import { useAppSelector } from '../hooks/reduxHooks';
import usePagination from '../hooks/usePagination';

function JobList() {
  const { jobs, isLoading } = useAppSelector((state) => state.jobs);
  const { shownJobs, currentPage, jobsPerPage, setCurrentPage } =
    usePagination(jobs);

  return (
    <main className="bg-[#F5F5F5] w-full h-screen">
      <div className="my-container">
        {isLoading ? (
          <div className="pt-16">
            <Loader />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-[8px]">
              {shownJobs?.map((job) => (
                <JobCard job={job} key={job.id} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalItems={jobs?.length}
              jobsPerPage={jobsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default JobList;
