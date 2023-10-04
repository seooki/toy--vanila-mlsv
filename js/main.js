import { getItem } from "./getItem.js";
import { map } from "./map.js";

const item = await getItem();

//네이버 맵
map(item);
