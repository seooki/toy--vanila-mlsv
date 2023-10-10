import { key } from "../assets/key.js";

export const getNumOfRows = async () => {
  const url =
    "http://api.data.go.kr/openapi/tn_pubr_public_free_mlsv_api"; /*URL*/
  let queryParams =
    "?" + encodeURIComponent("serviceKey") + "=" + key; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("100"); /**/
  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json"); /**/

  const response = await fetch(url + queryParams);
  const result = await response.json();
  const numOfRows = result.response.body.totalCount;

  return numOfRows;
};
