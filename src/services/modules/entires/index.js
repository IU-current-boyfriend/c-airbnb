import HttpInstance from "@/services";

export const getEntireRoomList = (offset, size = 20) => {
  return HttpInstance.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  });
}