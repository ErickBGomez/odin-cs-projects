const sortAndRemoveDuplicted = (array) => {
  return [...new Set(array)].sort((a, b) => a - b);
};

export default sortAndRemoveDuplicted;
