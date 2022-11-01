import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getData from '../api';
import { JobType } from '../types';

function JobList() {
  const [jobs, setJobs] = useState<JobType[] | null>(null);
  useEffect(() => {
    getData().then((res) => setJobs(res));
  }, []);
  return (
    <div>
      {jobs?.map((el) => (
        <Link key={el.id} to="/info">
          <p>{el.id}</p>
        </Link>
      ))}
    </div>
  );
}

export default JobList;
