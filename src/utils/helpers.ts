const getRandomNumber = (limit: number): number => {
  const result = Math.floor(Math.random() * limit + 1);

  return result;
};

export default getRandomNumber;
