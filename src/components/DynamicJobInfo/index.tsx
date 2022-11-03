import moment from 'moment';
import FlagSVG from '../../assets/svgs/FlagSVG';
import SharedSVG from '../../assets/svgs/SharedSVG';
import StarSVG from '../../assets/svgs/StarSVG';
import { JobType } from '../../types';
import Divider from '../common/Divider';

interface IDynamicJobInfo {
  job: JobType | null;
}

function DynamicJobInfo({ job }: IDynamicJobInfo) {
  return (
    <div className="mb-[43px]">
      <div className="lg:flex justify-between items-end">
        <h3 className="my-title">Job Details</h3>
        <div className="w-full mt-[12px] mb-[24px] lg:hidden">
          <Divider />
        </div>
        <div className="flex gap-[36px] mb-[34px] lg:mb-0">
          <div className="flex gap-[11px]">
            <div className="hidden lg:block">
              <FlagSVG />
            </div>
            <div className="lg:hidden">
              <StarSVG />
            </div>
            <p className="text-[#3A4562] text-[18px] leading-[24px] tracking-[-0.5625px]">
              Save to my list
            </p>
          </div>
          <div className="flex gap-[11px]">
            <SharedSVG />
            <p className="text-[#3A4562] text-[18px] leading-[24px] tracking-[-0.5625px]">
              Share
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mb-[32px]">
        <div className="w-full mt-[9px] mb-[57px]">
          <Divider />
        </div>
        <button type="button" className="my-btn-dark">
          Apply now
        </button>
      </div>
      <div className="lg:flex justify-between gap-[60px]">
        <h4 className="mb-[5px] text-[#3A4562] font-bold text-[24px] leading-[38px] tracking-[-0.75px]">
          {job?.title}
        </h4>
        <div className="hidden flex-col items-start gap-[4px] lg:flex min-w-[161px]">
          <h4 className="my-subtitle">€ {job?.salary.replace(/k/g, '000')}</h4>
          <h6 className="text-[#38415D]/80 text-lg leading-[24px] tracking-[-0.5625px]">
            Brutto, per year
          </h6>
        </div>
      </div>
      <div className="mb-[14px] flex justify-between items-center">
        <p className="text-[#38415D]/60 font-light text-[13px] leading-[25px] tracking-[0.191905px] lg:text-[18px] lg:leading-[24px] lg:tracking-[-0.5625px]">
          {moment(job?.createdAt).fromNow()}
        </p>
        <div className="flex flex-col items-end gap-[4px] lg:hidden">
          <h6 className="text-[#38415D]/80 text-lg leading-[24px] tracking-[-0.5625px]">
            Brutto, per year
          </h6>
          <h4 className="my-subtitle">€ {job?.salary.replace(/k/g, '000')}</h4>
        </div>
      </div>
      <p className="text-[#38415D]/80 text-lg leading-[24px] tracking-[-0.5625px]">
        {job?.description}
      </p>
    </div>
  );
}

export default DynamicJobInfo;
