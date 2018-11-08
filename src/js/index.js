import axios from "axios";

import { times as t, add as a, ID } from "./views/SearchViews";
import sting from "../js/models/Search";

async function getResuls(query) {
  const key = "70615e47240e15c4ce77ff3535f534b1";
  const res = await axios(
    `https://www.food2fork.com/api/search?key=${key}&q=${query}`
  );
}

console.log(`add ${a(4, 6)}, times ${t(5, 3)} ID = ${ID}`);

// 70615e47240e15c4ce77ff3535f534b1
// https://www.food2fork.com/api/search
