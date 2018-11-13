import Search from "./models/Search";
import { elements } from "./views/base";
import * as SearchView from './views/SearchViews'; 


const state = {};

const controlSearch = async () => {
  const query = SearchView.getInput();
  console.log(query); 
  
  if (query) {
    state.search = new Search(query);

    await state.search.getResuls();

    console.log(state.search.result);
  }
};

elements.searchInput.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
