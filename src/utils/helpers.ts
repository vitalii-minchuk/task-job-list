export const getRandomNumber = (limit: number): number => {
  const result = Math.floor(Math.random() * (limit + 1));

  return result;
};

export const getPhoneMask = (phone: string): string => {
  return `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(
    5,
    8
  )} - ${phone.slice(8, 10)} - ${phone.slice(10)}`;
};
