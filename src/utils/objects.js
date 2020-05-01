export const getNextId = (array, idProp) => {
  let maxId = Math.max.apply(Math, array.map(item => item[idProp]));
  return maxId + 1;
};
