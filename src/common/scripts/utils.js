
export const dictPop = (obj, key) => {
  const value = obj[key];
  delete obj[key];
  return value;
};