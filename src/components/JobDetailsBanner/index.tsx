import { JobType } from '../../types';
import Loader from '../common/Loader';
import SmallMap from '../SmallMap';
import LocationIcon from '../../assets/images/location-icon.png';
import { getPhoneMask } from '../../utils/helpers';

interface IJobDetailsBanner {
  job: JobType | null;
}

function JobDetailsBanner({ job }: IJobDetailsBanner) {
  return (
    <div className="w-full h-[436px] rounded-lg overflow-hidden bg-[#2A3047]">
      {job?.location ? (
        <>
          <div className="h-[200px] px-[62px] py-[31px] text-[#E7EAF0]">
            <p className="mb-[17px] text-[#E7EAF0] font-bold text-base leading-[19px] tracking-[0.23619px]">
              Department name • {job?.name}
            </p>
            <div className="flex items-start gap-[8px] mb-[6px]">
              <img
                className="w-[13px] h-[18px]"
                src={LocationIcon}
                alt="location img"
              />
              <p className="text-[#E7EAF0] text-base leading-[23px] tracking-[-0.5px]">
                {job.address}
              </p>
            </div>
            <p className="mb-[6px] text-[#E7EAF0] text-base leading-[23px] tracking-[-0.5px]">
              {getPhoneMask(job.phone)},
            </p>
            <p className="text-[#E7EAF0] text-base leading-[23px] tracking-[-0.5px]">
              {job.email}
            </p>
          </div>
          <div className="h-[236px]">
            <SmallMap location={job?.location} />
          </div>
        </>
      ) : (
        <div className="mt-[170px]">
          <Loader type="light" />
        </div>
      )}
    </div>
  );
}

export default JobDetailsBanner;
