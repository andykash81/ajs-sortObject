export default function orderByProperty(object, array) {
  const copyObject = { ...object };
  const sortArray = [];
  array.forEach((element) => {
    Object.entries(copyObject).forEach(([key, value]) => {
      if (element === key) {
        const objectValue = { key, value };
        sortArray.push(objectValue);
        delete copyObject[key];
      }
    });
  });
  Object.entries(copyObject).sort().forEach(([key, value]) => {
    const objectValue = { key, value };
    sortArray.push(objectValue);
  });
  return sortArray;
}
