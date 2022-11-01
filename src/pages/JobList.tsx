import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchJobs } from '../store/Slices/jobsSlice';

function JobList() {
  const { jobs, isLoading } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {jobs?.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      )}
    </main>
  );
}

export default JobList;
