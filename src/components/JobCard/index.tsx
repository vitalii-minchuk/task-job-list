import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { setCurrentJob } from '../../store/Slices/jobsSlice';
import { JobType } from '../../types';
import getRandomNumber from '../../utils/helpers';
import Rate from '../common/Rate';

interface IJobCard {
  job: JobType;
}
function JobCard({ job }: IJobCard) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomNumber = getRandomNumber(5);

  const handleClick = () => {
    dispatch(setCurrentJob(job));
    navigate('/info');
  };

  return (
    <div className=" px-[16px] py-[13px] bg-[#EFF0F5] transition-all shadow-lg border rounded-lg hover:shadow-none">
      <div className="flex justify-between gap-[19px]">
        <div className="w-[66px] h-[66px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={job.pictures[0]}
            alt="job img"
          />
        </div>
        <Rate rate={randomNumber} />
        <div>
          <div>
            <div></div>
            <p></p>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleClick}>
        {job.title}
      </button>
    </div>
  );
}

export default JobCard;
