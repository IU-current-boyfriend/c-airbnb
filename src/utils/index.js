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

export const combineMessages = messagesArr => {
  if (!Array.isArray(messagesArr)) return;
  return messagesArr.join('·');
}

export const combineRoomPrice = price => {
  if (!price) return;
  return `¥${price}/晚`;
} 
