import { JobType } from '../../types';
import Divider from '../common/Divider';

interface IAdditionalJobInfo {
  job: JobType | null;
}

function AdditionalJobInfo({ job }: IAdditionalJobInfo) {
  return (
    <div>
      <h3 className="my-title">Additional info</h3>
      <div className="w-full mt-[10px] mb-[15px]">
        <Divider />
      </div>
      <div className="mb-[22px] flex flex-col gap-[10px]">
        <p className="mb-[10px] text-[#38415D]/80 text-[18px] leading-[24px] tracking-[-0.5625px]">
          Employment type
        </p>
        <div className="flex gap-[8px] overflow-scroll">
          {job?.employment_type.map((type) => (
            <button className="my-btn-blue" type="button" key={type}>
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#38415D]/80 text-[18px] leading-[24px] tracking-[-0.5625px]">
          Benefits
        </p>
        <div className="flex gap-[8px] overflow-scroll">
          {job?.benefits.map((benefit) => (
            <button className="my-btn-yellow" type="button" key={benefit}>
              {benefit}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdditionalJobInfo;
