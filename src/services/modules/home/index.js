import HttpInstance from "@/services";

export const getHomeDiscountData = () => {
  return HttpInstance.get({
    url: '/home/discount'
  });
}

export const getHotRecommendData = () => {
  return HttpInstance.get({
    url: "/home/hotrecommenddest"
  });
}

export const getLongForInfoData = () => {
  return HttpInstance.get({
    url: '/home/longfor',
  });
}

export const getHighScoreInfoData = () => {
  return HttpInstance.get({
    url: '/home/highscore'
  });
}

export const getGoodPriceInfoData = () => {
  return HttpInstance.get({
    url: '/home/goodprice',
  });
}

export const getPlusInfoData = () => {
  return HttpInstance.get({
    url: '/home/plus'
  });
}