export const collectNames = (data, key) => {
  if (!Array.isArray(data)) return [];
  return data.reduce((prev, current) => {
    current.name && prev.push(current.name);
    return prev;
  }, []);
}

export const isEmptyObject = (object) => {
  return Object.keys(object).length > 0;
}