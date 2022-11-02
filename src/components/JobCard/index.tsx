import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { setCurrentJob } from '../../store/Slices/jobsSlice';
import { JobType } from '../../types';
import { getRandomNumber } from '../../utils/helpers';
import Rate from '../common/Rate';
import LocationIcon from '../../assets/images/location-icon.png';
import FlagSVG from '../../assets/svgs/FlagSVG';

interface IJobCard {
  job: JobType;
}
function JobCard({ job }: IJobCard) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomNumber = getRandomNumber(5);

  const handleClick = () => {
    dispatch(setCurrentJob(job));
    navigate(`/info/${job.id}`);
  };

  return (
    <div className="px-[16px] pt-[13px] pb-[27px] bg-[#EFF0F5] transition-all shadow-lg border rounded-lg hover:shadow-none sm:py-[24px]">
      <div className="flex justify-between gap-[19px] sm:gap-[26px]">
        <div className="mt-[39px] w-[66px] h-[66px] rounded-full overflow-hidden sm:mt-0 sm:w-[85px] sm:h-[85px]">
          <img
            className="w-full h-full object-cover"
            src={job.pictures[0]}
            alt="job img"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[14px] sm:flex-row-reverse sm:justify-between sm:gap-[50px]">
          <div className="h-[25px] flex justify-between items-center sm:gap-[32px] sm:h-full">
            <Rate rate={randomNumber} />
            <div className="h-full flex flex-col justify-between items-end">
              <span className="hidden sm:block">
                <FlagSVG />
              </span>
              <p className="text-[#878D9D] text-end font-light text-sm tracking-[0.206667px]">
                {moment(job.createdAt).fromNow()}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] sm:gap-[8px]">
            <button
              className="text-start text-[#3A4562] text-lg leading-[24px] tracking-[-0.5625px]"
              type="button"
              onClick={handleClick}
            >
              {job.title}
            </button>
            <p className="text-[#878D9D] text-base leading-[25px] tracking-[0.23619px]">
              Department name • {job.name}
            </p>
            <div className="flex items-center gap-[11px]">
              <img
                className="w-[13px] h-[18px]"
                src={LocationIcon}
                alt="location img"
              />
              <p className="text-[#878D9D] text-base leading-[25px] tracking-[0.23619px]">
                {job.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
