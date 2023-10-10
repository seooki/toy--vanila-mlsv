import { key } from "../assets/key.js";
import { getNumOfRows } from "./getNumOfRows.js";

async function getItem() {
  const totalCount = await getNumOfRows();
  const item = [];
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
    encodeURIComponent(totalCount); /**/
  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json"); /**/

  const response = await fetch(url + queryParams);
  const result = await response.json();
  console.log(result);
  item.push(result.response.body.items);

  return item;
}

export default getItem;
