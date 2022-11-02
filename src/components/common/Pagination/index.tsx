import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import SingleArrowSVG from '../../../assets/svgs/SingleArrowSVG';

interface IPaginationProps {
  totalItems: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  jobsPerPage: number;
  currentPage: number;
}

function Pagination({
  totalItems,
  jobsPerPage,
  currentPage,
  setCurrentPage,
}: IPaginationProps) {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const buttons = [] as Array<number>;

  for (let i = 1; i <= Math.ceil(totalItems / jobsPerPage); i += 1) {
    buttons.push(i);
  }

  useEffect(() => {
    const getWindowWidth = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('resize', getWindowWidth);

    return () => window.removeEventListener('resize', getWindowWidth);
  }, []);

  const arrowColor = currentWidth > 500 ? '#7D859C' : '#FFFFFF';

  const handleClick = (i: number) => {
    setCurrentPage(i + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  if (buttons.length === 1) return null;

  return (
    <div className="h-[40px] max-w-[512px] mx-auto mt-[26px] flex justify-center items-center gap-[23px] rounded-lg bg-[#F9FAFD] drop-shadow-lg sm:h-[52px] rounded=[10px] sm:mt-[49px] sm:gap-[31px]">
      <button
        className="disabled:opacity-40"
        disabled={currentPage < 2}
        type="button"
        onClick={handlePrev}
      >
        <SingleArrowSVG direction="left" color={arrowColor} />
      </button>
      <div className="w-[200px] flex justify-center gap-[6px] border-x border-[#38415D]/5 sm:border-[#DEE3EF] sm:h-[31px] sm:w-[375px]">
        {buttons?.map((button, index) => (
          <button
            type="button"
            className={`${
              button === currentPage
                ? 'text-[#55699E] paginationUnderline'
                : 'text-[#38415D]/60'
            } w-[24px] text-center font-bold relative transition-all tracking-[1.33333px] text-[16px] leading-[19px] sm:w-[31px]`}
            onClick={() => handleClick(index)}
            key={button}
          >
            {button}
          </button>
        ))}
      </div>
      <button
        className="disabled:opacity-40"
        disabled={currentPage > buttons.length - 1}
        type="button"
        onClick={handleNext}
      >
        <SingleArrowSVG direction="right" color={arrowColor} />
      </button>
    </div>
  );
}

export default Pagination;
