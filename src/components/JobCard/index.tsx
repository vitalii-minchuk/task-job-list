import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setCurrentJob } from '../../store/Slices/jobsSlice';
import { JobType } from '../../types';

interface IJobCard {
  job: JobType;
}
function JobCard({ job }: IJobCard) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCurrentJob(job));
    navigate('/info');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {job.title}
      </button>
    </div>
  );
}

export default JobCard;
