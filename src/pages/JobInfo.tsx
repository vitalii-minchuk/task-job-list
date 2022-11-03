import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SingleArrowSVG from '../assets/svgs/SingleArrowSVG';
import AdditionalJobInfo from '../components/AdditionalJobInfo';
import AttachedJobInages from '../components/AttachedJobInages';
import Divider from '../components/common/Divider';
import DynamicJobInfo from '../components/DynamicJobInfo';
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
        <div className=" gap-[30px] lg:flex xl:gap-[115px]">
          <div>
            <DynamicJobInfo job={actualJob} />
            <StaticJobInfo />
            <div className="mb-[153px] mt-[16px] flex items-center justify-center lg:block lg:mb-[86px] lg:mt-[30px]">
              <button type="button" className="my-btn-dark">
                Apply now
              </button>
            </div>
            <div className="mb-[63px] flex flex-col gap-[55px] lg:flex-col-reverse lg:gap-[87px]">
              <AttachedJobInages job={actualJob} />
              <AdditionalJobInfo job={actualJob} />
            </div>
          </div>
          <div className="flex-shrink-0 lg:w-[350px] xl:w-[402px]">
            <h3 className="my-title lg:hidden">Contacts</h3>
            <div className="w-full mt-[10px] mb-[21px] lg:hidden">
              <Divider />
            </div>
            <JobDetailsBanner job={actualJob} />
          </div>
        </div>
        <button
          className="hidden mt-[50px] px-[26px] py-[18px] rounded-lg transition-all bg-[#384564]/10 hover:bg-[#384564]/20 items-center gap-[19px] sm:flex"
          type="button"
          onClick={() => navigate(-1)}
        >
          <SingleArrowSVG direction="left" color="#384564" />
          <p className=" uppercase text-[#3A4562] font-semibold text-[12px] leading-[16px]">
            RETURN TO JOB BOARD
          </p>
        </button>
      </div>
    </main>
  );
}

export default JobInfo;
