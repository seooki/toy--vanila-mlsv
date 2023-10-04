import { key } from "../key.js";

export const getItem = async () => {
  const geo = [];
  const url = `http://api.data.go.kr/openapi/tn_pubr_public_free_mlsv_api?serviceKey=${key}&pageNo=1&numOfRows=100&type=json`;
  const response = await fetch(url);
  const result = await response.json();
  result.response.body.items.map((item) => {
    geo.push({
      x: item.latitude,
      y: item.longitude,
      fcltyNm: item.fcltyNmm,
      rdnmadr: item.rdnmadr,
    });
  });

  return geo;
};
