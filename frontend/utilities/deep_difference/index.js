import { isObject, map } from 'lodash';

const deepDifference = (obj1, obj2) => {
  const result = {};

  map(obj1, (value, key) => {
    const obj2Value = obj2[key];

    if (isObject(value) && isObject(obj2Value)) {
      result[key] = deepDifference(value, obj2Value);
    } else if (value !== obj2Value) {
      result[key] = value;
    }
  });

  return result;
};

export default deepDifference;