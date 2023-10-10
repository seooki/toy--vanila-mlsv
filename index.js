import getItem from "./js/getItem.js";
import { map } from "./js/map.js";

const item = await getItem();

//네이버 맵
map(item);
