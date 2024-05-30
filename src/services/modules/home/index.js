import HttpInstance from "@/services";

export const getHomeDiscountData = () => {
  return HttpInstance.get({
    url: '/home/discount'
  });
}