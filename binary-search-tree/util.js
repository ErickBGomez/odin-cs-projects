const sortArray = (array = []) => {
  return [...new Set(array)].sort((a, b) => a - b);
};

export default sortArray;
