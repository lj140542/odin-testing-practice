const reverseString = (value) => {
  let tmp = [];
  for (let i = value.length; i >= 0; i--) {
    tmp.push(value[i]);
  }
  return tmp.join('');
};

export { reverseString };