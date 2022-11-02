import { useEffect, useState } from 'react';

import star from '../../../assets/svgs/star.svg';

interface IRate {
  rate: number;
}

function Rate({ rate }: IRate) {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const isStarSmall = currentWidth < 640;
  const numberOfStars = Array(rate).fill('');

  useEffect(() => {
    const getWindowWidth = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('resize', getWindowWidth);

    return () => window.removeEventListener('resize', getWindowWidth);
  }, []);

  return (
    <div className={`${isStarSmall ? 'gap-[1px]' : 'gap-0'} flex`}>
      {numberOfStars.map((_, i) => (
        <div
          key={i}
          className={`${
            isStarSmall ? 'w-[10px] h-[10px]' : 'w-[19px] h-[18px]'
          }`}
        >
          <img
            className={`${
              isStarSmall ? 'opacity-60' : 'opacity-100'
            } w-full h-full`}
            src={star}
            alt="star"
          />
        </div>
      ))}
    </div>
  );
}

export default Rate;
