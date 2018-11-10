const formatString = (string) => {
  if (string.length === 0) { return ''; }
  let result = string.toLowerCase();
  result = result[0].toUpperCase() + string.slice(1);
  return result;
};

export default formatString;
