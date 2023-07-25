const analyzeArray = (array) => {
  if (array.length == 0) return null;

  let average = 0, min = array[0], max = array[0];
  array.forEach(element => {
    if (element < min) min = element;
    if (element > max) max = element;
    average += element;
  });

  return {
    "average": average / array.length,
    "min": min,
    "max": max,
    "length": array.length
  };
};

export { analyzeArray };