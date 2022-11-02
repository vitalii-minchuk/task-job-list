import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SharedSVG from '../assets/svgs/SharedSVG';
import StarSVG from '../assets/svgs/StarSVG';
import Divider from '../components/common/Divider';
import JobDetailsBanner from '../components/JobDetailsBanner';
import StaticJobInfo from '../components/StaticJobInfo';

import { useAppSelector } from '../hooks/reduxHooks';
import { JobType } from '../types';

function JobInfo() {
  const [actualJob, setActualJob] = useState<JobType | null>(null);
  const { currentJob, jobs } = useAppSelector((state) => state.jobs);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentJob) {
      setActualJob(jobs[0]);
    } else {
      setActualJob(currentJob);
    }
  }, [currentJob, jobs]);

  return (
    <main className="bg-[#FFFFFF]">
      <div className="my-container pt-[40px] pb-[60px] sm:pt-[50px]">
        <div className="mb-[43px]">
          <h3 className="my-title">Job Details</h3>
          <div className="w-full mt-[12px] mb-[24px]">
            <Divider />
          </div>
          <div className="flex gap-[36px] mb-[34px]">
            <div className="flex gap-[11px]">
              <StarSVG />
              <p>Save to my list</p>
            </div>
            <div className="flex gap-[11px]">
              <SharedSVG />
              <p>Share</p>
            </div>
          </div>
          <h4 className="mb-[5px] text-[#3A4562] font-bold text-[24px] leading-[38px] tracking-[-0.75px]">
            {actualJob?.title}
          </h4>
          <div className="mb-[14px] flex justify-between items-center">
            <p>{moment(actualJob?.createdAt).fromNow()}</p>
            <div className="flex flex-col items-end gap-[4px]">
              <h6 className="text-[#38415D]/80 text-lg leading-[24px] tracking-[-0.5625px]">
                Brutto, per year
              </h6>
              <h4 className="my-subtitle">
                € {actualJob?.salary.replace(/k/g, '000')}
              </h4>
            </div>
          </div>
          <p className="text-[#38415D]/80 text-lg leading-[24px] tracking-[-0.5625px]">
            {actualJob?.description}
          </p>
        </div>
        <StaticJobInfo />
        <div className="mb-[153px] mt-[16px] flex items-center justify-center">
          <button type="button" className="my-btn-dark">
            Apply now
          </button>
        </div>
        <div className="mb-[63px]">
          <div className="mb-[55px]">
            <h3 className="my-title">Attached images</h3>
            <div className="w-3/4 mt-[10px] mb-[11px]">
              <Divider />
            </div>
            <div className="flex gap-[8px] overflow-scroll">
              {actualJob?.pictures.map((picture, i) => (
                <div
                  key={i}
                  className="min-w-[205px] h-[115px] rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={picture}
                    alt={`${picture}_${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
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
                {actualJob?.employment_type.map((type) => (
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
                {actualJob?.benefits.map((benefit) => (
                  <button className="my-btn-yellow" type="button" key={benefit}>
                    {benefit}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="my-title">Contacts</h3>
          <div className="w-full mt-[10px] mb-[21px]">
            <Divider />
          </div>
          <JobDetailsBanner job={actualJob} />
        </div>
      </div>
      <button className="hidden" type="button" onClick={() => navigate(-1)}>
        back
      </button>
    </main>
  );
}

export default JobInfo;
