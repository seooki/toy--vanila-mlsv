import { key } from "../key.js";

export const getNumOfRows = async () => {
  const url = `http://api.data.go.kr/openapi/tn_pubr_public_free_mlsv_api?serviceKey=${key}&pageNo=1&numOfRows=1&type=json`;
  const response = await fetch(url);
  const result = await response.json();
  const numOfRows = result.response.body.totalCount;

  return numOfRows;
};
