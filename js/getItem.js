import { key } from "../key.js";
import { getNumOfRows } from "./getNumOfRows.js";

export const getItem = async () => {
  const totalCount = await getNumOfRows();
  const geo = [];
  const url = `http://api.data.go.kr/openapi/tn_pubr_public_free_mlsv_api?serviceKey=${key}&pageNo=1&numOfRows=${totalCount}&type=json`;
  const response = await fetch(url);
  const result = await response.json();
  result.response.body.items.map((item) => {
    geo.push({
      latitude: item.latitude,
      longitude: item.longitude,
      fcltyNm: item.fcltyNm,
      rdnmadr: item.rdnmadr,
      phoneNumber: item.phoneNumber,
      mlsvPlace: item.mlsvPlace,
      mlsvTime: item.mlsvTime,
      mlsvDate: item.mlsvDate,
      mlsvTrget: item.mlsvTrget,
    });
  });

  return geo;
};
